import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from './Display';
import { toast } from 'react-toastify';
import '../Styles/ListAlbum.css'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ListAlbum = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.Album)
        console.log(data);
      }
    }
    catch (error) {
      toast.error("Error Occured");
    }
  }

  const removeSongs = async (id)=>{
    try{
      const response = await axios.post(`${url}/api/album/delete`,{id});

      if(response.data.success)
      {
        toast.success(response.data.message);
        await fetchSongs();
      }

    }
    catch(error)
    {
      toast.error("Something Error Happen");
    }
  }

  useEffect(() => {
    fetchSongs();
  }, [])

  return (
    <>
      <p>All Album List</p>
      <div className='disp-album-body-albums'>
        <p>ID</p>
        <p>Image</p>
        <p>Name</p>
        <p>Description</p>
        <p>Color</p>
        <p>Action</p>
      </div>
      <hr />
      {
        data.map((item, index) => (
          <div key={index} className='disp-album-data-albums'>
            <b style={{ color: '#a7a7a7' }}>{index + 1}</b>
            <img style={{width:'32%'}} src={item.image} alt='' />
            <p>{item.name}</p>
            <p>{item.desc}</p>
            <p>{item.bgColor}</p>
            <div className='disp-album-action-albums'>
            <MdDelete onClick={()=>removeSongs(item._id)} className='icon' />
            <MdEdit onClick={()=>navigate('/edit-songs')} className='icon' />
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ListAlbum