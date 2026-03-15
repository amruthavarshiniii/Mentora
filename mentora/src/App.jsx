import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import adminImg from './assets/admin.jpeg';
import studentImg from './assets/student.jpeg';
import facultyImg from './assets/faculty.webp';
import FacultyDashboard from './components/FacultyDashboard';
import './dashboard.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const portals = [
    {
      id: 'admin',
      title: 'Admin Login',
      description: 'Manage campus infrastructure, data, and system configurations.',
      image: adminImg,
      delay: 'delay-100',
      path: '/admin'
    },
    {
      id: 'faculty',
      title: 'Faculty Login',
      description: 'Access student records, manage courses, and update grades.',
      image: facultyImg,
      delay: 'delay-200',
      path: '/faculty'
    },
    {
      id: 'student',
      title: 'Student Login',
      description: 'View academic progress, attendance, and campus announcements.',
      image: studentImg,
      delay: 'delay-300',
      path: '/student'
    }
  ];

  if (isLoading) return null;

  return (
    <>
      <div className="bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <nav className="navbar animate-slide-down">
        <div className="logo-container">
          <div className="logo-text">
            Mentora<span className="logo-dot" style={{color: "var(--primary)"}}>.</span>
          </div>
        </div>
      </nav>

      <main className="main-container">
        <div className="hero-section animate-fade-in delay-100">
          <h1 className="hero-title">
            Welcome to <span>Mentora</span> Ecosystem
          </h1>
          <p className="hero-subtitle">
            The comprehensive monitoring and management system for our college.
            Select your portal to continue.
          </p>
        </div>

        <div className="cards-grid">
          {portals.map((portal) => (
            <div
              key={portal.id}
              className={`login-card animate-fade-in ${portal.delay}`}
              onClick={() => navigate(portal.path)}
            >
              <div className="card-image-wrapper">
                <img
                  src={portal.image}
                  alt={`${portal.title} illustration`}
                  className="card-image"
                />
              </div>
              <h2 className="card-title">{portal.title}</h2>
              <p className="card-desc">{portal.description}</p>
              <button className="login-btn">
                Authorize
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty/*" element={<FacultyDashboard />} />
        {/* Fallback routes for now */}
        <Route path="/admin" element={<div className="p-8 text-center"><h1 className="text-2xl">Admin Portal Coming Soon</h1></div>} />
        <Route path="/student" element={<div className="p-8 text-center"><h1 className="text-2xl">Student Portal Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
