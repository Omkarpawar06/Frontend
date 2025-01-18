import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/LOGO.jpg';
import { useNavigate } from 'react-router-dom';

const Navigate = () => {
  const navigate = useNavigate();
  const HandleLogOut = (path) =>{
    navigate(path);
    sessionStorage.clear()
  }

  return (
    <div className="nav-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="AdminLogin">Admin Login</Link></li>
            {/* <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Pathology">Pathology</Link></li>
            <li><Link to="/DigitalXRay">Digital X-Ray</Link></li>
            <li><Link to="/ECG">ECG</Link></li>
            <li><Link to="/AdminPanel">Admin</Link></li>
            <li><Link to="/BookPathology">Book Pathology</Link></li>
            <li><Link to="/BookDigitalxRay">Book Digital X-Ray</Link></li> */}
            <li><Link to="/Feedback">Feedback</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <button className='logoutbtn' type='submit' onClick={()=>HandleLogOut('/')}>Log Out</button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigate;