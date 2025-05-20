import React from 'react';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '10px',
  zIndex: 1000,
  width: '300px',
  textAlign: 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
};

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div style={backdropStyle} onClick={onCancel} />
      <div style={modalStyle}>
        <p>{message}</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-around' }}>
          <button
            onClick={onConfirm}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
