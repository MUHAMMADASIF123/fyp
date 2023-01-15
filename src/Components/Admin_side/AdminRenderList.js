import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
const AdminRenderList = () => {
  const navigate = useNavigate();
  const forms = useStore((state) => state.forms);
  const deleteStudent = useStore((state) => state.deleteStudent);
  // let token = JSON.parse(localStorage.getItem('token-info'));
  // console.log(token);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this form ?")) {
      await deleteStudent(id);
      navigate("/");
    }
  };

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
                <th>Detail</th>
              </tr>
            </tbody>
          </table>
          {forms.map((form, index) => {
            return (
              <table className="table" key={index}>
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{form.student_name}</td>
                    <td>{form.father_name}</td>
                    {form.program === "intermediate" && (
                      <td>{form.metric.percentage}</td>
                    )}
                    {form.program === "graduate" && (
                      <td>{form.intermediate.percentage}</td>
                    )}
                    {form.program === "post graduate" && (
                      <td>{form.graduate.percentage}</td>
                    )}
                    <td>
                      <Link to={`/StudentView/${form._id}`}>View Detail</Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(form._id)}>
                        Delete Detail
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </>
      ) : (
        <h1>something went wrong</h1>
      )}
    </div>
  );
};

export default AdminRenderList;
