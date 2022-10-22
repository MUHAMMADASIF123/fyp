import React from 'react';
import './MassCom.css';
function MassCom() {
  return (
    <>
 <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035549/images/Departments/ms_dpt_r0imnf.jpg'
            width='100%'
            height='450px'
          />
        </div>
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
        Department of Mass Communication
          </h4>
      {/* <div className=' head_p rounded shadow mb-5'> */}
      
        <div className='justify-content-center me-5 ms-5'>
        
          <p className='ms-3 font-size-small me-5'>
            Mass communication is a process in which a person,
            group of people, or an organization sends a message
            through a channel of communication to a large group
            of anonymous and heterogeneous people and
            organizations. Mass communication has the following
            basic functions: To inform, To educate, To entertain
            and To persuade.
          </p>

          <a className='anchor_tag button_programs' href='BsMass_Communication'>
          See Course Content  Details
            </a>
          </div>

          <div className='container mb-5 mt-5'>
        <div className='row '>
          <div className='col-md-6 col-sm-12'>
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
        
        </div>
      </div>

     
       
     
      </>
  );
}

export default MassCom;
