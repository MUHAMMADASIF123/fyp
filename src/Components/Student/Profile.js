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

<div className=' shadow bg-white rounded w-50 m-auto mb-5 mt-1'>
{/* <h1 className=''>Enter Your CNIC to get Your Registration form</h1> */}
<p className=''> Enter Your CNIC to get Your Registration form:</p>
<input onChange={(e)=>setCnic(e.target.value)} type="string" className='mt-2' placeholder="Enter  Your CNIC Here"/>
<button className='mb-2'  onClick={handleCnicSubmit} type='submit'>
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
