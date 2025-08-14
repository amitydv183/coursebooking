import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api';

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    await API.get("/logout", {}, { withCredentials: true });
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className='navbar bg-primary navbar-expand-md navbar-dark fixed-top shadow'>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">PNCOURSE</Link>

        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/course" className='nav-link'>Course</Link>
            </li>

            {user && (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/mybooking'>My Booking</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>Profile</Link>
                </li>
              </>
            )}
          </ul>

          <div className='d-flex align-items-center ms-auto'>
            {user ? (
              <>
                <span className='text-white me-3'>
                  Hi, {user.name}
                </span>
                <button className='btn btn-light text-primary fw-bold' onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className='btn btn-outline-light me-2'>Login</Link>
                <Link to="/register" className='btn btn-light text-primary fw-bold'>Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;