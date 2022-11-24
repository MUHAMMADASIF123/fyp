import createStore from 'zustand'

import axios from 'axios'
import cogoToast from 'cogo-toast'

const token = localStorage.getItem('token-info')
console.log(token);

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token-info', token)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token-info')
}

const baseURL = 'http://localhost:5000/api/'

let store = (set) => ({
  token: token,
  students: [],
  admins: [],
  rentings: [],
  form: {},
  forms: [],
  adminLogin: async (loginData) => {
    try {
      console.log(loginData)
      const {data} = await axios.post(
        `${baseURL}admin/login`,
        loginData
      )
      
  

      addUserToLocalStorage( data.token )

      set((state) => ({ ...state, token: token }))

      cogoToast.success(data.message,{position:'top-right'})
    } catch (error) {
      console.log(error)
      cogoToast.error(error.response.data.message, {
        position: 'top-right',
      })
    }
  },

  adminRegister: async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}admin/add`,
        data
      )
      cogoToast.success(response.data.message)
      set((state) => ({ ...state, admins: token }))
    } catch (error) {
      console.log(error.response.data)
      cogoToast.error(error.response.data.message, {
        position: 'top-right',
      })
    }
  },

  studentSubmitForm: async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}student/submit/application`,
        data
      )
      cogoToast.success(response.data.message)
    } catch (error) {
      cogoToast.error(`${error.response.data.message}`, {
        position: 'top-right',
      })
    }
  },
  adminFetchQueryApplications: async (query) => {
    try {
      const { data } = await axios.get(
        `${baseURL}admin/fetch/query/applications`,
        { params: query }
      )

      cogoToast.success(data?.message, {
        position: 'top-right',
      })
      set((state) => ({
        ...state,
        forms: data.applications,
      }))
    } catch (error) {
      cogoToast.error(`${error?.response?.data?.message}`, {
        position: 'top-right',
      })
    }
  },

  adminFetchApplications: async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}admin/fetch/applications`
      )
      cogoToast.success(data?.message, {
        position: 'top-right',
      })
      set((state) => ({
        ...state,
        forms: data.applications,
      }))
    } catch (error) {
      cogoToast.error(
        error?.data?.message ||
          'Something Went Wrong. Please Check You Connection',
        {
          position: 'top-right',
        }
      )
    }
  },

  adminFetchApplicationById: async (id) => {
    try {
      const {data} = await axios.get(
        `${baseURL}admin/fetch/application/${id}`
      )
      cogoToast.success(data?.message, {
        position: 'top-right',
      })
      set((state) => ({
        ...state,
        form: data.application,
      }))
    } catch (error) {
      cogoToast.error(error?.data?.message, {
        position: 'top-right',
      })    }
  },
  adminSearchByCnic:async(cnic)=>{
    try {
      const {data} = await axios.get(
        `${baseURL}admin/fetch/cnic/application`,        { params: {cnic} }
      )
      cogoToast.success(data?.message, {
        position: 'top-right',
      })
      set((state) => ({
        ...state,
        forms: [data.application],
      }))
    } catch (error) {
      cogoToast.error(error?.response?.data?.message, {
        position: 'top-right',
      })    }
  }
})

const useStore = createStore(store)

export default useStore
