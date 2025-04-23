import React, { useEffect, useState } from 'react';

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [answersMap, setAnswersMap] = useState({});
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    fetch('http://localhost:8080/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error("Failed to fetch questions:", err));
  }, []);

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

  const openAnswerModal = (question) => {
    setSelectedQuestion(question);
    setAnswerText("");
    setShowAnswerModal(true);
  };

  const submitAnswer = async () => {
    const lawyerId = localStorage.getItem("id");
    const res = await fetch(`http://localhost:8080/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lawyerId,
        questionId: selectedQuestion.id,
        content: answerText
      })
    });

    if (res.ok) {
      alert("Answer submitted!");
      setShowAnswerModal(false);
      checkAnswers(selectedQuestion.id);
    } else {
      alert("Failed to submit answer.");
    }
  };

  return (
    <div className="forum">
      <h2>Forum</h2>
      <ul>
        {questions.map(q => (
          <li key={q.id} style={{ background: '#f9f9f9', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
            <h3>{q.title}</h3>
            <p>{q.description}</p>
            <p>By: {q.startup.companyName}</p>
           <p>{new Date(q.createdAt).toLocaleString()}</p>
            <button onClick={() => checkAnswers(q.id)}>Check Answers</button>
            {userType === 'lawyer' && (
              <button onClick={() => openAnswerModal(q)} style={{ marginLeft: '1rem' }}>
                Answer Question
              </button>
            )}
            {answersMap[q.id] && (
              <div style={{ marginTop: '0.75rem' }}>
                {answersMap[q.id].length === 0 ? (
                  <p>No answers yet.</p>
                ) : (
                  answersMap[q.id].map(a => (
                    <div key={a.id} style={{ marginTop: '0.5rem' }}>
                      <em>{a.content}</em>
                      <p style={{ color: 'gray', fontSize: '0.9rem' }}>Answered by: {a.lawyer.username}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Answer Modal */}
      {showAnswerModal && selectedQuestion && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{ background: "#fff", padding: "2rem", borderRadius: "10px", width: "500px", maxWidth: "90%" }}>
            <h3>{selectedQuestion.title}</h3>
            <p>{selectedQuestion.description}</p>
            <p><strong>Startup:</strong> {selectedQuestion.startup.companyName}</p>
            <textarea
              rows="5"
              placeholder="Write your answer..."
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
            />
            <div style={{ marginTop: "1rem", textAlign: "right" }}>
              <button onClick={() => setShowAnswerModal(false)} style={{ marginRight: "1rem" }}>Cancel</button>
              <button onClick={submitAnswer} disabled={!answerText.trim()}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
