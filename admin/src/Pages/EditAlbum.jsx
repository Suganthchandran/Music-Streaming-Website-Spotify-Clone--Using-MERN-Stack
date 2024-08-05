import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import '../Styles/EditAlbum.css';
import axios from 'axios';
import { url } from './Display';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditAlbum = () => {
    const {id} = useParams();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [bgColor,setBgColor] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchAlbumData = async ()=>{
        try{
            const response = await axios.get(`${url}/api/album/findalbum/${id}`);
            if (response.data.success) {
                const album = response.data.list;
                setImage(album.image);
                setName(album.name);
                setDesc(album.desc);
                setBgColor(album.bgColor);
               
            } else {
                toast.error("Failed to fetch Album data");
            }
        }
        catch(error)
        {
            toast.error("Error fetching Album data");
        }
    }

    useEffect(() => {   
        if (id) {
            fetchAlbumData();
        }
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const formData = new FormData();
  
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('bgColor', bgColor);
        if (image instanceof File) {
            formData.append('image', image);
        }
  
        const response = await axios.put(`${url}/api/album/updatealbum/${id}`, formData);

        console.log(response.data);
  
        if (response.data.success) {
          toast.success("Album Updated");
          setImage(null);
          setName("");
          setDesc("");
          setBgColor("");
        } else {
          toast.error("Something Went Wrong");
        }
      } catch (error) {
        toast.error("Error Occurred");
      } finally {
        setLoading(false);
      }
    }
  
    return loading ? (
      <div>
        <span className="loader"></span>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className='addalbum'>
          <div className='form-elements'>
            <label>Upload Image </label>
            <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' accept='image/*' hidden />
            <label htmlFor='image'>
              <img className='addalbum-upload-image' src={image instanceof File ? URL.createObjectURL(image) : assets.upload_area} alt='' />
            </label>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <div className='form-elements'>
            <label>Album Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' name='albumName' />
          </div>
          <div className='form-elements'>
            <label>Album Description</label>
            <input onChange={(e) => setDesc(e.target.value)} value={desc} type='text' name='albumDescription' />
          </div>
          <div className='form-elements'>
            <label>Background Color</label>
            <input onChange={(e) => setBgColor(e.target.value)} type='color' />
          </div>
          <div className='form-elements'>
            <button type='submit'>Add</button>
          </div>
        </div>
      </form>
    );
  }
  
  export default EditAlbum;
  