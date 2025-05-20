import React from 'react';

const InfoModal = ({ title, infoObject, onClose }) => {
  if (!infoObject) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999
        }}
      />

      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          width: '350px'
        }}
      >
        <h3>{title}</h3>
        <div style={{ marginBottom: '1rem' }}>
          {Object.entries(infoObject)
            .filter(([key]) => key !== 'id')
            .map(([key, value]) => (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value || 'N/A'}
              </p>
          ))}
        </div>
        <button
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            backgroundColor: '#003366',
            color: 'white',
            borderRadius: '4px'
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default InfoModal;
