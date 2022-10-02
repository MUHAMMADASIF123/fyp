import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
// import { post, use } from '../../../routes/post'
// import '../App.css'
import { Link, useNavigate } from 'react-router-dom';

function Postlist() {
  const history = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('/api/post/getpost')
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deletepost(postid) {
    axios
      .post('/api/post/deletepost', { postid: postid })
      .then((res) => {
        alert(res.data);
        history('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div>
          {post.map((val, index) => (
            <div className='card  mt-2' key={index}>
              <h5 className='card-title text-black mt-2'>
                {val.name}
              </h5>

              <div className='card-body'>
                {/* <img src={val.email} className="card-img-top" alt="..." /> */}
                <h5 className='card-title text-black mt-2'>
                  {val.email}
                </h5>
                <h5 className='card-title text-black mt-2'>
                  {val.cnic}
                </h5>
                <div className=' d-flex justify-content-end mt-2'>
                  <Link
                    to={`/editpost/${val.postid}`}
                    className='btn btn-primary me-2'
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      deletepost(val.postid);
                    }}
                    className='btn btn-danger '
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Postlist;
