import React from 'react';
import './Economics_.css';
function Economics_() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        Economics Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex waddi_div justify-content-center me-5 ms-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className=' head_p ms-3'>
            The Department of Economics is to provide excellent
            education in economics. The programs of the
            department emphasize the development of strong
            theoretical background along with data analysis
            skills that can be used in the investigation of
            economic problems in a wide variety of settings.The
            Department of Economics has developed curricula to
            become competitive. with the present day
            requirements. Formulation of policy alternatives by
            conducting solution oriented research to assist the
            decision makers for uniform growth and developing
            manpower in line with the demands of local and
            international markets are the priorities of the
            Department.The mission of the Department of Economics
            is to provide excellent education in economics. The
            programs of the department emphasize the development
            of strong theoretical background along with data
            analysis skills that can be used in the investigation
            of economic problems in a wide variety of
            settings.&nbsp; <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035547/images/Departments/economic_dpt_beebk0.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
      <div className='container mb-5 mt-5'>
        <div className='row '>
          <div className='col-6'>
            <ul>
              <li>
                <b>Mr. Amjad Sheikh</b> <br />
                Associate Professor/Head of Department M.A
              </li>
              <hr />
              <li>
                <b>Dr. Muhammad khalid Rashid</b>
                <br />
                Associate Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Tariq</b>
                <br />
                Assistant Professor M.A.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Khalid Munir</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Iftikhar Ahmad</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>
                <b>Mr. Muhammad Tanveer</b>
                <br />
                Assistant Professor M.A.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Syed Tahir Ali Shah</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Rehan Hamid</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Fahad IQbal</b>
                <br />
                Lecturer M.A{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Ghulam Farid</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Economics_;
