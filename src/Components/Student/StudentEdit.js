import React, { useState, useEffect } from "react";
// import uniqid from "uniqid";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import "./StudentView.css";
import useStore from "../../store/store";

function StudentEdit() {
  // const params = useParams();
  const updateStudent = useStore((state) => state.updateStudent);
  // const singleForm = useStore((state) => state.form);
  const forms = useStore((state) => state.forms);
  // console.log(singleForm);
  // const form = useStore((state) => state.form);
  // console.log(form);
  // const adminFetchApplicationById = useStore(
  //   (state) => state.adminFetchApplicationById
  // );
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  // console.log(id);

  // const getApplicationById = useStore((state) => state.getApplicationById);
  // useEffect(
  //   () => async () => {
  //     // await getApplicationById(id);

  //   },
  //   [id]
  // );
  useEffect(() => {
    if (id) {
      const singleform = forms.find((item) => item._id === id);
      console.log(singleform);
      setForm({ ...singleform });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const [form, setForm] = useState({
    shift: "",
    program: "",
    list: "",
    student_name: "",
    student_phone_number: "",
    father_name: "",
    father_phone_number: "",
    cnic: "",
    religion: "",
    domicile: "",
    dob: "",
    email: "",
    father_occupation: "",
    father_cnic: "",
    guardian_name: "",
    guardian_occupation: "",
    guardian_phone_number: "",
    current_address: "",
    permanent_address: "",
    city: "",
    state: "",
    zip_code: "",
  });
  // console.log(form);
  //submit
  const {
    shif,
    program,
    list,
    student_name,
    student_phone_number,
    father_name,
    father_phone_number,
    cnic,
    religion,
    domicile,
    dob,
    email,
    father_occupation,
    father_cnic,
    guardian_name,
    guardian_occupation,
    guardian_phone_number,
    current_address,
    permanent_address,
    city,
    state,
    zip_code,
  } = form;
  const updateHandle = async (e) => {
    e.preventDefault();
    const upadtedform = { ...form };
    updateStudent({ id, upadtedform });
    navigate("/");
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  // useEffect(
  //   () => async () => {
  //     const data = await adminFetchApplicationById(params.id);
  //     console.log(data);
  //     // form.student_name = data.student_name;
  //     // setForm((form.father_name = data.student_name));
  //   },
  //   []
  // );
  // const updateHandle = async (payload) => {
  //   // let payload = {
  //   //   name: name.current.value,
  //   //   imageUrl: imageUrl.current.value,
  //   //   cost: Number(cost.current.value),
  //   //   id: Number(id),
  //   // };
  //   await updateStudent(payload);
  //   // navigate("/");
  // };
  return (
    <div>
      <div className="mt-5  wraper  ">
        <div className="container ">
          <div className=" text-center ">
            <h1 className="rounded">
              Government Graduate Science College Wahdat Road Lahore
            </h1>
            <h1 className="border rounded-pill h-25 w-75 d-inline-block">
              Application For Addmission-2022
            </h1>

            <form className="rounded shadow p-5 mt-5 mb-5 h-100 w-100 bg-white">
              <div className="row">
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      {/* <button onclick="window.print()">Print this page</button> */}
                      {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}
                      <h6>
                        applied for:<span>BSCS</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ms-5">
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                      {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}

                      <h6>
                        Shift : <span>morning</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="exampleInputName"
                  >
                    Student Name:
                  </label>
                  {/* <h6 className="ms-0">name</h6> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter Your Name"
                    aria-label="First name"
                    name="student_name"
                    value={student_name}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="exampleInputPhone"
                  >
                    Student's Phone Number:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone"
                    placeholder="Enter Your Phone Number"
                    aria-label="Last name"
                    name="student_phone_number"
                    value={student_phone_number}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="row g-3 mt-2">
                <div className="col">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="exampleInputName"
                  >
                    Student's Father Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Father Name"
                    id="exampleInputName"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="exampleInputPhone"
                  >
                    Student's Father Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPhone"
                    placeholder="Phone"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="exampleInputCnic"
                  >
                    Student's Cnic Number:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputCnic"
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputState"
                    className="form-label d-flex justify-content-start mb-0"
                  >
                    Religion
                  </label>
                  <select id="inputState" className="form-select ">
                    <option defaultValue>Islam</option>
                    <option>Chrision</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputZip"
                    className="form-label d-flex justify-content-start mb-0"
                  >
                    Domicile
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              {/* address section */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label d-flex justify-content-start"
                  >
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="inputPassword4"
                    className="form-label d-flex justify-content-start"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label
                      htmlFor="inputOccupation4"
                      className="form-label d-flex justify-content-start"
                    >
                      Father Occupation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputOccupation4"
                      placeholder="Enter Father Occupation"
                      aria-label="First name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="inputCnic"
                      className="form-label d-flex justify-content-start"
                    >
                      {" "}
                      Father's Cnic Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputCnic"
                      placeholder="Enter Father's Cnic Number"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="inputOccupation4"
                      className="form-label d-flex justify-content-start"
                    >
                      Gradian's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputOccupation4"
                      placeholder="Enter Gradian's Name"
                      aria-label="First name"
                    />
                  </div>

                  <div className="col-md-4">
                    <label
                      htmlFor="inputOccupation4"
                      className="form-label d-flex justify-content-start"
                    >
                      Gradian's Occupation
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter gardian's Occupation"
                      aria-label=" First name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="inputOccupation4"
                      className="form-label d-flex justify-content-start"
                    >
                      Gardian's Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Gradian's phone Number"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress"
                    className="form-label d-flex justify-content-start"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress2"
                    className="d-flex justify-content-start form-label"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="inputCity"
                    className=" d-flex justify-content-start form-label"
                  >
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputState"
                    className=" d-flex justify-content-start form-label"
                  >
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option defaultValue>Punjab</option>
                    <option>Balochistan</option>
                    <option>Sindh</option>
                    <option>Khyber Pakhtunkhwa</option>
                    <option>Gilgit-Baltistan</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label
                    htmlFor="inputZip"
                    className="form-label d-flex justify-content-start "
                  >
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="container mt-5 ml-75">
                  {" "}
                  {/* table for qualifications */}
                  <table className="table border w-25">
                    <thead>
                      <tr>
                        <th scope="col">Examination</th>
                        <th scope="col">Year</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">Marks</th>
                        <th scope="col">%age</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Board</th>
                        <th scope="col">School/College</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Matric</th>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Intermediate</th>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text " style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">BA/B.SC</th>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="number" style={{ width: 80 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                        <td>
                          <input type="text" style={{ width: 156 }}></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className=" w-100">
                  <button
                    type="submit"
                    onClick={updateHandle}
                    className="mt-4 font-weight-bold text-uppercase text-bold w-50 shadow border-0 rounded-pill"
                  >
                    {" "}
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentEdit;
