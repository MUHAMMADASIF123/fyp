import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar '>
        <div className='nav-container'>
          <NavLink exact to='/' className='nav-logo'>
            <img src='https://res.cloudinary.com/azeem413/image/upload/v1664276146/images/Others/colglogo_aahu5f.png' />
            <a href='/'>
              GOVERNMENT GRADUATE COLLEGE OF SCIENCE | GCS
            </a>
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/Administration'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Administration
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/AboutUs'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/contactUs'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className='me-2 rounded '>
            <button className='button_programs'>
              {' '}
              <Link to={'/login'} className='me-2 rounded'>
                Login
              </Link>
            </button>
            <button className='button_programs'>
              <Link to={'/apply'} className='ms-2'>
                {' '}
                Apply
              </Link>
            </button>
          </div>
          <div className='nav-icon' onClick={handleClick}>
            <i
              className={click ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
