import React, { useState } from "react";
// import uniqid from "uniqid";

import axios from "axios";
import "../Login.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//config
// import BASE_URL from "../config/url";
//

function AdminLogin() {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    // const user = {
    //   email: email,
    //   password: password,
    // };
    // console.log(users);
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/student/login`, user)
      .then((res) => {
        localStorage.setItem("token-info", JSON.stringify(res?.data?.result));
        // console.log(res.data.result);
        // alert(JSON.stringify(res.data))
        alert(res.data.message);
        history("/admin");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };
  return (
    <div>
      <section className="Wraper  sm-mt-5 ">
        <div className="container ">
          <div className="col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center mt-5 vh-100">
            <form
              className="shadow p-5 mt-5 w-100 rounded"
              style={{ backgroundColor: "white" }}
            >
              <h3 className="text-white fw-bolder fs-4 rounded  w-100 mb-2">
                Admin Login !
              </h3>
              <div className="fw-normal text-black fw-bold mb-4">
                New here ?{" "}
                <a
                  href="/registeradmin"
                  className="text-decoration-none text-warning fw-bolder"
                >
                  create a account
                </a>
              </div>
              <div className="form-floating mb-3 d-flex justify-content-center ">
                {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/> */}
                <input
                  type="email"
                  // id="floatingInput"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  className="form-control  text-center mt-2 border-warning"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating d-flex justify-content-center">
                {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                 */}
                <input
                  type="password"
                  id="floatingPassword"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  className="form-control text-center mt-2 border-warning"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="mt-2 text-end">
                <a
                  href="#"
                  className="fw-bold text-primary text-decoration-none text-warning "
                >
                  {" "}
                  Forget password ?
                </a>
              </div>
              {/* <button type="submit" className="btn btn-primary w-100 my-4">Continue</button> */}
              <button
                type="submit"
                onClick={handleuser}
                className="mt-4 font-weight-bold text-uppercase text-bold shadow w-75  login border-0 rounded-pill "
              >
                {" "}
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
