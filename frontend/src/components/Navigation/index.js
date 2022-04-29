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
        <div className='nav-left'>
          <NavLink exact to="/">
            <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988112-135e5b6f-5ee6-4e64-aadd-a12c9cc66559.png'></img>
            {/* <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988323-e8d05232-3887-404e-8f5f-517955d710ff.png'></img> */}
            {/* <img className="logo" src='https://user-images.githubusercontent.com/96894806/165988754-4ec41256-2078-4505-a752-1168e9854136.png'></img> */}
          </NavLink>
          <NavLink className="guestly" exact to="/">Guestly</NavLink>
        </div>
        <div className='nav-right'>
          <NavLink className="nav-button" exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </div>
      </div>
        <HomePage />
    </div>
  );
}

export default Navigation;
