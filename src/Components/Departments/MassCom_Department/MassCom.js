import React from 'react';
import './MassCom.css';
function MassCom() {
  return (
    <div className='vh-100'>
      <h2 className=' container mb-5 rounded mt-3'>
        Mass Communication Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='paragraph ms-3'>
            Mass communication is a process in which a person,
            group of people, or an organization sends a message
            through a channel of communication to a large group
            of anonymous and heterogeneous people and
            organizations. Mass communication has the following
            basic functions: To inform, To educate, To entertain
            and To persuade.
          </p>

          <a className='anchor_tag' href='/'>
            See Programe Detail
          </a>

          <ul className='mt-4'>
            <li>
              <b>Mr. Shafayat Ali</b> <br />
              Assistant Professor / Head of Department M.A.,
              M.Phil.
            </li>
            <hr />
            <li>
              <b>Ms. Saiba ALi</b>
              <br />
              Lecturer M.Phil{' '}
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035549/images/Departments/ms_dpt_r0imnf.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default MassCom;
