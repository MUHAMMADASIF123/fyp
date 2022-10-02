import React from 'react';
import './Islamiyat_.css';
function Islamiyat_() {
  return (
    <div className='vh-100'>
      <h2 className=' container mb-5 rounded mt-3'>
        Islamiyat Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='ms-3'>
            The Department of Islamic studies has been started BS
            in Islamic studies for 4 years. &nbsp; <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
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
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035550/images/Departments/islamiyat_dpt_awjbdu.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default Islamiyat_;
