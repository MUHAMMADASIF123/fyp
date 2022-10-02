import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header_.css';

function Header() {
  const history = useNavigate();
  const logout = () => {
    localStorage.clear('token-info');
    // setIsLoggedin(false);
    history('/');
  };
  // const auth= localStorage.getItem("token-info")
  var auth = JSON.parse(localStorage.getItem('token-info'));
  console.log(auth);
  return (
    <div className='main shadow-lg container rounded '>
      <nav className='navbar navbar-expand-lg  '>
        <div className='container-fluid'>
          <div className=''>
            <a className='navbar-brand' href='/'>
              <img
                className='logo'
                src='./images/colglogo.png'
              />
            </a>
            <a className='text-white text-decoration-none font-weight-bold'>
              {' '}
              GOVERNMENT GRADUATE COLLEGE OF SCIENCE | GCS
            </a>
          </div>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div
          className='collapse navbar-collapse '
          id='navbarSupportedContent'
        >
          {localStorage.getItem('token-info') ? (
            <>
              <button
                onClick={logout}
                className=' hbtn me-2 text-white'
              >
                {' '}
                logout{' '}
              </button>
              {/* <Link to={'/login'} className="btn btn-primary me-2"> Login </Link> */}
              <button>
                {' '}
                <Link
                  to={'/profile'}
                  className='hbtn text-white me-2'
                >
                  {' '}
                  {auth.email}
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link
                  to={'/login'}
                  className=' hbtn text-white '
                >
                  {' '}
                  Login{' '}
                </Link>
              </button>
              <button>
                {' '}
                <Link
                  to={'/registeruser'}
                  className='hbtn me-3 text-white  '
                >
                  SignUp
                </Link>
              </button>
              <button>
                <Link
                  to={'/apply'}
                  className='hbtn w-100 apply text-white '
                >
                  {' '}
                  Apply Now
                </Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
