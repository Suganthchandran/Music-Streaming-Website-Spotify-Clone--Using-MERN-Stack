import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from './Display';
import { toast } from 'react-toastify';
import '../Styles/ListSong.css'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ListSong = () => {

  const navigate = useNavigate();

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

  const removeSongs = async (id)=>{
    try{
      const response = await axios.post(`${url}/api/song/delete`,{id});

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
      <p>All Song List</p>
      <table>
      <thead className='disp-album-body'>
        <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Source</th>
        <th>Artist</th>
        <th>Duration</th>
        <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <hr />
      {
        data.map((item, index) => (
          <tbody key={index} className='disp-album-data'>
            <tr>
            <td><b style={{ color: '#a7a7a7' }}>{index + 1}</b></td>
            <td><img style={{width:'2.7rem'}} src={item.image} alt='' /></td>
            <td><p>{item.name}</p></td>
            <td><p>{item.desc}</p></td>
            <td><p>{item.artist}</p></td>
            <td><p>{item.duration}</p></td>
            <td><div className='disp-album-action'>
            <MdDelete onClick={()=>removeSongs(item._id)} className='icon' />
            <MdEdit onClick={()=>navigate(`/update/${item._id}`)} className='icon' />
            </div></td>
            </tr>
          </tbody>
        ))
      }
      </table>
    </>
  )
}

export default ListSong