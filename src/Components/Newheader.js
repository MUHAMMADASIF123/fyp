import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Header_.css'
const Newheader = () => {
  const history = useNavigate()
  const logout = () => {
    localStorage.clear('token-info')
    // setIsLoggedin(false);
    history('/')
  }
  // const auth= localStorage.getItem("token-info")
  var auth = JSON.parse(localStorage.getItem('token-info'))
  // console.log(auth);

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
          {/* <button>LogIn</button>
           */}

          {localStorage.getItem('token-info') ? (
            <>
              <button onClick={logout} className='hbtn me-2'>
                logout
              </button>
              {/* <Link to={'/login'} className="btn btn-primary me-2"> Login </Link> */}
              <button>
                {' '}
                <Link
                  to={'/apply'}
                  className='hbtn text-white me-2'
                >
                  {' '}
                  {auth.email}
                  Apply Now
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to={'/login'} className='hbtn '>
                  {' '}
                  Login{' '}
                </Link>
              </button>
              <button>
                {' '}
                <Link to={'/registeruser'} className='hbtn me-3'>
                  SignUp
                </Link>
              </button>
              <button>
                <Link to={'/apply'} className='hbtn w-100 apply'>
                  {' '}
                  Apply Now
                </Link>
              </button>
            </>
          )}
          {/* <button>SignUp</button>
          <button>Apply</button> */}
        </div>
      </div>

      <div className='menu'>
        <nav>
          <a href='/'>Home</a>

          {/* <a href='#Programs'>Programs</a>
          <a href='#Departments'>Departements</a> */}
          <a href='/Administration'>Administration</a>
          <a href='/contactUs'>Contact Us</a>
          <a href='AboutUs'>About Us</a>
          <a href='Admin'>Admin</a>
          <a href='StudentView'>Student View</a>
          <a href='StudentProfile'>Student Profile</a>
        </nav>
      </div>
    </div>
  )
}

export default Newheader
