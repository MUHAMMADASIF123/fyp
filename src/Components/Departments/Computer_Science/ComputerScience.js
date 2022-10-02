import React from 'react';
import './ComputerScience.css';
function ComputerScience() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        Computer Science Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='ms-3'>
            The Department of Computer Sciences is to ensure that
            the students take maximum advantage of the modern
            computer sciences to solve a wide range of complex
            scientific, technological and social problems.The
            mission of the department is to provide exemplary
            education and training to our students in the field
            of computer so that they productively contribute to
            academia and industry.&nbsp;
            <br />
            <a className='anchor_tag' href='Bscs'>
              See Programe Detail
            </a>
          </p>

          <ul>
            <li>
              <b> Mr. Ejaz Ahmad </b>
              <br />
              Assistant Professor./HOD M.S
            </li>
            <hr />
            <li>
              <b>Ms. Sadaf Siddiqi</b> <br />
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
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035565/images/Departments/bscs_dpt_qxil9g.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default ComputerScience;
