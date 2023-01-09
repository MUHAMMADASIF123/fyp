import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
const StudentForm = () => {
  const forms = useStore((state) => state.forms);
  // let token = JSON.parse(localStorage.getItem('token-info'));
  // console.log(token);

  return (
    <div className="container shadow rounded vh-100 mb-5 bg-white">
      {forms.length ? (
        <>
          <table className="table">
            <tbody>
              <tr>
                <th>Student Count</th>
                <th>Student Name</th>
                <th>Student's Father Name</th>
                {/* <th>CNIC</th> <td>{forms.cnic}</td> */}
                <th>Percentage Marks</th>
                <th>Actions</th>
              </tr>
            </tbody>
          </table>
          {forms.map((form, index) => {
            return (
              <table className="table" key={index}>
                <tbody>
                  <tr>
                    <td className="ms-5">{index + 1}</td>
                    <td className="ms-5">{form.student_name}</td>
                    <td className="ms-5">{form.father_name}</td>
                    {form.program === "intermediate" && (
                      <td>{form.metric.percentage}</td>
                    )}
                    {form.program === "graduate" && (
                      <td>{form.intermediate.percentage}</td>
                    )}
                    {form.program === "post graduate" && (
                      <td>{form.graduate.percentage}</td>
                    )}
                    <td className="ms-5">
                      <Link to={`/edit/${form._id}`}>Edit Detail</Link>
                    </td>
                    <td>
                      <Link to={`/StudentView/${form._id}`}>View Detail</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </>
      ) : (
        <span>Please put your CNIC to get your Registartion form</span>
      )}
    </div>
  );
};

export default StudentForm;
