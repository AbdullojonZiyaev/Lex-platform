import React, { useState } from "react";
import "./LawyerSignUp.css";

const LawyerSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    specialization: "",
    experienceYears: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/lawyers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Registration successful!");
        // Optionally redirect or clear form
      } else {
        alert("Failed to register. Try again.");
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Lawyer Sign-Up</h2>

        <label>
          Username:
          <input type="text" name="username" required value={formData.username} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" required value={formData.password} onChange={handleChange} />
        </label>

        <label>
          Specialization:
          <input type="text" name="specialization" required value={formData.specialization} onChange={handleChange} />
        </label>

        <label>
          Years of Experience:
          <input type="number" name="experienceYears" required value={formData.experienceYears} onChange={handleChange} />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LawyerSignup;
