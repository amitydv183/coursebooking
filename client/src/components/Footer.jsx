import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='bg-primary text-white pt-5 pb-4 mt-auto'>
      <div className='container'>
        <div className='row text-center text-md-start'>
          <div className='col-md-4 md-4'>
            <img
              src="https://pninfosys.com/assets/colorlogo-BagIKm6w.png"
              alt='PNCOURSE LOGO'
              style={{
                height:'60px',
                backgroundColor:'white',
                padding:'5px',
                borderRadius: '5px',
              }}
            />
            <p className='mt-3 fw-semibold'>
              PNCOURSE- Learn | Practice | Grow
            </p>
          </div>
          <div className='col-md-4 md-4'>
            <h5 className='fw-bold mb-3'>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                Home 
                </Link>
              </li>
              <li>
                <Link to='/courses' className='text-white text-decoration-none'>
                Courses 
                </Link>
              </li>
              <li>
                <Link to='/login' className='text-white text-decoration-none'>
                Login 
                </Link>
              </li>
              <li>
                <Link to='/mybookings' className='text-white text-decoration-none'>
                My Bookings
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4 md-4'>
            <h5 className='fw-bold mb-3'>Contact Us</h5>
            <p className='mb-1'>
              <i className='bi bi-telephone-fill me-2'></i>+91 6200275261
            </p>
          </div>
        </div>
        <hr className='border-light'/>
        <p className='text-center mb-0 fw-semibold'>
          &copy; 2025 PNCOURSE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer