import React from 'react';
import './StudentView.css';

function StudentView() {
  return (
    // <div>StudentView</div>
    <div>
      <div className='mt-5  wraper  '>
        <div className='container '>
          <div className=' text-center '>
            <h1 className='border rounded-pill h-25 w-75 d-inline-block'>
              Student Detail
            </h1>

            <form className='rounded shadow p-5 mt-5 h-100 w-100 bg-white'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}
                      <h6>
                        applied for:<span>BSCS</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 ms-5'>
                  <div className='input-group mb-3 '>
                    <div className='input-group-prepend'>
                      {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}

                      <h6>
                        Shift : <span>morning</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row g-3'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputName'
                  >
                    Student Name:
                  </label>
                  {/* <h6 className="ms-0">name</h6> */}
                  <h5 className='border textleft'>Asif</h5>
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputPhone'
                  >
                    Student's Phone Number:
                  </label>
                  <h5 className='border textleft'>
                    03245140649
                  </h5>
                </div>
              </div>
              <div className='row g-3 mt-2'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputName'
                  >
                    Student's Father Name:
                  </label>
                  <h5 className='border textleft'>Ashraf</h5>
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputPhone'
                  >
                    Student's Father Phone Number:
                  </label>
                  <h5 className='border textleft'>
                    03245140649
                  </h5>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputCnic'
                  >
                    Student's Cnic Number:
                  </label>
                  <h5 className='border textleft'>
                    35201-5566231-3
                  </h5>
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputState'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Religion
                  </label>
                  <h5 className='border textleft'>Islam</h5>
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputZip'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Domicile
                  </label>
                  <h5 className='border textleft'>
                    6423987632050498
                  </h5>
                </div>
              </div>
              {/* address section */}
              <div className='row g-3'>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputEmail4'
                    className='form-label d-flex justify-content-start'
                  >
                    Date Of Birth
                  </label>
                  <h5 className='border textleft'>1-1-2000</h5>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputPassword4'
                    className='form-label d-flex justify-content-start'
                  >
                    Email
                  </label>
                  <h5 className='border textleft'>
                    asifaliashrafali@gmail.com
                  </h5>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label
                      htmlFor='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Father Occupation
                    </label>
                    <h5 className='border textleft'>Labour</h5>
                  </div>

                  <div className='col-md-6'>
                    <label
                      htmlFor='inputCnic'
                      className='form-label d-flex justify-content-start'
                    >
                      {' '}
                      Father's Cnic Number
                    </label>
                    <h5 className='border'>35201-5566443-7</h5>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <label
                      htmlFor='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gradian's Name
                    </label>
                    <h5 className='border textleft'>
                      Ashraf ali
                    </h5>
                  </div>

                  <div className='col-md-4'>
                    <label
                      htmlFor='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gradian's Occupation
                    </label>
                    <h5 className='border textleft'>Labour</h5>
                  </div>
                  <div className='col-md-4'>
                    <label
                      htmlFor='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Gardian's Phone Number
                    </label>
                    <h5 className='border textleft'>
                      03004567890
                    </h5>
                  </div>
                </div>
                <div className='col-12'>
                  <label
                    htmlFor='inputAddress'
                    className='form-label d-flex justify-content-start'
                  >
                    Address
                  </label>
                  <h5 className='border textleft'>
                    baba bulle shah kahna nu lahore
                  </h5>
                </div>
                <div className='col-12'>
                  <label
                    htmlFor='inputAddress2'
                    className='d-flex justify-content-start form-label'
                  >
                    Address 2
                  </label>
                  <h5 className='border textleft'>
                    baba bulle shah kahna nu lahore
                  </h5>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputCity'
                    className=' d-flex justify-content-start form-label'
                  >
                    City
                  </label>
                  <h5 className='border textleft'>lahore</h5>
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputState'
                    className=' d-flex justify-content-start form-label'
                  >
                    State
                  </label>
                  <h5 className='border textleft'>punjab</h5>
                </div>
                <div className='col-md-2'>
                  <label
                    htmlFor='inputZip'
                    className='form-label d-flex justify-content-start '
                  >
                    Zip
                  </label>
                  <h5 className='border textleft'>47934</h5>
                </div>
                <div className='container mt-5 ml-75'>
                  {' '}
                  {/* table for qualifications */}
                  <table className='table border'>
                    <thead>
                      <tr>
                        <th scope='col'>Examination</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Roll No</th>
                        <th scope='col'>Marks</th>
                        <th scope='col'>%age</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Board</th>
                        <th scope='col'>School/College</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Matric</th>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>Intermediate</th>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>BA/B.SC</th>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                        <td>
                          <h5 className='border textleft'>
                            47934
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                type='submit'
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-25 border-0 rounded-pill'
              >
                {' '}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentView;
