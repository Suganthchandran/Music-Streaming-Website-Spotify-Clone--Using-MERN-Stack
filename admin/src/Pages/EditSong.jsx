import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import '../Styles/AddSong.css';
import axios from 'axios';
import { url } from './Display';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditSong = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null); 
    const [song, setSong] = useState(null); 
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [album, setAlbum] = useState("none");
    const [artist, setArtist] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                const response = await axios.get(`${url}/api/song/list`);
                if (response.data.success) {
                    const song = response.data.song;
                    setName(song.name);
                    setDesc(song.desc);
                    setAlbum(song.album);
                    setArtist(song.artist);
                }
            } catch (error) {
                toast.error("Error fetching song data");
            }
        };
        fetchSongData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('album', album);
            formData.append('artist', artist);
            formData.append('image', image);
            formData.append('audio', song);

            const response = await axios.put(`${url}/api/song/update/${id}`, formData);

            if (response.data.success) {
                toast.success("Song Updated");
                setImage(null);
                setSong(null);
                setName("");
                setDesc("");
                setAlbum("none");
                setArtist("");
            } else {
                toast.error("Something Went Wrong");
            }
        } catch (error) {
            console.error("Error in updating song:", error);
            toast.error("Error Occurred");
        } finally {
            setLoading(false);
        }
    };

    return loading ? (
        <div>
            <span className="loader"></span>
        </div>
    ) : (
        <form onSubmit={handleSubmit} className='addsong'>
            <div className='upload-section' style={{ display: 'flex', alignItems: 'left', gap: '-5%', justifyContent: 'start' }}>
                <div className='form-elements'>
                    <label>Upload Song </label>
                    <input onChange={(e) => setSong(e.target.files[0])} type='file' id='song' accept='audio/*' hidden />
                    <label htmlFor='song'>
                        <img className='addsong-upload-image' src={song ? assets.upload_added : assets.upload_song} alt='' />
                    </label>
                </div>
                <div className='form-elements'>
                    <label>Upload Image </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' accept='image/*' hidden />
                    <label htmlFor='image'>
                        <img className='addsong-upload-image' src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
                    </label>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <div className='form-elements'>
                    <label>Song Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' name='songName' />
                </div>
                <div className='form-elements'>
                    <label>Song Description</label>
                    <input onChange={(e) => setDesc(e.target.value)} value={desc} type='text' name='songDescription' />
                </div>
                <div className='form-elements'>
                    <label>Song Album</label>
                    <select onChange={(e) => setAlbum(e.target.value)} value={album} name='songAlbum'>
                        <option value=''>Select Album</option>
                        <option value='album1'>Album 1</option>
                        <option value='album2'>Album 2</option>
                    </select>
                </div>
                <div className='form-elements'>
                    <label>Song Artist</label>
                    <input onChange={(e) => setArtist(e.target.value)} value={artist} type='text' name='songArtist' />
                </div>
                <div className='form-elements'>
                    <button type='submit'>Edit</button>
                </div>
            </div>
        </form>
    );
}

export default EditSong;
