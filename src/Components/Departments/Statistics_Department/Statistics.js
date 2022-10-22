import React from 'react';
import './Statistics.css';
function Statistics() {
  return (
    <>
   
   <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Departments/statistic_dpt_xlsbgy.jpg'
            width='100%'
            height='450px'
          />
        </div>
        <h4 className='custom_heading  w-50 m-auto mt-2 rounded'>
            Department Of Statistics
          </h4>
        <div className='justify-content-center me-5 ms-5'>
          
          <p className='ms-3 font-size-small me-5'>
            Introduction to Statistics - Basic descriptive and
            inferential statistics. Emphasis on becoming a smart
            consumer of statistics . Will include the study of
            examples of statistics in the medical news.&nbsp;{' '}
            <br />
          
          </p>
          <a className='anchor_tag button_programs ' href='Bsstatistics'>
              See Course Content Details
            </a>
        </div>
      
     
      <div className='container mb-5 mt-5'>
        <div className='row '>
          <div className='col-md-6 col-sm-12'>
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
          <div className='col-md-6 col-sm-12'>
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
    </>
  );
}

export default Statistics;
