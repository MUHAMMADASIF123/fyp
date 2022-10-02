import React from 'react';
import './Zoology_.css';
function Zoology_() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        Department Of Zoology
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex waddi_div justify-content-center me-5 ms-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className=' head_p ms-3'>
            The Department of Zoology, a discipline of natural
            sciences, meets the need of training persons in a
            vast basic and interdisciplinary framework concerning
            Animal Sciences. The Department has earned
            international recognition for academic excellence and
            prominence in various fields of research like Cell,
            Molecular Biology, Physiology, Developmental Biology,
            Entomology, Palaeontology, Parasitology and
            Fisheries, etc. A Zoology graduate after Master’s
            degree or B.Sc. (Hons.) 4 years has a diverse
            experience and competence to serve or learn further
            in education, health, agriculture, industry and
            environment sectors.&nbsp; <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035571/images/Departments/zoology_dpt_oeyiow.jpg'
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
                <b> Dr. Zahid Hussain Siddiqui</b>
                <br />
                Professor/ Head of Department Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Asma Karim</b> <br />
                Associate Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Aftab Iqbal</b>
                <br />
                Assistant Professor M.Phil{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Saghir Ahmad</b>
                <br />
                Associate Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Syed Shahid Imran Bukhari</b>
                <br />
                Associate Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mrs. Mariam Zaheer</b>
                <br />
                Associate Professor M.Phil.{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>
                <b>Dr. Muhammad Tariq</b>
                <br />
                Lecturer Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Sabir Javed</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Ms. Qurat Ul Ain</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Ms. Bushra Younas</b>
                <br />
                Lecturer M.Phil.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Fazal Elahi Butt</b>
                <br />
                Assistant Professor M. Phil{' '}
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zoology_;
