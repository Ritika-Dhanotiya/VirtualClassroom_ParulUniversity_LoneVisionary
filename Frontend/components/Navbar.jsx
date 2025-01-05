import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tech Smart</div>
      <ul className="navbar-menu">
        <li className="dropdown">
          <span>Member</span>
          <ul className="dropdown-menu">
            <li><Link className='nav-links' to="/teachers">Tech Smart for Teachers</Link></li>
            <li><Link className='nav-links' to="/students">Tech Smart for Students</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>AI Features</span>
          <ul className="dropdown-menu">
            <li><Link className='nav-links' to="/ai-quiz-generate">AI Quiz Generate</Link></li>
            <li><Link className='nav-links' to="/ai-ppt-talker">AI PPT Talker</Link></li>
            <li><Link className='nav-links' to="/ai-lesson-create">AI Lesson Create</Link></li>
            <li><Link className='nav-links' to="/ai-assessment-generate">AI Assessment Generate</Link></li>
          </ul>
        </li>

        <div style={{width:'60px'}}></div>

        <li className='login-btn'><Link className='nav-links' to="/login">Login</Link></li>
        <li className='signup-btn'><Link className='nav-links' to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
