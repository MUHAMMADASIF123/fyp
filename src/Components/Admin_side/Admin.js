import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function Admin() {
  return (
    <>
      <div className='container justify-content-center'>
        <form className='w-100 mb-5 mt-5 h-25 shadow bg-white rounded'>
          <div className='row justify-content-start d-flex '>
            <div className='mt-3 ms-3 '>
              <h5 className='justify-content-start d-flex'>
                Search By
              </h5>
            </div>
            <div className='col-md-4 mt-5'>
              <h6 className='justify-content-start d-flex ms-3'>
                Departments
              </h6>
              <div class='input-group mb-3'>
                <div class='input-group-prepend'>
                  {/* <label class="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}
                </div>
                <select
                  class='custom-select ms-3'
                  id='inputGroupSelect01'
                  style={{ width: 214 }}
                >
                  <option defaultValue>BSIT</option>
                  <option defaultValue>BSCS</option>
                  <option value='1'>BBA</option>
                  <option value='2'>Botany</option>
                  <option value='3'>Chemistry</option>
                  <option value='3'>
                    Communication Studies
                  </option>
                  <option value='3'>Economics</option>
                  <option value='3'>Education</option>
                  <option value='3'>English</option>
                  <option value='3'>Political Science</option>
                  <option value='3'>Mathematics</option>
                  <option value='3'>Sociology</option>
                  <option value='3'>Staistics</option>
                  <option value='3'>Urdu</option>
                  <option value='3'>Zoology</option>
                  <option value='3'>Physics</option>
                </select>
              </div>
            </div>
            <div className='col-md-4 mt-5'>
              <h5>Students Count</h5>
              <input placeholder='Enter number of Students'></input>
            </div>
            <div className='col-md-4 mt-5'>
              <h5 className='justify-content-start d-flex ms-3'>
                Shift
              </h5>
              <div class='input-group mb-3'>
                <div class='input-group-prepend'>
                  {/* <label class="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}
                </div>
                <select
                  class='custom-select'
                  id='inputGroupSelect01'
                  style={{ width: 220 }}
                >
                  <option defaultValue>Morning</option>
                  <option value='1'>Evening</option>
                </select>
              </div>
            </div>
            <div className='mt-5 mb-5'>
              <button type='submit'>Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className='container shadow rounded vh-100 mb-5 bg-white'>
        <table className='table'>
          <tbody>
            <tr>
              <th>Student ID</th>
              <th>student name</th>
              <th>student's Father name</th>
              <th>Percentage marks</th>
              <th>Detail</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Asif</td>
              <td>Ashraf ali</td>
              <td>75%</td>
              <td>
                <a className='anchor_tag' href='StudentView'>
                  View Detail
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
