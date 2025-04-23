import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerDashboard = () => {
  const [answers, setAnswers] = useState([]);
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/answers/lawyer/${userId}`)
      .then(res => res.json())
      .then(data => setAnswers(data))
      .catch(err => console.error("Failed to fetch answers:", err));
  }, [userId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Answers</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {answers.map((ans) => (
          <div key={ans.id} style={{
            background: '#f9f9f9',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '0.25rem' }}>Q: {ans.question.title}</h3>
            <p style={{ marginBottom: '0.75rem', fontStyle: 'italic' }}>{ans.question.description}</p>
            <p><strong>A:</strong> {ans.content}</p>
            <p style={{ color: 'gray' }}>Asked by: {ans.question.startup.companyName}</p>
            <p style={{ color: 'gray' }}>Category: {ans.question.category}</p>
            <p style={{ color: 'gray' }}>Tags: {ans.question.tags + " "}</p>
          </div>
        ))}

      </div>
      <button
        onClick={() => navigate("/forum")}
        style={{
          marginTop: '2rem',
          padding: '0.8rem 1.2rem',
          backgroundColor: '#004080',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Forum
      </button>
    </div>
  );
};

export default LawyerDashboard;
