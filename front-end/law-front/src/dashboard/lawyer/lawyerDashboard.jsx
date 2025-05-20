import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LawyerDashboard.css';
import InfoModal from '../../components/infoModal'
import UpdateProfileModal from '../../components/updateProfileModal';
import SuccessModal from '../../components/successModal';
import ConfirmModal from '../../components/confirmModal';



const LawyerDashboard = () => {
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', specialization: '' });
    const [showCompanyModal, setShowCompanyModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [lawyer, setLawyer] = useState({ username: '' });
    const userId = localStorage.getItem("id");
    const navigate = useNavigate();

    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState(() => () => {});
    const [confirmMessage, setConfirmMessage] = useState('');

    const openCompanyModal = (startup) => {
  setSelectedCompany(startup);
  setShowCompanyModal(true);
};

  useEffect(() => {
    fetch(`http://localhost:8080/answers/lawyer/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched answers:", userId);  // <-- Add this
        setAnswers(data);
      })
      .catch(err => console.error("Failed to fetch answers:", err));
  }, [userId]);


  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/lawyers/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update profile");
        setShowModal(false);
        setSuccessMessage("Profile updated successfully.");
        setShowSuccess(true);
      })
      .catch(err => console.error("Update error:", err));
  };

// Inside useEffect to fetch lawyer data:
useEffect(() => {
  fetch(`http://localhost:8080/lawyers/${userId}`)
    .then(res => res.json())
    .then(data => setLawyer(data))
    .catch(err => console.error("Failed to fetch lawyer info:", err));
}, [userId]);

const handleLogout = () => {
  setConfirmMessage("Are you sure you want to logout?");
  setConfirmAction(() => () => {
    localStorage.clear();
    setShowConfirm(false);
    navigate("/");
  });
  setShowConfirm(true);
};

const handleDeleteAnswer = (answerId) => {
  setConfirmMessage("Are you sure you want to delete this answer?");
  setConfirmAction(() => () => {
    fetch(`http://localhost:8080/answers/${answerId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          setAnswers(prev => prev.filter(ans => ans.id !== answerId));
          setSuccessMessage("Answer deleted successfully.");
          setShowSuccess(true);
        } else {
          throw new Error("Failed to delete");
        }
      })
      .catch(err => console.error("Delete error:", err));
    setShowConfirm(false);
  });
  setShowConfirm(true);
};

const handleDeleteProfile = () => {
  setConfirmMessage("Are you sure you want to delete your profile? This action cannot be undone.");
  setConfirmAction(() => () => {
    fetch(`http://localhost:8080/lawyers/${userId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to delete profile");
        setShowConfirm(false);
        localStorage.clear();
        setSuccessMessage("Profile deleted. You will be logged out.");
        setShowSuccess(true);
        setTimeout(() => navigate("/"), 1000);
      })
      .catch(err => console.error("Delete profile error:", err));
  });
  setShowConfirm(true);
};

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <span>Welcome, {lawyer.username || "Lawyer"}!</span>
        <div>
          <button onClick={() => setShowModal(true)} className="dashboard-button update-button">
            Update Profile
          </button>
          <button onClick={() => handleDeleteProfile()} className="dashboard-button delete-button">
            Delete Profile
          </button>
          <button onClick={handleLogout} className="dashboard-button logout-button">
            Logout
          </button>
        </div>
      </div>

      <h2>Your Answers</h2>
      <div>
        {answers.map((ans) => (
          <div key={ans.id} className="answer-card">
            <h3>Q: {ans.question.title}</h3>
            <p><em>{ans.question.description}</em></p>
            <p><strong>A:</strong> {ans.content}</p>
            <p className="answer-meta">
              Asked by: {ans.question.startup.companyName}{" "}
              <button onClick={() => openCompanyModal(ans.question.startup)} className="view-link">
                (View Company Info)
              </button>
            </p>
            <p className="answer-meta">Category: {ans.question.category}</p>
            <p className="answer-meta">Tags: {ans.question.tags}</p>
            <button onClick={() => handleDeleteAnswer(ans.id)} className="dashboard-button delete-button">
              Delete Answer
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/forum")} className="forum-button">
        Go to Forum
      </button>

{showSuccess && (
  <SuccessModal message={successMessage} onClose={() => setShowSuccess(false)} />
)}

{showConfirm && (
  <ConfirmModal
    message={confirmMessage}
    onConfirm={confirmAction}
    onCancel={() => setShowConfirm(false)}
  />
)}

{showCompanyModal && (
  <InfoModal
    title="Company Info"
    infoObject={selectedCompany}
    onClose={() => setShowCompanyModal(false)}
  />
)}
      {showModal && (
        <UpdateProfileModal
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleUpdateSubmit}
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
};

export default LawyerDashboard;
