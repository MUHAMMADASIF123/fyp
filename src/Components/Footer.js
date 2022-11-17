import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className='row w-100'>
          <div className='col-lg-4  col-md-4 col-sm-12 '>
            <a>
              <img
                className='w-25 logo d-flex ms-4 h-50 mt-3'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664276146/images/Others/colglogo_aahu5f.png'
              ></img>
            </a>
            <p className='text-justify text-white ms-4'>
              Our has built a level of trust and confidence among
              its existing and aspiring students due to the
              launch of innovative but effective study and work
              plans.
            </p>
          </div>
          <div className='col-lg-4 m-0 col-md-4 col-sm-12 '>
            <div className='mt-5'>
              <h1 className='info mb-3   text-white'>
                Information
              </h1>
              {/* GCS Wahdat Road,Lahore  */}
              <h6 className='align-baseline me-4 text-white'>
                <i className='fa-solid fa-location-dot text-warning me-2'></i>
                GCS Wahdat Road,Lahore{' '}
              </h6>
              <h6 className='align-baseline text-white'>
                <i className='fa-solid fa-phone text-warning me-2'></i>
                Phone No +42-99260039-40{' '}
              </h6>
              <h6 className='align-baseline me-5 text-white'>
                <i className='fa-solid fa-envelope text-warning me-2'></i>{' '}
                Email:abc@gmail.com
              </h6>
            </div>
            <div className='icons '>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-twitter'></i>
            </div>
          </div>
          <div className='col-lg-4  col-md-4 col-sm-12 '>
            <a href='https://bit.ly/3RdWnox' target='_blank'>
              {' '}
              <img
                className='IMG mt-5'
                src='https://res.cloudinary.com/azeem413/image/upload/v1664276029/images/Others/gcs_map_ruanqs.png'
              />{' '}
            </a>
          </div>
        </div>
      </footer>
      <div className='text-white copyright m-auto'>
        <span>
          {' '}
          All &copy; Right Reserved By Government Graduate
          college Science | GCS
        </span>
      </div>
    </>
  )
}

export default Footer
