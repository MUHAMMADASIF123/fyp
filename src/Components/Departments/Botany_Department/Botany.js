import React from 'react';
import './Botany.css';
function Botany() {
  return (
  <>
 <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035579/images/Departments/botany_dpt_nutz64.jpg'
            width='100%'
            height='450px'
          />
        </div>
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of Botany
          </h4>
      {/* <div className=' head_p rounded shadow mb-5'> */}
      
        <div className='justify-content-center me-5 ms-5'>
       
          <p className='ms-3 font-size-small me-5'>
            Botany is one of the natural science subjects. The
            overarching aim of Botany is to produce graduate and
            post-graduate degree programs in science. Each
            specialization is a complete discipline in its own
            sphere and requires specialized teaching, research
            and laboratory facilities to strengthen the
            interactions among the different departments of
            College. Botany Department is an old department of
            the College as it is the basic science subject.
          </p>

          <a className='anchor_tag button_programs' href='BsBotany'>
           See Course Content Details
          </a>
</div>

<div className='container mb-5 mt-5'>
          <div className='row'>
            <div className="col-md-6 col-sm-12">

            <ul className='mt-4'>
            <li>
              <b>Dr. Abdul Hameed</b> <br />
              Professor Ph.D. /Head of Department{' '}
            </li>
            <hr />
            <li>
              <b>Dr. Muhammad Zia Ur Rehman</b>
              <br />
              Associate Professor Ph.D.{' '}
            </li>
            <hr />
            <li>
              <b>Dr. Malik Aadil Abbas</b>
              <br />
              Lecturer Ph.D.{' '}
            </li>
            <hr />
            <li>
              <b>Mr. Muhammad Danish Jamil</b>
              <br />
              Lecturer Ph.D.{' '}
            </li>
            <hr />
            <li>
              <b>Ms. Atiqa Wajed </b>
              <br />
              Lecturer Ph.D.{' '}
            </li>
           
          </ul>

            </div>


          </div>
          </div>
          
      
     
       
      
    </>
  );
}

export default Botany;
