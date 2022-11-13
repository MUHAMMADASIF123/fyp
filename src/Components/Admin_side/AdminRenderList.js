import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../store/store'
const AdminRenderList = () => {
  const forms = useStore((state) => state.forms)

  return (
    <div className='container shadow rounded vh-100 mb-5 bg-white'>
      {forms.length ? (
        <>
          <table className='table'>
            <tbody>
              <tr>
                <th>Student Count</th>
                <th>Student Name</th>
                <th>Student's Father Name</th>
                {/* <th>CNIC</th> <td>{forms.cnic}</td> */}
                <th>Percentage Marks</th>
                <th>Detail</th>
              </tr>
            </tbody>
          </table>
          {forms.map((form, index) => {
            // console.log(form[0])
            return (
              <table className='table' key={index}>
                <tbody>
                  <tr>
                    <td>{index}</td>
                    <td>{form.student_name}</td>
                    <td>{form.father_name}</td>
                    {form.program === 'intermediate' && (
                      <td>{form.metric.percentage}</td>
                    )}
                    {form.program === 'graduate' && (
                      <td>{form.intermediate.percentage}</td>
                    )}
                    {form.program === 'post graduate' && (
                      <td>{form.graduate.percentage}</td>
                    )}
                    <td>
                      <Link to={`/StudentView/${form._id}`}>
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