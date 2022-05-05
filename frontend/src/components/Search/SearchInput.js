import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '.';
import '../Navigation/Navigation.css';

function SearchInput({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
  if (!query.length) return setSearchResults(false);
  setSearchResults(true)
  }, [query])

  return (
    <div>
      {sessionUser &&
      <div className='card'>
        <input
          className='search-input'
          placeholder='Search here...'
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onClick={e => e.stopPropagation}/>
          {searchResults && <Search query={query} setSearchResults={setSearchResults}/>}
      </div>}
    </div>
  )
}

export default SearchInput;
