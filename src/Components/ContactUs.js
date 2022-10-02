import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './contactus.css';
// div background #EBF0F4
const ContactUs = () => {
  const form = useRef();
  const history = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gyo59t8',
        'template_nnn72km',
        form.current,
        '-mhcSLqHKxDPHScGn'
      )
      .then(
        (result) => {
          console.log(result.text);
          history('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='row d-flex justify-content-center  vh-100  '>
      <div className='col-md-6 mt-5 text-center mb-5 '>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=' shadow d-flex justify-content-center rounded mt-5 mb-5 h-75 bg-white'
        >
          {/* <h1 className=''>Name</h1> */}
          <div className='w-75  '>
            {/* <h1 className='custom_heading text-white rounded'> */}
            <div className=' mb-5 rounded'>
              <h1 className='custom_heading rounded'>
                Get in Touch !
              </h1>
              <input
                type='text'
                placeholder='Enter your name '
                className=' w-75 text-center mt-2 rounded '
                name='from_name'
              />
              {/* <label className='ms-0'>Email</label> */}
              <input
                type='email'
                placeholder='Enter your email'
                className=' w-75 text-center mt-2 border-warning rounded '
                name='email'
              />
              {/* <label className='ms-0'>Message</label> */}
              <textarea
                cols='5'
                rows='5'
                type='textarea'
                placeholder=' Enter your mesaage'
                className=' w-75 text-center mt-2 border-warning rounded '
                name='message'
              />
              <button
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-75 border-0 rounded-pill '
                type='submit'
                value='Send'
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
