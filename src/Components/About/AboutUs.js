import React from 'react';

function AboutUs() {
  return (
    <div className=' container vh-100 mb-5 mt-5 incHeight '>
      <h1 className=' rounded'>About Us</h1>
      <hr />
      <div className='d-flex justify-content-center mt-5 mb-5 me-5 ms-5 bg-white '>
        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035586/images/principlepic_ahfbtm.jpg'
            width='300px'
            height='300px'
          />
        </div>
        <div className='ms-5 me-5 '>
          <h3 className='container rounded mt-2'>
            Peinciple's Message
          </h3>
          <hr />
          <p className='paragraph'>
            Dear New Entrants: It is a matter of great pleasure
            for me to welcome you at Government College of
            Science, Wahdat Road, Lahore. After getting
            admission, I am hopeful, you would be able to get,
            maximum benefit from the excellent academic
            traditions of this institution. Necessary information
            about college and its smooth working have been
            included in this new bilingual prospectus students
            should study it to get update and relevant
            information. When I assumed the principal ship of
            this college. I had a determination to strive for the
            restoration of the excellent academic traditions of
            this institution. It has shared excellent and
            remarkable learning conditions with extracurricular
            activities, dignified and discipline. Not only
            renowned scholars and intellectuals have taught here,
            many students of this college earned outstanding
            repute in various walks of life. I should mention
            Ph.D. and M.Phil teachers greater in number here than
            any other college.
          </p>
        </div>
      </div>
      <hr />
      <div className=' d-flex justify-content-center me-5 ms-5 mb-5 mt-5 bg-white'>
        <div className=' heading  mb-5'>
          <h3 className='rounded me-5 mt-2'>
            Development Phase
          </h3>
          <hr />
          <p className=' paragraph me-5 mb-5'>
            Situated well away from the din of the city life and
            surrounded by tall and lush green shady trees, Govt.
            College of science, Wahdat Road, Lahore is one of the
            first rank academic institutions of the Punjab. The
            institution has attained this status after 48 years
            of persistent efforts and prolong struggle. The
            college, by its present name came into being on 8th
            August 1973,in compliance with the orders of the then
            Governor of the Punjab, after merging Government
            Superior Science College, Lahore and Government
            Degree College, Wahdat Road, Lahore. At the same time
            the building which was constructed to house Govt.
            Intermediate college for Girls, Gulberg, Lahore and
            which remained unutilized, was also annexed to the
            college building and was named Government College of
            Science, Wahdat Road, Lahore. Thus Government College
            of Science emerged from the blend of these three
            institutions and a renowned educationist, Prof. M.A.
            Saeed was appointed its first principal. The new
            college started functioning with new vigor, ambitions
            and targets. The post graduate teaching was started
            in Physics (1970).Chemistry (1974),Economics and
            Mathematics (1994)and Zoology (2005).
          </p>
        </div>

        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035580/images/Gallary/gallary_7_xtvup8.png'
            width='600px'
            height='400px'
          />
        </div>
      </div>
      <hr />
      <div className=' d-flex justify-content-center me-5 ms-5 mb-5 mt-5 bg-white'>
        <div className=' heading mb-5'>
          <h3 className='rounded me-5'>Aims And Objectives</h3>
          <hr />
          <ul>
            <li className=' paragraph ms-3'>
              <p className=' paragraph me-5 mb-5'>
                <b>Vision:</b>
                &nbsp;&nbsp; Govt. College of Science is
                imparting quality education to produce students
                of high quality in market oriented and
                traditional disciplines by creating an
                environment in which academic excellence can be
                combined with opportunity enabling individuals to
                meet the challenges of tomorrow and make their
                own future. The College is committed to be
                recognized as one of the best colleges of the
                Province, while empasizing strong moral and
                ethical values.
              </p>
            </li>
            <li className=' paragraph ms-3'>
              <p className=' paragraph me-5 mb-5'>
                <b>Mission: </b>
                &nbsp;&nbsp;To impart, create and disseminate
                knowledge in stimulating and conductive learning
                atmosphere by providing them intellectual and
                technologgical tools necessary to meet the
                challenges of tomorrow.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <img
            src='https://res.cloudinary.com/azeem413/image/upload/v1664035583/images/Gallary/library_jf2ldg.jpg'
            width='600px'
            height='400px'
          />
        </div>
      </div>
      <hr />
      <div className='container mb-5 mt-5'>
        <h3 className='rounded me-5'>College Map</h3>
        <hr />
        <img
          className='mb-5 mt-5 rounded'
          src='https://res.cloudinary.com/azeem413/image/upload/v1664035547/images/clgMap_cwqug0.jpg'
          width='80%'
          height='450px'
        />
      </div>
    </div>
  );
}

export default AboutUs;
