import React from 'react';

const modalBackdropStyle = {
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
  backgroundColor: '#fdfdfd',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  width: '350px',
  maxWidth: '90%',
};

const inputStyle = {
  padding: '0.6rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const UpdateProfileModal = ({ formData, setFormData, onSubmit, onClose }) => {
  return (
    <>
      <div onClick={onClose} style={modalBackdropStyle} />

      <div style={modalStyle}>
        <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Update Profile</h3>

        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Specialization"
            style={inputStyle}
            value={formData.specialization}
            onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
            required
          />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: '#003366', color: '#fff' }}
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#6c757d', color: '#fff' }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfileModal;
