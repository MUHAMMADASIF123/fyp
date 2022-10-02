import React from 'react';
import './Sociology.css';
function Sociology() {
  return (
    <div className='vh-100 mb-5'>
      <h2 className=' container mb-5 rounded mt-3'>
        Sociology Department Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex justify-content-center me-5 ms-5 mb-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className='paragraph ms-3'>
            Sociology is a science dedicated to understanding the
            social universe, from the micro-dynamics of human
            emotions to the larger processes involved in the
            creation of social institutions, corporate
            organizations, and global social structures. To give
            Sociology majors a firm understanding of the field,
            the UCR department of sociology offers courses
            covering a broad spectrum of topics including;
            ethnicity, race and class inequality, gender, social
            stratification, sociology of education, the city and
            urban problems, the environment, sociology of
            religion, crime and deviance and global social
            change. Course topics also include sociology of human
            and primate societies, formal and large
            organizations, the family, political organizations,
            language diversity in the United States, evolutionary
            sociology and social psychology. The Sociology
            undergraduate program has two major goals: to promote
            undergraduate excellence and to advance career
            success for students after graduation. To this end,
            Department staff and faculty provide students with
            individual attention and guidance. In addition,
            structured and diversified courses foster analytical
            and critical thinking.
          </p>

          <a className='anchor_tag' href='/'>
            See Programe Detail
          </a>

          <ul className='mt-4'>
            <li>
              <b>Mr. Abdul Aziz</b> <br />
              Assistant Professor,/Head of Department M.Phil.
            </li>
            <hr />
            <li>
              <b>Mr. Noman Isaac</b>
              <br />
              Lecturer M.Phil.{' '}
            </li>
            <hr />
          </ul>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035557/images/Departments/sociology_dpt_hauv93.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}

export default Sociology;
