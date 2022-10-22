import React from 'react';
import './Mathematics_.css';
function Mathematics_() {
  return (
    <>
   <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035550/images/Departments/math_dpt_rvjtdl.jpg'
            width='100%'
            height='500px'
          />
        </div>
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of Mathematics
          </h4>
      {/* <div className=' head_p rounded shadow mb-5'> */}

        <div className='justify-content-center me-5 ms-5'>
          
          <p className='ms-3 font-size-small me-5'>
            Welcome to the Department of Mathematical Sciences.
            We provide an international research, teaching and
            learning environment. Our courses are tailored to
            meet both your needs and those of your potential
            employers, whilst our staff are strongly committed to
            research and to the promotion of graduate
            activities.&nbsp; <br />
           
          </p>
          <a className='anchor_tag button_programs' href='Bschemistry'>
              See Programe Detail
            </a>
        </div>
        

      <div className='container mb-5 mt-5'>
        <div className='row '>
          <div className='col-md-6 col-sm-12'>
            <ul>
              <li>
                <b> Mr. Mudassar Ahmad Qureshi</b>
                <br />
                Associate Professor/ Head of department M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mirza Amanat Ali Baig</b> <br />
                Associate Professor M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Qaisar Mehmood</b>
                <br />
                Assistant Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Tariq Sharif</b>
                <br />
                Assistant Professor M.Phil{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Ikram</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Imran Nadeem</b>
                <br />
                Lecturer Ph.D{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-md-6 col-sm-12'>
            <ul>
              <li>
                <b>Mr. Abdul Aziz</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Ms. Ayesha Liaqat</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Ms. Imama Zahra</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mrs. Tanzeela Afzal</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Javed Ali</b>
                <br />
                Lecturer M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Mrs. Malka Shah Bano</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mathematics_;
