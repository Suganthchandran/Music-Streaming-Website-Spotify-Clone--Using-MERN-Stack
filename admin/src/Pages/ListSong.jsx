import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from './Display';
import { toast } from 'react-toastify';
import '../Styles/ListSong.css'

const ListSong = () => {

  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);

      if (response.data.success) {
        setData(response.data.songs)
        console.log(data);
      }
    }
    catch (error) {
      toast.error("Error Occured");
    }
  }

  useEffect(() => {
    fetchSongs();
  }, [])

  return (
    <>
      <p>All Song List</p>
      <div className='disp-album-body'>
        <p>ID</p>
        <p>Image</p>
        <p>Name</p>
        <p>Album</p>
        <p>Artist</p>
        <p>Duration</p>
        <p>Action</p>
      </div>
      <hr />
      {
        data.map((item, index) => (
          <div key={index} className='disp-album-data'>
            <b style={{ color: '#a7a7a7' }}>{index + 1}</b>
            <img src={item.image} alt='' />
            <p>{item.name}</p>
            <p>{item.album}</p>
            <p>{item.artist}</p>
            <p>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default ListSong