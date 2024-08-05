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

  const fetchAlbums = async () => {
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

  const removeAlbums = async (id)=>{
    try{
      const response = await axios.post(`${url}/api/album/delete`,{id});

      if(response.data.success)
      {
        toast.success(response.data.message);
        await fetchAlbums();
      }

    }
    catch(error)
    {
      toast.error("Something Error Happen");
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <>
      <p>All Album List</p>
      <table>
      <thead className='disp-album-body-albums'>
        <th><p>ID</p></th>
        <th><p>Image</p></th>
        <th><p>Name</p></th>
        <th><p>Description</p></th>
        <th><p>Color</p></th>
        <th colSpan={2}><p>Action</p></th>
      </thead>
      <hr />
      {
        data.map((item, index) => (
          <tbody key={index} className='disp-album-data-albums'>
            <tr>
            <td><b style={{ color: '#a7a7a7' }}>{index + 1}</b></td>
            <td><img style={{width:'2.7rem'}} src={item.image} alt='' /></td>
            <td><p>{item.name}</p></td>
            <td><p>{item.desc}</p></td>
            <td><input type='color' value={item.bgColor} /></td>
            <td><div className='disp-album-action-albums'>
            <MdDelete onClick={()=>removeAlbums(item._id)} className='icon' />
            <MdEdit onClick={()=>navigate(`/updatealbum/${item._id}`)} className='icon' />
            </div></td>
            </tr>
          </tbody>
        ))
      }
      </table>
    </>
  )
}

export default ListAlbum