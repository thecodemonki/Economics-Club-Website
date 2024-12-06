import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="title-section">
        <h1>WELCOME TO THE HALTON ECONOMICS OLYMPIAD</h1>
        <p>Any students grade 12 and below can participate</p>
      </div>
      <div className="registration-section">
        <h2>REGISTRATION AND SIGN UP</h2>
        <p>Eligibility: ANY, as long as below or in grade 12</p>
        <p>Format: Online</p>
        <p>Questions: 40 MCQ, 10 calculated questions</p>
        <p>Date: Jan 8th 2025, 1-3pm (Sunday)</p>
        <p>Prize pool: $200 total</p>
        <ul className="prizes">
          <li><FaTrophy className="prize-icon" /> 1st place: $100</li>
          <li><FaTrophy className="prize-icon" /> 2nd place: $50</li>
          <li><FaTrophy className="prize-icon" /> 3rd place: $25</li>
        </ul>
        <p>Please fill out the <a href="https://forms.gle/fKkd9oHbztSmgPqA7" target="_blank" rel="noopener noreferrer">Google Form</a> to register.</p>
        <p>Join our <a href="https://classroom.google.com/c/NzA2NTgzNDg3MjA3?cjc=ujuaf4m" target="_blank" rel="noopener noreferrer">Google Classroom</a> for updates and resources.</p>
      </div>
    </div>
  );
}

export default Home;