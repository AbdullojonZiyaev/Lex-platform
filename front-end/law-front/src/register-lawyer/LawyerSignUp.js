import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/successModal"; // Adjust path if needed
import "./LawyerSignUp.css";

const LawyerSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    specialization: "",
    experienceYears: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     // Register user
     const res = await fetch("http://localhost:8080/lawyers", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ ...formData, experienceYears: Number(formData.experienceYears) })
     });

     if (!res.ok) {
       alert("Failed to register. Try again.");
       return; // <-- important to stop here
     }

     setShowSuccess(true);

     // Auto login with same credentials
     const loginRes = await fetch("http://localhost:8080/auth/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         username: formData.username,
         password: formData.password
       })
     });

     if (!loginRes.ok) {
       alert("Registration succeeded but login failed. Please login manually.");
       setShowSuccess(false);
       return;
     }

     const data = await loginRes.json();

     localStorage.setItem("id", data.id);
     localStorage.setItem("userType", data.userType);

     // Delay redirect so user sees success modal
     setTimeout(() => {
       setShowSuccess(false);
       if (data.userType === "lawyer") {
         navigate("/dashboard/lawyer");
       } else {
         navigate("/dashboard/startup");
       }
     }, 2000);

   } catch (error) {
     console.error("Error during registration/login:", error);
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

      {showSuccess && (
        <SuccessModal
          message="Registration successful! Redirecting to dashboard..."
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default LawyerSignup;
