import React from 'react';
import Navbar from '../components/navbar'; // Make sure this matches your file's case

function Home() {
  return (
    <div className="page-container">
      {/* Navbar stays outside the background image container */}
      <Navbar />
      {/* Background image and content container */}
      <div className="main-section">
        <div className="content-box">
          <h1>Welcome to XperBooks!</h1>
          <p>This is your home for managing books easily.</p>   
          <div className="mt-5">
            <a href="/books" className="btn btn-light btn-lg me-3">Browse Books</a>
            <a href="/login" className="btn btn-outline-light btn-lg">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;