import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css"; // Make sure to create this CSS file

const Modal = ({ closeSignUpModal }) => {
  const navigate = useNavigate();

  const handleLawyerClick = () => {
    closeSignUpModal();
    navigate("/register-lawyer");
  };

  const handleStartupClick = () => {
    closeSignUpModal();
    navigate("/register-startup");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Account Type</h2>
        <div className="modal-buttons">
          <button className="modal-button green" onClick={handleLawyerClick}>
            I'm a Lawyer
          </button>
          <button className="modal-button gray" onClick={handleStartupClick}>
            I'm a Startup
          </button>
        </div>
        <button className="modal-cancel" onClick={closeSignUpModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
