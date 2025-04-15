// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import LawyerSignup from './pages/LawyerSignup';
import StartupSignup from './pages/StartupSignup';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup-lawyer" element={<LawyerSignup />} />
          <Route path="/signup-startup" element={<StartupSignup />} />
          <Route path="/login" element={
            <div className="flex justify-center items-center h-full text-xl text-gray-600 py-20">
              Login page coming soon...
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
