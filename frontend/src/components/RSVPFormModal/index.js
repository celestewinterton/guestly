import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import RSVPForm from './RSVPForm';

function RSVPFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="teal-button" onClick={() => setShowModal(true)}>RSVP</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <RSVPForm />
        </Modal>
      )}
    </>
  );
}

export default RSVPFormModal;
