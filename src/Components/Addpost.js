import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Addpost() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    cnic: '',
  });

  const history = useNavigate();
  const { name, email, cnic } = student;
  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handlepost = async (e) => {
    var studentData = {
      name: name,
      email: email,
      cnic: cnic,
      postid: uniqid(),
    };
    console.log(studentData);
    e.preventDefault();
    await axios
      .post('/api/post/addnewpost', studentData)
      .then((res) => {
        // alert(res.data)
        console.log(res.data);
        history('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // history.push("/");
    // history("/home");
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <Link to={'/'} className='btn btn-primary'>
          {' '}
          back to home
        </Link>
        <div>
          <input
            type='text'
            placeholder='title'
            name='name'
            value={name}
            onChange={onInputChange}
            className='form-control mt-2'
          />
          <input
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={onInputChange}
            className='form-control mt-2'
          />
          <input
            type='text'
            placeholder='cnic'
            name='cnic'
            value={cnic}
            onChange={onInputChange}
            className='form-control mt-2'
          />
          <button
            type='submit'
            onClick={handlepost}
            className='mt-2  btn btn-success'
          >
            {' '}
            AddStudent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addpost;
