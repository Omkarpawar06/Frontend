import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/LOGO.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in (you can adjust this logic as needed)
  const isLoggedIn = sessionStorage.getItem('userId');

  const handleRedirect = () => {
    navigate('/AdminLogin')
  }
  // Handle user logout
  const handleLogout = () => {
    sessionStorage.removeItem('userId'); // Remove user session
    navigate('/'); // Redirect to Home page
  };

  return (
    <div className="nav-container">
      <div className="header">
        <div className="logo" onClick={handleRedirect}>
          {/* <img src={logo} alt="Logo" /> */}
          <h1>Mumbai-<p>Daignostic-</p><p>Centre</p></h1>
        </div>
        <nav>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
    
    </div>
    </div>
  );
};

export default Navbar;
