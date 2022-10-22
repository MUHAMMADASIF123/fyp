import React from 'react';
import './Islamiyat_.css';
function Islamiyat_() {
  return (<>
     <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035550/images/Departments/islamiyat_dpt_awjbdu.jpg'
            width='100%'
            height='450px'
          />
        </div>
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department of Islamiyat
          </h4>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      
        <div className='justify-content-center me-5 ms-5'>
        
          <p className='ms-3 font-size-small me-5'>
            The Department of Islamic studies has been started BS
            in Islamic studies for 4 years. &nbsp; <br />
          
          </p>
          <a className='anchor_tag button_programs' href='Bschemistry'>
              See Course conetnt Details
            </a>
          </div>
          <div className='container mb-5 mt-5'>
          <div className='row'>
            <div className="col-md-6 col-sm-12">

            <ul>
            <li>
              <b>Hafiz Muhammad Muzaffar Suhail</b> <br />
              Associate Professor,/Head of Department M.A.{' '}
            </li>
            <hr />
            <li>
              <b>Dr. Muhammad Junaid</b>
              <br />
              Associate Professor Ph.D.{' '}
            </li>
            <hr />
            <li>
              <b>Syed Imran Mustafa Shah</b>
              <br />
              Associate Professor M.A.{' '}
            </li>
            <hr />
            <li>
              <b>Rao Muhammad Tariq</b>
              <br />
              Assistant Professor M.A. , M.Phil{' '}
            </li>
            <hr />
            <li>
              <b>Mr. Hifz Ur Rehman Usmani</b>
              <br />
              Assistant Professor M.Phil{' '}
            </li>
            <hr />
          </ul>

            </div>


          </div>
          </div>
          
        
       
      
    
    </>
  );
}

export default Islamiyat_;
