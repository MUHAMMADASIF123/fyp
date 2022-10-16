import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Header_.css'
const Newheader = () => {
  const history = useNavigate()
  const logout = () => {
    localStorage.clear('token-info')

    history('/')
  }

  var auth = JSON.parse(localStorage.getItem('token-info'))

  return (
    <div>
      <div className='main'>
        <div className='logo'>
          <a href='/'>
            <img
              className='ms-0'
              src='https://res.cloudinary.com/azeem413/image/upload/v1664276146/images/Others/colglogo_aahu5f.png'
            />
            GOVERNMENT GRADUATE COLLEGE OF SCIENCE | GCS
          </a>
        </div>

        <div className='newbtn'>
          {localStorage.getItem('token-info') ? (
            <>
              <button onClick={logout} className='hbtn me-2'>
                logout
              </button>

              <button>
                <Link
                  to={'/apply'}
                  className='hbtn text-white me-2'
                >
                  {auth.email}
                  Apply Now
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to={'/login'} className='hbtn '>
                  Login
                </Link>
              </button>
              <button>
                <Link to={'/registeruser'} className='hbtn me-3'>
                  SignUp
                </Link>
              </button>
              <button>
                <Link to={'/apply'} className='hbtn w-100 apply'>
                  Apply Now
                </Link>
              </button>
            </>
          )}
        </div>
      </div>

      <div className='menu'>
        <NavLink accessKey='ok'>
          <Link to='/'>Home</Link>
          <Link to='/Administration'>Administration</Link>
          <Link to='/contactUs'>Contact Us</Link>
          <Link to='AboutUs'>About Us</Link>
          <Link to='Admin'>Admin</Link>
          <Link to='StudentView'>Student View</Link>
          <Link to='StudentProfile'>Student Profile</Link>
        </NavLink>
      </div>
    </div>
  )
}

export default Newheader
