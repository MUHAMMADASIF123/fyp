import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <div className='d-flex body footer2'>
        <footer>
          <div className='d-flex footer22'>
            <div className='row'>
              <div className='text-white col-md-4 col-sm-6'>
                <a>
                  <img
                    className='logimg d-flex mt-2  mb-2'
                    src='https://res.cloudinary.com/azeem413/image/upload/v1664276146/images/Others/colglogo_aahu5f.png'
                  ></img>
                </a>
                <p className='text-align  text_space'>
                  Our has built a level of trust and confidence
                  among its existing and aspiring students due to
                  the launch of innovative but effective study
                  and work plans.
                </p>
              </div>
              <div className='col-md-4 address1 text-white sm-col-6 '>
                <span className='info'>Information</span>
                <div className='address'>
                  {/* GCS Wahdat Road,Lahore  */}
                  <h6 className='align-baseline me-4'>
                    <i className='fa-solid fa-location-dot text-warning me-2'></i>
                    GCS Wahdat Road,Lahore{' '}
                  </h6>
                  <h6 className='align-baseline'>
                    <i className='fa-solid fa-phone text-warning me-2'></i>
                    Phone No +42-99260039-40{' '}
                  </h6>
                  <h6 className='align-baseline me-5'>
                    <i className='fa-solid fa-envelope text-warning me-2'></i>{' '}
                    Email:abc@gmail.com
                  </h6>
                </div>
              </div>
              <div className='col-md-4  sm-col-6 '>
                {/* <h6 className='text-white '>Map</h6> */}
                <a href='https://bit.ly/3RdWnox' target='_blank'>
                  {' '}
                  <img
                    className='IMG'
                    src='https://res.cloudinary.com/azeem413/image/upload/v1664276029/images/Others/gcs_map_ruanqs.png'
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div className='foter'>
            <div className='txt'>
              All &copy; Right Reserved By Government Graduate
              college Science | GCS
            </div>
            {/* <div className='icons'>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-twitter'></i>
        </div> */}
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
