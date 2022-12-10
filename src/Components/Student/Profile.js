import { useState, useEffect, Suspense, lazy } from 'react'
// import { useHistory } from 'react-router-dom'
// import './Admin.css'
import useStore from '../../store/store'
import StudentForm from './StudentForm'
// const AdminRenderList = lazy(() => import('../Admin_side/AdminRenderList'))


function Profile() {
  // const history = useHistory()
//   const [search, setSearch] = useState({})
  const [cnic,setCnic]=useState('')

  // const adminFetchApplications = useStore(
  //   (state) => state.adminFetchApplications
  // )
//   const adminFetchQueryApplications = useStore(
//     (state) => state.adminFetchQueryApplications
//   )
const adminSearchByCnic=useStore(state=>state.adminSearchByCnic)
  const token=useStore(state=>state.token)

//   console.log(token.data.name);

  //=> useEffect
  // useEffect(
  //   () => async () => {
  //     adminFetchApplications()
  //   },
  //   []
  // )

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault()
//     await adminFetchQueryApplications(search)
//   }
const handleCnicSubmit=async(e)=>{
  e.preventDefault()
  await adminSearchByCnic(cnic)
}


return (
    <>

<div className='col-md-6 shadow bg-white rounded  ms-5' style={{ width: 500  }}>
<h1 className='mt-5'>Student's CNIC</h1>
<p className='mt-3'> Search student by cnic:</p>
<input onChange={(e)=>setCnic(e.target.value)} type="string" className='mt-2' placeholder="Enter  Students's CNIC"/>
<button  onClick={handleCnicSubmit} type='submit'>
    Search
  </button>
</div>



<Suspense fallback={<div>Loading...</div>}>
{/* <AdminRenderList /> */}
<StudentForm/>
</Suspense>
</>
)
}

export default Profile;
