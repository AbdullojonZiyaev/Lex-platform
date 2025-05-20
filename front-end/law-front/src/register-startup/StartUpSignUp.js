import React, { useState } from "react";
import "./StartUpSignUp.css";

const StartupSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    companyName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/startups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Startup registered successfully!");
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
      <div className="signup-overlay"></div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Startup Sign-Up</h2>

        <label>
          Username:
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StartupSignup;
