import React, {useState, useContext} from 'react'
import '../styles/Search.css'
import { PlayerContext } from './PlayerContext'
import { Songs } from '../components/Songs';
import { FaSearchengin } from "react-icons/fa6";
import { assets } from '../assets/frontend-assets/assets';

const Search = () => {

    const {songsData} = useContext(PlayerContext);

    const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for songs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className='search-bar-icon'>
        <FaSearchengin />
        </div>
      </div>

      <div className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((item,index) => (
            <Songs key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />
          ))
        ) : (
          <div className='no-search-main'>
              <p className='no-search-text'>This Song is not available</p>
              <img className='no-search-img' src={assets.cat} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Search