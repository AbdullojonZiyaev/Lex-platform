import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TAGS = ["TAX", "HIRING", "TRADEMARK", "INCORPORATION"];
const CATEGORIES = ["FINANCE", "EMPLOYMENT", "COPYRIGHT", "BUSINESS"];

const StartupDashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [answersMap, setAnswersMap] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    category: "FINANCE",
    tags: []
  });

  const userId = localStorage.getItem("id");

  useEffect(() => {
    fetch(`http://localhost:8080/api/questions/startup/${userId}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error("Failed to fetch questions:", err));
  }, [userId]);

  const checkAnswers = (questionId) => {
    if (!answersMap[questionId]) {
      fetch(`http://localhost:8080/answers/question/${questionId}`)
        .then(res => res.json())
        .then(data => {
          setAnswersMap(prev => ({ ...prev, [questionId]: data }));
        })
        .catch(err => console.error("Failed to fetch answers:", err));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e) => {
    const options = Array.from(e.target.selectedOptions);
    setNewQuestion(prev => ({
      ...prev,
      tags: options.map(opt => opt.value)
    }));
  };

 const handleSubmitQuestion = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("id");  // Retrieve userId at the start

    // Construct the body without 'createdAt', as it will be set on the backend
    const body = {
      title: newQuestion.title,
      description: newQuestion.description,
      category: newQuestion.category,
      tags: newQuestion.tags,
      createdAt: new Date().toISOString(),
    };

    const res = await fetch(`http://localhost:8080/api/questions?startupId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),  // Pass the body correctly here
    });

    if (res.ok) {
      setShowModal(false);
      setNewQuestion({ title: "", description: "", category: "FINANCE", tags: [] });

      // Fetch updated list of questions after submitting a new one
      const updated = await fetch(`http://localhost:8080/api/questions/startup/${userId}`).then(r => r.json());
      setQuestions(updated);
    } else {
      alert("Failed to submit question.");
    }
 };


  return (
    <div className="dashboard">
      <h2>Your Questions</h2>
      <ul>
        {questions.map(q => (
          <li key={q.id} style={{
            background: '#f4f4f4',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{q.title}</h3>
            <p>{q.description}</p>
            <button onClick={() => checkAnswers(q.id)}>Check Answers</button>
            {answersMap[q.id] && (
              <div style={{ marginTop: '0.75rem' }}>
                {answersMap[q.id].length === 0 ? (
                  <p>No answers yet.</p>
                ) : (
                  answersMap[q.id].map(a => (
                    <div key={a.id} style={{ marginTop: '0.5rem' }}>
                      <em>{a.content}</em>
                      <p style={{ color: 'gray', fontSize: '0.9rem' }}>
                        Answered by: {a.lawyer.username}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowModal(true)}>Ask a Question</button>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '500px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <h3>Ask a Question</h3>
            <form onSubmit={handleSubmitQuestion}>
              <input
                name="title"
                type="text"
                placeholder="Title"
                value={newQuestion.title}
                onChange={handleInputChange}
                required
                style={{ width: '100%', marginBottom: '0.75rem' }}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newQuestion.description}
                onChange={handleInputChange}
                required
                style={{ width: '100%', marginBottom: '0.75rem' }}
              />
              <select
                name="category"
                value={newQuestion.category}
                onChange={handleInputChange}
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
             <label style={{ display: 'block', marginBottom: '0.5rem' }}>
               Select Tags (hold Ctrl or Cmd to select multiple):
             </label>
             <select
               multiple
               value={newQuestion.tags}
               onChange={handleTagsChange}
               style={{ width: '100%', height: '100px', marginBottom: '1rem' }}
             >
               {TAGS.map(tag => (
                 <option key={tag} value={tag}>{tag}</option>
               ))}
             </select>

              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)} style={{ marginLeft: '1rem' }}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
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

export default StartupDashboard;
