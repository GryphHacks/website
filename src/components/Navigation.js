import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top float-right">
      <div class="container-fluid">
        <Link to='/' class="navbar-brand">GryphHacks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/login' class="nav-link">Login</Link>
            </li>
            <li class="nav-item">
              <Link to='/register' class="nav-link">Register</Link>
            </li>
            <li class="nav-item">
              <Link to='/Dashboard' class="nav-link">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;