import React from 'react';
import './Becholer_programs_list.css';

function Bacholer_programs_list() {
  return (
    <div className='justify-content-center align-item-center  mb-5 me-5 ms-5 bg-white rounded'>
      <div className=' row justify-content-center align-item-center  mb-5 mt-5 me-5 ms-5 p-5'>
        <div className='col-md-12 col-sm-12'>
        <h1 className='rounded'>Bacholer Programs List</h1>
        <hr />
        <br />
        <ul>
          <li>
            <a href='/bscs'> BSCS (Computer Science) Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/Bschemistry'> BS Chemistry Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/bsPhysics'> BS Physics Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsBotany'> BS Botany Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/bsZoology'> BS Zoology Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsEducation'> BS Education Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/bsMath'> BS Mathematics Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BBA_'>
              BBA (Bechelor in Business Administration) Program
            </a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/bsEnglish'> BS English Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/bsSociology'> BS Sociology Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsEconomics'>BS Economics Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsIslamiat'> BS Islamiat Program</a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsMass_Communication'>
              {' '}
              BS Mass Communication Program
            </a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsUrdu'> BS Urdu Program</a>
          </li>
          <hr />
          <li>
            <br />
            <a href='/BsPoliticalScience'>
              {' '}
              BS Political Science Program
            </a>
          </li>
          <hr />
          <br />
          <li>
            <a href='/BsStatistic'> BS Statistics Program</a>
          </li>
          <hr />
          <br />
        </ul>
     </div>
      </div>
    </div>
  );
}

export default Bacholer_programs_list;
