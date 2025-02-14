import React, {useState, useContext} from 'react'
import '../styles/Search.css'
import { PlayerContext } from './PlayerContext'
import { Songs } from '../components/Songs';
import { FaSearchengin } from "react-icons/fa6";

const Search = () => {

    const {songsData} = useContext(PlayerContext);

    const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
      {/* Search Bar */}
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

      {/* Song List */}
      <div className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((item,index) => (
            <Songs key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />
          ))
        ) : (
          <p className="no-results">No songs found.</p>
        )}
      </div>
    </div>
  )
}

export default Search