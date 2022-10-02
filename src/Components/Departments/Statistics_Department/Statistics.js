import React from 'react';
import './Statistics.css';
function Statistics() {
  return (
    <div>
      <h2 className=' container mb-5 rounded mt-3'>
        Statistics Department
      </h2>

      {/* <div className=' head_p rounded shadow mb-5'> */}
      <div className='d-flex waddi_div justify-content-center me-5 ms-5'>
        <div className=' heading mb-5'>
          <h4 className='head ms-3 me-3 rounded'>
            Introduction of Department
          </h4>
          <p className=' head_p ms-3'>
            Introduction to Statistics - Basic descriptive and
            inferential statistics. Emphasis on becoming a smart
            consumer of statistics . Will include the study of
            examples of statistics in the medical news.&nbsp;{' '}
            <br />
            <a className='anchor_tag' href='Bschemistry'>
              See Programe Detail
            </a>
          </p>
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Departments/statistic_dpt_xlsbgy.jpg'
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
                <b>Mr. Muhammad Bajwa</b>
                <br />
                Associate Professor/ Head of Department M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Shahid Iqbal</b> <br />
                Assistant Professor Ph.D.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Muhammad Sabir Chaudhry</b>
                <br />
                Assistant Professor M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Amjad Ali Chaudhry</b>
                <br />
                Assistant Professor M.Sc.{' '}
              </li>
              <hr />
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>
                <b>Mr. Muhammad Zahid Rasheed</b>
                <br />
                Assistant Professor M.Phil{' '}
              </li>
              <hr />
              <li>
                <b>Dr. Azam Zaka</b>
                <br />
                Assistant Professor P.hD.{' '}
              </li>

              <hr />
              <li>
                <b>Mr. Malik Muhammad Qasim</b>
                <br />
                Assistant Professor M.Sc.{' '}
              </li>
              <hr />
              <li>
                <b>Mr. Fayyaz Labha</b>
                <b>oooo fir gwach gya ee</b>
                <br />
                Assistant Professor M.Sc.{' '}
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
