import React from 'react';
import './BBA.css';
function BBA() {
  return (
    <>
       <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035545/images/Departments/bba_dpt_b025lp.jpg'
            width='100%'
            height='450px'
          />
        </div>
 
     
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of BBA
          </h4>
     
        <div className='justify-content-center me-5 ms-5'>
          <p className='ms-3 font-size-small me-5'>
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
</div>
<a className='anchor_tag button_programs' href='Bschemistry'>
See Course Content  Details
          </a>
<div className='container'>
  <div className='row'>
    <div className='col-md-6 col-sm-12'>
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
  </div>
</div>
          
    
     
   

    </>
  );
}

export default BBA;
