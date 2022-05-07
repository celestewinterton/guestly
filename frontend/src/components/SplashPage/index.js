import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';
import SignupFormModal from '../SignupFormModal';
import SearchInput from '../Search/SearchInput'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './SplashPage.css'

function SplashPage({isLoaded}) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  if (sessionUser) return <Redirect to="/events" />;

  return (
    <div className='splash'>
      <div className='splash-card'>
          <div className='splash-text-container'>
            <h2>Want your guests to <br/>choose their own seating?</h2>
            <div className='space'>Sign up for Guestly today so you can <br/>skip the seating charts!</div>
            <div className='space'>Guestly allows you your guests to RSVP, <br/>select seating, and view your registry all <br/>in one place.</div>
          </div>
          <div className='splash-button-container'>
            <div onClick={() => setShowModal(true)} className='teal-button full-button'>Getting Started!</div>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <SignupForm />
              </Modal>
            )}
            <div className='muted'>Attending a wedding? Create an account to RSVP!</div>
        </div>
      </div>
    </div>
  )
}

export default SplashPage;
