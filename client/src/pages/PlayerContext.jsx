import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const url = 'http://localhost:4000';

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);
    const [playbackOrder, setPlaybackOrder] = useState([]);
    const [originalPlaybackOrder, setOriginalPlaybackOrder] = useState([]);
    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekBar = useRef(null);

    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [volume, setVolume] = useState(1);

    const [track, setTrack] = useState(songsData[0]);
   
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { minute: 0, second: 0 },
        totalTime: { minute: 0, second: 0 }
    });

    useEffect(() => {
        const getSongsData = async () => {
            try {
                const response = await axios.get(`${url}/api/song/list`);
                const songs = response.data.songs;
                
                setSongsData(songs);
                setOriginalPlaybackOrder(songs.map(song => song._id));
                setPlaybackOrder(songs.map(song => song._id));
                setTrack(songs[0]);
                if (audioRef.current && songs[0]) {
                    audioRef.current.src = songs[0].url;
                    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const getAlbumsData = async () => {
            try {
                const response = await axios.get(`${url}/api/album/list`);
                setAlbumsData(response.data.Album);
            } catch (error) {
                console.error(error);
            }
        };

        getSongsData();
        getAlbumsData();

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);

    const handleLoadedMetadata = () => {
        if (audioRef.current && !isNaN(audioRef.current.duration)) {
            setTime(prev => ({
                ...prev,
                totalTime: {
                    minute: Math.floor(audioRef.current.duration / 60),
                    second: Math.floor(audioRef.current.duration % 60)
                }
            }));
        }
    };

    const play = () => {
        if (audioRef.current && track) {
            audioRef.current.play().catch(error => {
                console.error("Error playing the audio:", error);
            });
            setPlayStatus(true);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    };

    const toggleLoop = () => {
        setIsLooping(prev => !prev);
    };

    const toggleShuffle = () => {
        if (isShuffling) {
            setPlaybackOrder(originalPlaybackOrder);
        } else {
            shufflePlaybackOrder();
        }
        setIsShuffling(prev => !prev);
    };

    const shufflePlaybackOrder = () => {
        const shuffledOrder = [...originalPlaybackOrder];
        for (let i = shuffledOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
        }
        setPlaybackOrder(shuffledOrder);
    };

    const playWithId = (id) => {
        const song = songsData.find(item => item._id === id);
        if (song) {
            setTrack(song);
            if (audioRef.current) {
                audioRef.current.src = song.url;
                audioRef.current.load();
                audioRef.current.oncanplaythrough = () => {
                    audioRef.current.play().catch(error => {
                        console.error("Error playing the audio:", error);
                    });
                    setPlayStatus(true);
                };
            }
        }
    };

    const previous = () => {
        const currentIndex = playbackOrder.findIndex(id => id === track?._id);
        if (currentIndex > 0) {
            const prevTrack = songsData.find(item => item._id === playbackOrder[currentIndex - 1]);
            if (prevTrack) {
                setTrack(prevTrack);
                if (audioRef.current) {
                    audioRef.current.src = prevTrack.url;
                    audioRef.current.load();
                    audioRef.current.oncanplaythrough = () => {
                        audioRef.current.play().catch(error => {
                            console.error("Error playing the audio:", error);
                        });
                        setPlayStatus(true);
                    };
                }
            }
        }
    };

    const next = () => {
        const currentIndex = playbackOrder.findIndex(id => id === track?._id);
        let nextIndex;
        if (isShuffling) {
            nextIndex = (currentIndex + 1) % playbackOrder.length;
        } else {
            nextIndex = currentIndex < playbackOrder.length - 1 ? currentIndex + 1 : -1;
        }

        if (nextIndex >= 0) {
            const nextTrack = songsData.find(item => item._id === playbackOrder[nextIndex]);
            if (nextTrack) {
                setTrack(nextTrack);
                if (audioRef.current) {
                    audioRef.current.src = nextTrack.url;
                    audioRef.current.load();
                    audioRef.current.oncanplaythrough = () => {
                        audioRef.current.play().catch(error => {
                            console.error("Error playing the audio:", error);
                        });
                        setPlayStatus(true);
                        if (seekBar.current) {
                            seekBar.current.style.width = '0%';
                        }
                    };
                }
            }
        } else if (isLooping) {
            const firstTrack = songsData.find(item => item._id === playbackOrder[0]);
            if (firstTrack) {
                setTrack(firstTrack);
                if (audioRef.current) {
                    audioRef.current.src = firstTrack.url;
                    audioRef.current.load();
                    audioRef.current.oncanplaythrough = () => {
                        audioRef.current.play().catch(error => {
                            console.error("Error playing the audio:", error);
                        });
                        setPlayStatus(true);
                        if (seekBar.current) {
                            seekBar.current.style.width = '0%';
                        }
                    };
                }
            }
        } else {
            setPlayStatus(false);
            const firstTrack = songsData.find(item => item._id === playbackOrder[0]);
            if (firstTrack) {
                setTrack(firstTrack);
                if (audioRef.current) {
                    audioRef.current.src = firstTrack.url;
                    audioRef.current.load();
                    audioRef.current.oncanplaythrough = () => {
                        audioRef.current.pause();
                        setPlayStatus(false);
                        if (seekBar.current) {
                            seekBar.current.style.width = '0%';
                        }
                    };
                }
            }
        }
    };

    const seekSong = (e) => {
        if (audioRef.current && seekBg.current && !isNaN(audioRef.current.duration)) {
            const rect = seekBg.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = Math.max(0, Math.min(1, x / seekBg.current.offsetWidth));
            const newTime = percentage * audioRef.current.duration;
            console.log("Seeking to:", newTime, "Percentage:", percentage);
            audioRef.current.currentTime = newTime;
        }
    };

    const adjustVolume = (newVolume) => {
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            const handleTimeUpdate = () => {
                if (seekBar.current && !isNaN(audioRef.current.duration)) {
                    seekBar.current.style.width = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + "%";
                }

                setTime(prev => ({
                    ...prev,
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    }
                }));
            };

            const handleEnded = () => {
                if (isLooping) {
                    if (seekBar.current) {
                        seekBar.current.style.width = '0%';
                    }
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().catch(error => {
                        console.error("Error playing the audio:", error);
                    });
                } else {
                    next();
                }
            };

            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('ended', handleEnded);

            return () => {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('ended', handleEnded);
            };
        }
    }, [audioRef, next, isLooping]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong,
        songsData, albumsData,
        toggleLoop, isLooping,
        toggleShuffle, isShuffling,
        volume, adjustVolume
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
