import React, { useEffect,useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './StudentView.css'
import useStore from '../../store/store'
import Link from 'react-dom';
import {useReactToPrint} from 'react-to-print'
const StudentView = () => {
  const componentRef=useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
    decumentTitle:'student-data',
    onAfterPrint: ()=>alert("form is printed successfully")
  });

  const params = useParams()
  const form = useStore((state) => state.form)
  console.log(form)
  const adminFetchApplicationById = useStore(
    (state) => state.adminFetchApplicationById
  )

  useEffect(
    () => async () => {
      await adminFetchApplicationById(params.id)
    },
    []
  )
  // 
  // 
  return (
    <div  className="mb-5">
       <button   onClick={handlePrint}  className='mt-4 font-weight-bold text-uppercase text-bold shadow w-25 border-0 rounded-pill'>
                print form
              </button>
      {form ? (
        <div ref={componentRef} className='mt-5  wraper  '>
          <div className='container '>
            <div className=' text-center '>
            

              <div className='rounded shadow p-5 mt-5 h-100 w-100 bg-white'>
                <div className="row">
<div className='col-6 w-25'>
<div class="card" >
  <img src="..." class="card-img-top" alt="Please attach your Photo here"/>
 
</div>
</div>
<div className='col-6 w-75 '>
{/* <img  className="w-25" src='https://res.cloudinary.com/azeem413/image/upload/v1664276146/images/Others/colglogo_aahu5f.png' class="img-thumbnail" alt="..."/> */}
<h1 className='border rounded h-75 w-100  d-inline-block'>
              Government Graduate Science College Wahdat Road
              Lahore Application For Addmission-2022
              </h1>
</div>
                </div>
             
                <div className='row g-3'>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Applied For:
                    </h6>

                    <p className='border textleft'>
                      {form.list}
                    </p>
                  </div>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Shift:
                    </h6>
                    <p className='border textleft'>
                      {form.shift}
                    </p>
                  </div>
                </div>
                <div className='row g-3'>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Student Name:
                    </h6>

                    <p className='border textleft'>
                      {form.student_name}
                    </p>
                  </div>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Student's Phone Number:
                    </h6>
                    <p className='border textleft'>
                      {form.student_phone_number}
                    </p>
                  </div>
                </div>
                <div className='row g-3 mt-2'>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Student's Father Name:
                    </h6>
                    <p className='border textleft'>
                      {form.father_name}
                    </p>
                  </div>
                  <div className='col'>
                    <h6 className='d-flex justify-content-start'>
                      Student's Father Phone Number:
                    </h6>
                    <p className='border textleft'>
                      {form.father_phone_number}
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <h6 className='d-flex justify-content-start'>
                      Student's Cnic Number:
                    </h6>
                    <p className='border textleft'>
                      {form.cnic}
                    </p>
                  </div>
                  <div className='col-md-4'>
                    <h6 className='form-h6 d-flex justify-content-start mb-0'>
                      Religion
                    </h6>
                    <p className='border textleft'>
                      {form.religion}
                    </p>
                  </div>
                  <div className='col-md-4'>
                    <h6 className='form-h6 d-flex justify-content-start mb-0'>
                      Domicile
                    </h6>
                    <p className='border textleft'>
                      {form.domicile}
                    </p>
                  </div>
                </div>

                <div className='row g-3'>
                  <div className='col-md-6'>
                    <h6 className='form-h6 d-flex justify-content-start'>
                      Date Of Birth
                    </h6>
                    <p className='border textleft'>{form.dob}</p>
                  </div>
                  <div className='col-md-6'>
                    <h6 className='form-h6 d-flex justify-content-start'>
                      Email
                    </h6>
                    <p className='border textleft'>
                      {form.email}
                    </p>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h6 className='form-h6 d-flex justify-content-start'>
                        Father Occupation
                      </h6>
                      <p className='border textleft'>
                        {form.father_occupation}
                      </p>
                    </div>

                    <div className='col-md-6'>
                      <h6 className='form-h6 d-flex justify-content-start'>
                        Father's Cnic Number
                      </h6>
                      <p className='border textLeft'>
                        {form.father_cnic}
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <h6 className='form-h6 d-flex justify-content-start'>
                        Gradian's Name
                      </h6>
                      <p className='border textleft'>
                        {form.guardian_name}
                      </p>
                    </div>

                    <div className='col-md-4'>
                      <h6 className='form-h6 d-flex justify-content-start'>
                        Gradian's Occupation
                      </h6>
                      <p className='border textleft'>
                        {form.guardian_occupation}
                      </p>
                    </div>
                    <div className='col-md-4'>
                      <h6 className='form-h6 d-flex justify-content-start'>
                        Gardian's Phone Number
                      </h6>
                      <p className='border textleft'>
                        {form.guardian_phone_number}
                      </p>
                    </div>
                  </div>
                  <div className='col-12'>
                    <h6 className='form-h6 d-flex justify-content-start'>
                      Address
                    </h6>
                    <p className='border textleft'>
                      {form.current_address}
                    </p>
                  </div>
                  <div className='col-12'>
                    <h6 className='d-flex justify-content-start form-h6'>
                      Address 2
                    </h6>
                    <p className='border textleft'>
                      {form.permanent_address}
                    </p>
                  </div>
                  <div className='col-md-6'>
                    <h6 className=' d-flex justify-content-start form-h6'>
                      City
                    </h6>
                    <p className='border textleft'>
                      {form.city}
                    </p>
                  </div>
                  <div className='col-md-4'>
                    <h6 className=' d-flex justify-content-start form-h6'>
                      State
                    </h6>
                    <p className='border textleft'>
                      {form.state}
                    </p>
                  </div>
                  <div className='col-md-2'>
                    <h6 className='form-h6 d-flex justify-content-start '>
                      Zip
                    </h6>
                    <p className='border textleft'>
                      {form.zip_code}
                    </p>
                  </div>
                  <div className='container mt-5 ml-75'>
                    <table className='table border'>
                      <thead>
                        <tr>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Examination
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Year
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Roll No
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Marks
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            %age
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Subject
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            Board
                          </th>
                          <th
                            scope='col'
                            className='border textcenter'
                          >
                            School/College
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {form.metric ? (
                          <tr>
                            <th scope='row'>Matric</th>
                            <td className='border textcenter'>
                              {form?.metric?.year}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.roll_number}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.obtain_marks}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.percentage}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.subject}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.board}
                            </td>
                            <td className='border textcenter'>
                              {form?.metric.institute}
                            </td>
                          </tr>
                        ) : (
                          <>Something Went Wrong</>
                        )}
                        {form?.program === 'graduate' ||
                          (form?.program === 'post graduate' && (
                            <tr>
                              <th scope='row'>Intermediate</th>
                              <td className='border textcenter'>
                                {form?.intermediate?.year}
                              </td>
                              <td className='border textcenter'>
                                {form?.intermediate?.roll_number}
                              </td>
                              <td className='border textcenter'>
                                {
                                  form?.intermediate
                                    ?.obtain_marks
                                }
                              </td>
                              <td className='border textcenter'>
                                {form?.intermediate?.percentage}
                              </td>
                              <td className='border textcenter'>
                                {form?.intermediate?.subject}
                              </td>
                              <td className='border textcenter'>
                                {form?.intermediate?.board}
                              </td>
                              <td className='border textcenter'>
                                {form?.intermediate?.institute}
                              </td>
                            </tr>
                          ))}
                        {form?.program === 'post graduate' && (
                          <tr>
                            <th scope='row'>Graduate</th>
                            <td className='border textcenter'>
                              {form?.graduate?.year}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.roll_number}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.obtain_marks}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.percentage}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.subject}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.board}
                            </td>
                            <td className='border textcenter'>
                              {form?.graduate?.institute}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </div>
  
  )
}

export default StudentView
