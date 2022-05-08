import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TableForm from './TableForm';

function TableFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="teal-button" onClick={() => setShowModal(true)}>Add Table</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TableForm />
        </Modal>
      )}
    </>
  );
}

export default TableFormModal;
