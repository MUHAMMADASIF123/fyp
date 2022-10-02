import React from 'react'
import { Link } from 'react-router-dom'
import StudentView from '../Student/StudentView'

const AdminRenderList = ({ applications }) => {
  const viewDetail = (id) => {
    ;<StudentView id />
  }

  return (
    <div className='container shadow rounded vh-100 mb-5 bg-white'>
      {applications.length ? (
        <>
          <table className='table'>
            <tbody>
              <tr>
                <th>Student Count</th>
                <th>Student Name</th>
                <th>Student's Father Name</th>
                {/* <th>CNIC</th> <td>{applications.cnic}</td> */}
                <th>Percentage Marks</th>
                <th>Detail</th>
              </tr>
            </tbody>
          </table>
          {applications.map((application, index) => {
            return (
              <table className='table' key={index}>
                <tbody>
                  <tr>
                    <td>{index}</td>
                    <td>{application.student_name}</td>
                    <td>{application.father_name}</td>
                    {application.program === 'intermediate' && (
                      <td>{application.metric.percentage}</td>
                    )}
                    {application.program === 'graduate' && (
                      <td>
                        {application.intermediate.percentage}
                      </td>
                    )}
                    {application.program === 'post graduate' && (
                      <td>{application.graduate.percentage}</td>
                    )}
                    <td>
                      <Link
                        to='/StudentView/:id'
                        params={{ id: application._id }}
                        onClick={() =>
                          viewDetail(application._id)
                        }
                      >
                        View Detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          })}
        </>
      ) : (
        <h1>something went wrong</h1>
      )}
    </div>
  )
}

export default AdminRenderList
