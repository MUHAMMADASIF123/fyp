import React from 'react';
import './Botany.css';
function Botany() {
  return (
    <div className='vh-100 mb-5'>
      <h2 className=' container mb-5 rounded mt-3'>
        Botany Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='paragraph ms-3'>
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

          <a className='anchor_tag' href='/'>
            See Programe Detail
          </a>

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
          </ul>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035579/images/Departments/botany_dpt_nutz64.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default Botany;
