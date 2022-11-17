import { useState, useEffect, Suspense, lazy } from 'react'
// import { useHistory } from 'react-router-dom'
import './Admin.css'
import useStore from '../../store/store'
const AdminRenderList = lazy(() => import('./AdminRenderList'))

function Admin() {
  // const history = useHistory()
  const [search, setSearch] = useState({})

  const adminFetchApplications = useStore(
    (state) => state.adminFetchApplications
  )
  const adminFetchQueryApplications = useStore(
    (state) => state.adminFetchQueryApplications
  )

  const forms = useStore((state) => state.forms)

  // const [applications, setApplications] = useState([])

  //=> useEffect
  useEffect(
    () => async () => {
      adminFetchApplications()
    },
    []
  )

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    await adminFetchQueryApplications(search)
  }

  return (
    <>
      <div className='container justify-content-center'>
        <form className='w-100 mb-5 mt-5 h-25 shadow bg-white rounded'>
          <div className='row justify-content-start d-flex '>
            <div className='mt-3 ms-3 '>
              <h5 className='justify-content-start d-flex'>
                Search By
              </h5>
            </div>
            <div className='row '>
              <div className='col-md-4 mb-3'>
                <div className='form-check'>
                  <h6 className='me-3 d-flex'>Programs</h6>
                  <div className='input-group mb-3'>
                    <select
                      className='custom-select'
                      id='inputGroupSelect01'
                      style={{ width: 220 }}
                      onChange={(e) =>
                        setSearch({
                          ...search,
                          program: e.target.value,
                        })
                      }
                    >
                      <option>Choose</option>
                      <option value='intermediate'>
                        Intermediate
                      </option>
                      <option value='graduate'>Graduate</option>
                      <option value='post graduate'>
                        Post Graduate
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-check'>
                  <h6 className='me-3 d-flex'>Programs List</h6>
                  <div className='input-group mb-3'>
                    <div>
                      {search.program === 'graduate' ? (
                        <select
                          className='custom-select'
                          id='inputGroupSelect01'
                          style={{ width: 214 }}
                          onChange={(e) => {
                            setSearch({
                              ...search,
                              list: e.target.value,
                            })
                          }}
                        >
                          <option>Choose</option>
                          <option value='bscs'>BSCS</option>
                          <option value='bba'>BBA</option>
                          <option value='botany'>Botany</option>
                          <option value='chemistry'>
                            Chemistry
                          </option>
                          <option value='mass-communication'>
                            Mass Communication
                          </option>
                          <option value='conomics'>
                            Economics
                          </option>
                          <option value='islamiyat'>
                            Islamiyat
                          </option>
                          <option value='ducation'>
                            Education
                          </option>
                          <option value='english'>
                            English
                          </option>
                          <option value='political-science'>
                            Political Science
                          </option>
                          <option value='mathematics'>
                            Mathematics
                          </option>
                          <option value='sociology'>
                            Sociology
                          </option>
                          <option value='statistics'>
                            Statistics
                          </option>
                          <option value='urdu'>Urdu</option>
                          <option value='zoology'>
                            Zoology
                          </option>
                          <option value='physics'>
                            Physics
                          </option>
                        </select>
                      ) : search.program === 'intermediate' ? (
                        <select
                          className='custom-select'
                          id='inputGroupSelect01'
                          style={{ width: 214 }}
                          onChange={(e) =>
                            setSearch({
                              ...search,
                              list: e.target.value,
                            })
                          }
                        >
                          <option>Choose</option>
                          <option value='pre-engg'>
                            F.Sc (Pre Engineering)
                          </option>
                          <option value='fsc-medical'>
                            F.Sc (Pre Medical)
                          </option>
                          <option value='i.com'>I.Com</option>
                          <option value='i.c.s'>I.C.S</option>
                          <option value='general science'>
                            General Science
                          </option>
                        </select>
                      ) : (
                        <select
                          className='custom-select '
                          id='inputGroupSelect03'
                          style={{ width: 214 }}
                          onChange={(e) =>
                            setSearch({
                              ...search,
                              list: e.target.value,
                            })
                          }
                        >
                          <option>Choose</option>
                          <option value='chemistry'>
                            Chemistry
                          </option>
                          <option value='economics'>
                            Economics
                          </option>

                          <option value='english'>
                            English
                          </option>

                          <option value='mathematics'>
                            Mathematics
                          </option>
                          <option value='physics'>
                            Physics
                          </option>
                          <option value='b-com-it'>
                            B.Com(Information Technology)
                          </option>
                          <option value='urdu'>Urdu</option>
                          <option value='zoology'>
                            Zoology
                          </option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-check'>
                  <h6 className='me-3 d-flex'>Shift</h6>
                  <div className='input-group mb-3'>
                    <select
                      className='custom-select'
                      id='inputGroupSelect01'
                      style={{ width: 214 }}
                      onChange={(e) =>
                        setSearch({
                          ...search,
                          shift: e.target.value,
                        })
                      }
                    >
                      <option>Choose</option>
                      <option value='morning'>Morning</option>

                      <option value='evening'>Evening</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4 mt-5'>
              <h5>Students Count</h5>
              <input
                type='text'
                placeholder='Enter number of Students'
                onChange={(e) =>
                  setSearch({
                    ...search,
                    num_student: e.target.value,
                  })
                }
              />
            </div>
            <div className='mt-5 mb-5'>
              <button onClick={handleSearchSubmit} type='submit'>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminRenderList />
      </Suspense>
    </>
  )
}

export default Admin
