import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import HomePage from '../HomePage';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        {/* <NavLink className="nav-button" to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div>
      <div className='navbar'>
        <div>
          <div className='nav-left'>
            <NavLink exact to="/">
              <img className="logo" src='https://user-images.githubusercontent.com/96894806/165892193-ba3fa8d3-0774-432d-b2e2-f77c5950c748.png'></img>
            </NavLink>
            <NavLink className="nav-button guestly" exact to="/">Guestly</NavLink>
          </div>
          <div className='nav-right'>
            <NavLink className="nav-button" exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </div>
        </div>
      </div>
        <HomePage />
    </div>
  );
}

export default Navigation;
