import React, { useState } from 'react';
import { assets } from '../assets/assets';
import '../Styles/AddAlbum.css';
import axios from 'axios';
import { url } from './Display';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColor,setBgColor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('bgColor', bgColor);
      formData.append('image', image);

      const response = await axios.post(`${url}/api/album/add`, formData);

      if (response.data.success) {
        toast.success("Album Added");
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
            <img className='addalbum-upload-image' src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
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

export default AddAlbum;
