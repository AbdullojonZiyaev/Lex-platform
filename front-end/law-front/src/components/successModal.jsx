import React, { useEffect } from 'react';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 999,
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#d4edda',
  color: '#155724',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #c3e6cb',
  zIndex: 1000,
  minWidth: '250px',
  textAlign: 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
};

const SuccessModal = ({ message, onClose, autoClose = true, delay = 2500 }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, delay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, delay, onClose]);

  return (
    <>
      <div style={backdropStyle} onClick={onClose} />
      <div style={modalStyle}>
        <p>{message}</p>
        {!autoClose && (
          <button
            onClick={onClose}
            style={{
              marginTop: '1rem',
              padding: '0.4rem 0.8rem',
              backgroundColor: '#155724',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            OK
          </button>
        )}
      </div>
    </>
  );
};

export default SuccessModal;
