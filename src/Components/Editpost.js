import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Editpost() {
  const params = useParams();
  const [post, setPost] = useState({
    title: '',
    imgurl: '',
    description: '',
  });
  const { title, imgurl, description } = post;
  // const onInputChange = (e) => {
  //   setPost({ ...post, [e.target.name]: e.target.value });
  // }
  const history = useNavigate();
  useEffect(() => {
    axios
      .post('/api/post/getpostdata', { postid: params.postid })
      .then((res) => {
        // res.send(res.data)\\
        const postdata = res.data[0];
        setPost(postdata);
        // console.log(res.data)
      })
      .catch((err) => {
        // res.send(err)
        console.log(err);
      });
  }, []);
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  function editpost() {
    const updatedpost = {
      title: title,
      imgurl: imgurl,
      description: description,
      postid: params.postid,
    };
    axios
      .post('/api/post/updatepost', updatedpost)
      .then((res) => {
        // setPost(res.data[0])
        console.log(res.data);
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


          
          <input
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={onInputChange}
            className='form-control mt-2'
          />
          <input
            type='text'
            placeholder='imgurl'
            name='imgurl'
            value={imgurl}
            onChange={onInputChange}
            className='form-control mt-2'
          />
          <textarea
            rows='10'
            cols='30'
            placeholder='descripion'
            name='description'
            value={description}
            onChange={onInputChange}
            className='form-control mt-2'
          ></textarea>
          <button
            type='submit'
            onClick={editpost}
            className='mt-2  btn btn-success'
          >
            save post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editpost;
// import React, { useState } from 'react'
// import  uniqid from 'uniqid';
// import axios from 'axios'
// function Addpost() {

// })

//   const { title,imgurl,description,postid } = post;
//   const onInputChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };

//   const handlepost = async (e) => {

//     // history.push("/");
//     // history("/home");

//   }

//   return (

//   )
// }

// export default Addpost
