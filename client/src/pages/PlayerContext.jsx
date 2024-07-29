import { createContext, useEffect, useRef, useState } from "react";
import { songsData,albumsData } from '../assets/frontend-assets/assets'
import axios from 'axios';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const url = 'http://localhost:4000';

    const [songsData,setSongsData] = useState([]);
    const [albumsData,setAlbumsData] = useState([]);
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime: {
            minute:0,
            second:0
        },
        totalTime: {
            minute:0,
            second:0
        }
    })

    const play = ()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = ()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id)=>{
        await setTrack(songsData[id]);
        audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async ()=>{
        if(track.id > 0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async ()=>{
        if(track.id < songsData.length-1) {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (e)=>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
    }

    const getSongsData = async ()=>{
        try{
            const response = await axios.get(`${url}/api/song/list`);
            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
        }
        catch(error)
        {

        }
    }

    const getAlbumsData = async ()=>{
        try{
            const response = await axios.get(`${url}/api/album/list`);
            setAlbumsData(response.data.Album);
        }
        catch(error)
        {

        }
    }

    


    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{

                seekBar.current.style.width = Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)+"%";

                setTime({
                    currentTime: {
                        second:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime: {
                        second:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60)
                    }
                })
            }
        },1000);
    },[audioRef])

    useEffect(()=>{
        getSongsData();
        getAlbumsData();
    },[])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong,
        songsData,albumsData
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;