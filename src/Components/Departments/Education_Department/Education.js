import React from 'react';
import './Education.css';
function Education() {
  return (
    < >
    <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035548/images/Departments/education_dpt_cwbwcp.jpg'
            width='100%'
            height='450px'
          />
        </div>

        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of Education
          </h4>
    
        <div className='justify-content-center me-5 ms-5'>
      
          <p className='ms-3 font-size-small me-5'>
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

          <a className='anchor_tag button_programs' href='BsEducation'>
            See Course Content Details
          </a>
          </div>

          <div className='container mb-5 mt-5'>
          <div className='row'>
            <div className="col-md-6 col-sm-12">

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


          </div>
          </div>

        
        
   
      
 
    </>
  );
}

export default Education;
