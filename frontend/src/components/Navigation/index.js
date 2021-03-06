import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import Search from '../Search';
import './Navigation.css';
import AboutModal from '../AboutModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
    if (!query.length) return setSearchResults(false);
    setSearchResults(true)
  }, [query])

  let logoLinks;
  let sessionLinks;
  let searchBar
  if (sessionUser) {
    logoLinks = (
      <>
        <NavLink to="/events">
          <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988112-135e5b6f-5ee6-4e64-aadd-a12c9cc66559.png'></img>
        </NavLink>
        <NavLink className="guestly" to="/events">Guestly</NavLink>
      </>
    )
    searchBar = (
      <div className='search-bar'>
        <input
          className='search-input'
          placeholder='Search for events...'
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onClick={e => e.stopPropagation}/>
          {searchResults && <Search query={query} setQuery={setQuery} setSearchResults={setSearchResults}/>}
      </div>
    )
    sessionLinks = (
      <>
        <NavLink className="nav-button" exact to="/calendar">Calendar</NavLink>
        {/* <NavLink className="nav-button" exact to="/events">Home</NavLink> */}
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    logoLinks = (
      <>
        <NavLink exact to="/">
          <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988112-135e5b6f-5ee6-4e64-aadd-a12c9cc66559.png'></img>
        </NavLink>
        <NavLink className="guestly" exact to="/">Guestly</NavLink>
      </>
    )
    sessionLinks = (
      <>
        {/* <NavLink className="nav-button" exact to="/">Home</NavLink> */}
        <AboutModal />
        <LoginFormModal />
        <SignupFormModal />
        {/* <NavLink className="nav-button" to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div>
      <div className='navbar'>
        <div className='nav-left'>
          {isLoaded && logoLinks}
          {/* <NavLink exact to="/">
            <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988112-135e5b6f-5ee6-4e64-aadd-a12c9cc66559.png'></img>
          </NavLink>
          <NavLink className="guestly" exact to="/">Guestly</NavLink> */}
          {isLoaded && searchBar}
        </div>
        <div className='nav-right'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
