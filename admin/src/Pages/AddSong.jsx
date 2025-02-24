import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import '../Styles/AddSong.css';
import axios from 'axios';
import { url } from './Display';
import { toast } from 'react-toastify';

const AddSong = () => {
  const [image, setImage] = useState(false); 
  const [song, setSong] = useState(false); 
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [artist, setArtist] = useState("");
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);

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

      const response = await axios.post(`${url}/api/song/add`, formData);

      if (response.data.success) {
        toast.success("Song Added");
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
      toast.error("Error Occurred");
    } finally {
      setLoading(false);
    }
  }

  const loadAlbumData = async ()=>{
    try{
        const response = await axios.get(`${url}/api/album/list`);

        if(response.data.success)
        {
          setAlbumData(response.data.Album);
        }
        else
        {
          toast.error("Unable to Load Album Data");
        }
    }
    catch(error)
    {
        toast.error("Something Error Happens");
    }
  }

  useEffect(()=>{
    loadAlbumData();
  },[])

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
          <label>Song Source</label>
          <input onChange={(e) => setDesc(e.target.value)} value={desc} type='text' name='songDescription' />
        </div>
        <div className='form-elements'>
          <label>Song Album</label>
          <select onChange={(e) => setAlbum(e.target.value)} value={album} name='songAlbum'>
            <option value=''>Select Album</option>
            {albumData.map((item,index)=>(<option value={item.name}>{item.name}</option>))}
          </select>
        </div>
        <div className='form-elements'>
          <label>Song Artist</label>
          <input onChange={(e) => setArtist(e.target.value)} value={artist} type='text' name='songArtist' />
        </div>
        <div className='form-elements'>
          <button type='submit'>Add</button>
        </div>
      </div>
    </form>
  );
}

export default AddSong;
