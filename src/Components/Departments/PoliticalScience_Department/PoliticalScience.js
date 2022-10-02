import React from 'react';
import './PoliticalScience.css';
function PoliticalScience() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        PoliticalScience Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex waddi_div justify-content-center me-5 ms-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className=' head_p ms-3'>
            Political science studies the ways in which domestic
            governments and international relations address
            fundamental issues of power, justice, liberty, and
            order. The department teaches not only the mechanics
            and strategies of the political process, but also
            examines limitations on government authority, and
            responsibilities of citizens.This is examined through
            a broad curriculum surveying major domestic
            governmental functions (legislative, executive and
            judicial) as well as comparative analysis across
            countries and international relations. The department
            recently began to offer a B.S. degree in Political
            Science.&nbsp; <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035561/images/Departments/politicalScience_dpt_uaghyx.jpg'
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
                <b>Mr. Asif Nazeer</b>
                <br />
                Professor/Head of Department M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Nasir Mehmood</b> <br />
                Associate Professor M.A{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Nasir Ali Khan</b>
                <br />
                Associate Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Zahid Mahmood</b>
                <br />
                Associate Professor M.A.{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>
                <b>Mr. Mujeeb Ul Islam</b>
                <br />
                Assistant Professor M.A.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Qamar Abbas</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>

              <hr />
              <li>
                <b>Ms. Muneera Sultana</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Usman Zamurrad</b>
                <br />
                Lecturer BS Hons.{' '}
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliticalScience;
