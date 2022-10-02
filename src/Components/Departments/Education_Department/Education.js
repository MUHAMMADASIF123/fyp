import React from 'react';
import './Education.css';
function Education() {
  return (
    <div className='vh-100 mb-5'>
      <h2 className=' container mb-5 rounded mt-3'>
        Education Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='paragraph ms-3'>
            The Department of Education is to provide quality
            education to prepare reflective educators who possess
            theoretical knowledge as well as practical mastery of
            pedagogical techniques and who can face future
            challenges in the education sector with confidence.
            The department intends to develop in its graduates a
            critical understanding of the core areas of
            education.Our mission is to provide flexible,
            multi-method learning opportunities with variety of
            approaches including lectures, tutorial group
            discussions, seminars, presentations, research work,
            teaching practice, field work etc.
          </p>

          <a className='anchor_tag' href='/'>
            See Programe Detail
          </a>

          <ul className='mt-4 mb-5'>
            <li>
              <b>Dr. Rana Naveed Ahmad</b> <br />
              Associate Professor Ph.D.{' '}
            </li>
            <hr />
            <li>
              <b>Mr. Abdul Qayyum.</b>
              <br />
              Assistant Professor M.A.
            </li>
            <hr />
            <li>
              <b>Mr. Muhammad Shahzad</b>
              <br />
              Assistant Professor M.Phil.{' '}
            </li>
            <hr />
            <li>
              <b>Mr. Muhammad Junaid Khan</b>
              <br />
              Lecturer M.A.{' '}
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035548/images/Departments/education_dpt_cwbwcp.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
