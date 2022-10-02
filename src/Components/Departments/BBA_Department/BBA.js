import React from 'react';
import './BBA.css';
function BBA() {
  return (
    <div className='vh-100'>
      <h2 className=' container mb-5 rounded mt-3'>
        Commerce /BBA Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='paragraph ms-3'>
            This Department teaches the knowladge of Commerce and
            Finanace to their students. Students are provided
            with up-to-date knowledge through classroom lectures,
            seminars, conferences, case studies, class
            presentations and research reports. The program is
            assessed by a mixture of continuous assessment and
            examination. Students have an outstanding record of
            going on to jobs in business and management or
            working for them or studying further.
          </p>

          <a className='anchor_tag' href='Bschemistry'>
            See Programe Detail
          </a>

          <ul className='mt-4'>
            <li>
              <b>Ms.Asifah Javed</b> <br />
              Assistant Professor M.Com{' '}
            </li>
            <hr />
            <li>
              <b>Mr. Usmam Saeed</b>
              <br />
              Visiting Lecturer in Commerce/BBA M.Com (Finance){' '}
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035545/images/Departments/bba_dpt_b025lp.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default BBA;
