import React, { useState, useEffect } from "react";
// import uniqid from "uniqid";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
// import "./StudentView.css";
import useStore from "../../store/store";

function StudentEdit() {
  const updateStudent = useStore((state) => state.updateStudent);

  const forms = useStore((state) => state.forms);

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleform = forms.find((item) => item._id === id);
      setForm({ ...singleform });
    }
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
  const {
    shift,
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
  const [intermediate, setIntermediate] = useState({
    year: "",
    roll_number: 0,
    obtain_marks: 0,
    total_marks: 0,
    subject: "",
    board: "",
    institute: "",
  });

  const [graduate, setGraduate] = useState({
    year: "",
    roll_number: 0,
    obtain_marks: 0,
    total_marks: 0,
    subject: "",
    board: "",
    institute: "",
  });

  const [metric, setMetric] = useState({
    year: "",
    roll_number: "",
    obtain_marks: "",
    total_marks: "",
    subject: "",
    board: "",
    institute: "",
  });
  const {
    yearg,
    roll_numberg,
    obtain_marksg,
    total_marksg,
    subjectg,
    boardg,
    instituteg,
  } = graduate;
  const {
    year,
    roll_number,
    obtain_marks,
    total_marks,
    subject,
    board,
    institute,
  } = metric;

  const updateHandle = async (e) => {
    e.preventDefault();
    let payload = {
      ...form,
      ...metric,
      ...intermediate,
      ...graduate,
      id,
    };
    await updateStudent(payload);
    navigate("/");
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
    setIntermediate({ ...intermediate, [name]: value });
    setMetric({ ...metric, [name]: value });
  };

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

            <form className="rounded shadow p-5 mt-5 h-100 w-100 bg-white">
              <div className="row ">
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <h6 className="me-3 d-flex">Programs</h6>
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        defaultValue="intermediate"
                        style={{ width: 220 }}
                        name="program"
                        value={program}
                        onChange={onInputChange}
                      >
                        <option value="intermediate">Intermediate</option>
                        <option value="graduate">Graduate</option>
                        <option value="post graduate">Post Graduate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check">
                    <h6 className="me-3 d-flex">Programs List</h6>
                    <div className="input-group mb-3">
                      <div>
                        {form.program === "graduate" ? (
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            style={{ width: 214 }}
                            name="list"
                            value={list}
                            onChange={onInputChange}
                          >
                            <option defaultValue value="bsit">
                              BSIT
                            </option>
                            <option defaultValue>BSCS</option>
                            <option value="bba">BBA</option>
                            <option value="botany">Botany</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="mass-communication">
                              Mass Communication
                            </option>
                            <option value="conomics">Economics</option>
                            <option value="islamiyat">Islamiyat</option>
                            <option value="ducation">Education</option>
                            <option value="english">English</option>
                            <option value="political-science">
                              Political Science
                            </option>
                            <option value="mathematics">Mathematics</option>
                            <option value="sociology">Sociology</option>
                            <option value="statistics">Statistics</option>
                            <option value="urdu">Urdu</option>
                            <option value="zoology">Zoology</option>
                            <option value="physics">Physics</option>
                          </select>
                        ) : form.program === "intermediate" ? (
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            style={{ width: 214 }}
                            value={list}
                            onChange={onInputChange}
                          >
                            <option value="fsc-engg">
                              F.Sc (Pre Engineering)
                            </option>
                            <option value="fsc-medical">
                              F.Sc (Pre Medical)
                            </option>
                            <option value="i.com">I.Com</option>
                            <option value="i.c.s">I.C.S</option>
                            <option value="general science">
                              General Science
                            </option>
                          </select>
                        ) : (
                          <select
                            className="custom-select "
                            id="inputGroupSelect03"
                            style={{ width: 214 }}
                          >
                            <option defaultValue value="chemistry">
                              Chemistry
                            </option>
                            <option value="economics">Economics</option>

                            <option value="english">English</option>

                            <option value="mathematics">Mathematics</option>
                            <option value="physics">Physics</option>
                            <option value="b-com-it">
                              B.Com(Information Technology)
                            </option>
                            <option value="urdu">Urdu</option>
                            <option value="zoology">Zoology</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check">
                    <h6 className="me-3 d-flex">Shift</h6>
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        style={{ width: 214 }}
                        defaultValue="morning"
                        value={shift}
                        onChange={onInputChange}
                      >
                        <option value="morning">Morning</option>

                        <option value="evening">Evening</option>
                      </select>
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
                    // pattern='[A-Za-z]{3}'
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
                    type="text"
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
                    htmlFor="fatherName"
                  >
                    Student's Father Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Father Name"
                    id="fatherName"
                    aria-label="First name"
                    name="father_name"
                    value={father_name}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col">
                  <label
                    className="d-flex justify-content-start"
                    htmlFor="fatherPhone"
                  >
                    Student's Father Phone Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fatherPhone"
                    placeholder="Phone"
                    aria-label="Last name"
                    name="father_phone_name"
                    value={father_phone_number}
                    onChange={onInputChange}
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
                    type="text"
                    className="form-control"
                    id="exampleInputCnic"
                    name="cnic"
                    value={cnic}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputState"
                    className="form-label d-flex justify-content-start mb-0"
                  >
                    Religion
                  </label>
                  <select
                    name="religion"
                    value={religion}
                    onChange={onInputChange}
                    id="inputState"
                    className="form-select "
                  >
                    <option defaultValue value="islam">
                      Islam
                    </option>
                    <option value="christian">Christian</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputZip"
                    className="form-label d-flex justify-content-start mb-0"
                  >
                    Domicile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="domicile"
                    value={domicile}
                    id="inputZip"
                    onChange={onInputChange}
                  />
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
                    name="dob"
                    value={dob}
                    onChange={onInputChange}
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
                    name="email"
                    value={email}
                    onChange={onInputChange}
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
                      name="father_occupation"
                      value={father_occupation}
                      onChange={onInputChange}
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
                      type="text"
                      className="form-control"
                      id="inputCnic"
                      placeholder="Enter Father's Cnic Number"
                      aria-label="First name"
                      name="father_cnic"
                      value={father_cnic}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="guardianName"
                      className="form-label d-flex justify-content-start"
                    >
                      Guardian's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="guardianName"
                      placeholder="Enter Gradian's Name"
                      aria-label="First name"
                      name="guardian_name"
                      value={guardian_name}
                      onChange={onInputChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <label
                      htmlFor="guardianOcupation"
                      className="form-label d-flex justify-content-start"
                    >
                      Guardian's Occupation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter gardian's Occupation"
                      aria-label=" First name"
                      id="guardianOcupation"
                      name="guardian_occupation"
                      value={guardian_occupation}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="guardianPhone"
                      className="form-label d-flex justify-content-start"
                    >
                      Guardian's Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Gradian's phone Number"
                      id="guardianPhone"
                      aria-label="First name"
                      name="guardian_phone_number"
                      value={guardian_phone_number}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress"
                    className="form-label d-flex justify-content-start"
                  >
                    Current Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="current_address"
                    value={current_address}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress2"
                    className="d-flex justify-content-start form-label"
                  >
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    name="permanent_address"
                    value={permanent_address}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="inputCity"
                    className=" d-flex justify-content-start form-label"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    name="city"
                    value={city}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="inputState"
                    className=" d-flex justify-content-start form-label"
                  >
                    State
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    defaultValue="punjab"
                    name="state"
                    value={state}
                    onChange={onInputChange}
                  >
                    <option value="punjab">Punjab</option>
                    <option value="balochistan">Balochistan</option>
                    <option value="sindh">Sindh</option>
                    <option value="khyber pakhtunkhwa">
                      Khyber Pakhtunkhwa
                    </option>
                    <option value="gilgit baltistan">Gilgit-Baltistan</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label
                    htmlFor="inputZip"
                    className="form-label d-flex justify-content-start "
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    name="zip_code"
                    value={zip_code}
                    onChange={onInputChange}
                  />
                </div>
                <div className="container mt-5 ml-75">
                  <table className="table border w-25">
                    <thead>
                      <tr>
                        <th scope="col">Examination</th>
                        <th scope="col">Year</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">Obtain Marks</th>
                        <th scope="col">Total Marks</th>
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
                          <input
                            type="text"
                            placeholder="year"
                            style={{ width: 80 }}
                            name="year"
                            value={form?.metric?.year}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="roll"
                            style={{ width: 80 }}
                            name="roll_number"
                            value={form?.metric?.roll_number}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            style={{ width: 80 }}
                            placeholder="obt"
                            name="obtain_marks"
                            value={form?.metric?.obtain_marks}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            style={{ width: 80 }}
                            placeholder="tot"
                            name="total_marks"
                            value={form?.metric?.total_marks}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <div
                            className="border"
                            // type='text'
                            style={{
                              width: 156,
                            }}
                            placeholder="%"
                          >
                            {/* {metric.obtain_marks &&
                            metric.total_marks >= metric.obtain_marks
                              ? (metric.obtain_marks / metric.total_marks) * 100
                              : 0} */}
                            {form?.metric?.percentage}
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: 156 }}
                            placeholder="sub"
                            name="subject"
                            value={form?.metric?.subject}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: 156 }}
                            placeholder="board"
                            name="board"
                            value={form?.metric?.board}
                            onChange={onInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: 156 }}
                            placeholder="instasd"
                            name="institute"
                            value={form?.metric?.institute}
                            onChange={onInputChange}
                          />
                        </td>
                      </tr>

                      {/* inter mediate table */}

                      {form.program === "graduate" ||
                      form.program === "post graduate" ? (
                        <tr>
                          <th scope="row">Intermediate</th>
                          <td>
                            <input
                              type="text"
                              style={{ width: 80 }}
                              placeholder="year"
                              value={form?.intermediate?.year}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  year: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 80 }}
                              placeholder="roll number"
                              value={form?.intermediate?.roll_number}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  roll_number: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 80 }}
                              placeholder="obt"
                              value={form?.intermediate?.obtain_marks}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  obtain_marks: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 80 }}
                              placeholder="totl"
                              value={form?.intermediate?.total_marks}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  total_marks: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td
                            type="text"
                            style={{ width: 156 }}
                            placeholder="%"
                          >
                            {/* {intermediate.obtain_marks &&
                            intermediate.total_marks &&
                            intermediate.total_marks >=
                              intermediate.obtain_marks
                              ? (intermediate.obtain_marks /
                                  intermediate.total_marks) *
                                100
                              : 0} */}
                            {form?.intermediate?.percentage}
                          </td>
                          <td>
                            <input
                              type="text "
                              style={{ width: 156 }}
                              placeholder="sub"
                              value={form?.intermediate?.subject}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  subject: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 156 }}
                              placeholder="board"
                              value={form?.intermediate?.board}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  board: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 156 }}
                              placeholder="inst"
                              value={form?.intermediate?.institute}
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  institute: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                      ) : (
                        <></>
                      )}

                      {/* graduate */}
                      {form.program === "post graduate" ? (
                        <tr>
                          <th scope="row">BA/B.SC</th>
                          <td>
                            <input
                              type="text"
                              style={{ width: 80 }}
                              placeholder="year"
                              value={form?.graduate?.year}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  year: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 80 }}
                              placeholder="roll"
                              value={form?.graduate?.roll_number}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  roll_number: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 80 }}
                              placeholder="obt"
                              value={form?.graduate?.obtain_marks}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  obtain_marks: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 80 }}
                              placeholder="tot"
                              value={form?.graduate?.total_marks}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  total_marks: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td
                            type="text"
                            style={{ width: 156 }}
                            placeholder="%"
                          >
                            {graduate.obtain_marks &&
                            graduate.total_marks &&
                            graduate.total_marks >= graduate.obtain_marks
                              ? (graduate.obtain_marks / graduate.total_marks) *
                                100
                              : 0}
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 156 }}
                              placeholder="sub"
                              value={form?.graduate?.subject}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  subject: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 156 }}
                              placeholder="board"
                              value={form?.graduate?.board}
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  board: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              style={{ width: 156 }}
                              placeholder="inst"
                              value={form?.graduate?.institute}
                              onChange={(e) => {
                                setGraduate({
                                  ...graduate,
                                  institute: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-3 d-flex">
                <label htmlFor="formFile" className="me-2">
                  <b>Upload Fee Challan Form Pic: </b>
                </label>
                <input type="file" id="formFile" />
              </div>
              <button
                type="submit"
                onClick={updateHandle}
                className="mt-4 font-weight-bold text-uppercase text-bold shadow w-50 text-white border-0 rounded-pill"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentEdit;
