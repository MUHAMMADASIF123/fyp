import React from 'react';
import './ComputerScience.css';
function ComputerScience() {
  return (
    <>
    <div>
    <img className=''
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035565/images/Departments/bscs_dpt_qxil9g.jpg'
            width='100%'
            height='400px'
          />
      </div>
      <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of Computer Science
          </h4>
      <div className=' w-75 ms-5 me-5 m-auto'>
      <div className='row'>
        <div className='col-md-12   col-sm-12  mb-5 '>
         
          <p className='ms-3 font-size-small me-5'>
            The Department of Computer Sciences is to ensure that
            the students take maximum advantage of the modern
            computer sciences to solve a wide range of complex
            scientific, technological and social problems.The
            mission of the department is to provide exemplary
            education and training to our students in the field
            of computer so that they productively contribute to
            academia and industry.&nbsp;
            <br />
          
          </p>
          <a className='anchor_tag button_programs' href='Bscs'>
              See Course Content  Details
            </a>
          <ul>
            <li>
              <b> Mr. Ejaz Ahmad </b>
              <br />
              Assistant Professor./HOD M.S
            </li>
            <hr />
            <li>
              <b>Ms. Sadaf Siddiqi</b>
               <br />
              Assistant Professor. M.Phil.
            </li>
            <hr />
            <li>
              <b>Mr. Abdul Wahab</b>
              <br />
              Assistant Professor. M.Phil.
            </li>
            <hr />
          </ul>
        </div>
       
      </div>
      </div>
      </>
  );
}

export default ComputerScience;
