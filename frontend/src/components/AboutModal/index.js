import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import About from './About';

function AboutModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-button" onClick={() => setShowModal(true)}>About</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <About />
        </Modal>
      )}
    </>
  );
}

export default AboutModal;
