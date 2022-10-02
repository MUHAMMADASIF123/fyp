import React from 'react';
import './Physics_.css';
function Physics_() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        Physics Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex waddi_div justify-content-center me-5 ms-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className=' head_p ms-3'>
            The Department of Physics offers a full program of
            courses and research leading to the BS and M.Sc.
            degrees.&nbsp; <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035557/images/Departments/physics_dpt_e5cy22.jpg'
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
                <b> Dr. Ejaz Ahmed</b>
                <br />
                Professor,/Head of Department Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Abdul Rashid</b> <br />
                Associate Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Aslam Pervaiz</b>
                <br />
                Associate Professor M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Mrs. Noureen Azam</b>
                <br />
                Associate Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Tariq</b>
                <br />
                Associate Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Jamil Ahmad</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>
                <b>Mr. Saeed Ahmad Pal</b>
                <br />
                Assistant Professor M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. JAmil Ahmad Siddiqui</b>
                <br />
                Assistant Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Nadeem Ahmad Ashrafi</b>
                <br />
                Assistant Professor M.Phil{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Zahid khan</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Abid Hussain</b>
                <br />
                Assistant Professor M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Asghar</b>
                <br />
                Lecturer M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Salman Azhar</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Ismail</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Ms. Saba Maqsood</b>
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

export default Physics_;
