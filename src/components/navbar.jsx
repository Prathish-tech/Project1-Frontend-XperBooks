import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Added useLocation

export default function Navbar() {
  const location = useLocation();  // Get current path

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">XperBooks</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/books">Books</Link>
            <Link className="nav-link" to="/books/add">AddBooks</Link>
          </div>
        </div>

        {/* Show search bar only on Home page */}
        {location.pathname === '/' && (
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search books..."
              aria-label="Search"
              style={{ width: '400px', height: '40px', fontSize: '16px' }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                height: '40px',
                padding: '0 15px',
                fontWeight: 'bold',
                backgroundColor: ' rgb(231, 84, 224) ',
                color: 'black',
                border: '1px solid black'
              }}
            >
              Search
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}
