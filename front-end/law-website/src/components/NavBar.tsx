// src/components/NavBar.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'startup' | 'lawyer') => {
    setShowModal(false);
    if (role === 'startup') {
      navigate('/signup-startup');
    } else {
      navigate('/signup-lawyer');
    }
  };  

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">LawConnect</div>
          <div className="space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-700">Login</Link>
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 w-80">
            <h2 className="text-xl font-semibold text-gray-800">Register As</h2>
            <button
              onClick={() => handleRoleSelect('startup')}
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              I'm a Startup
            </button>
            <button
              onClick={() => handleRoleSelect('lawyer')}
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
            >
              I'm a Lawyer
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-red-500 text-sm underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
