import createStore from 'zustand'

import axios from 'axios'
import cogoToast from 'cogo-toast'

const token = localStorage.getItem('token')

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const baseURL = 'http://localhost:5000/api/'

let store = (set) => ({
  token: token,
  students: [],
  admins: [],
  rentings: [],
  form: {},
  forms: [],
  adminLogin: async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}admin/login`,
        data
      )
      console.log(response)
      const { user, token } = response.data
      //

      addUserToLocalStorage({ token })

      set((state) => ({ ...state, token: token }))

      return true
    } catch (error) {
      cogoToast.error(error.response.data.message, {
        position: 'top-right',
      })
      return false
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
      console.log(data)
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
        error?.response?.data?.message ||
          'Something Went Wrong. Please Check You Connection',
        {
          position: 'top-right',
        }
      )
    }
  },

  adminFetchApplicationById: async (id) => {
    try {
      const response = await axios.get(
        `${baseURL}admin/fetch/application/${id}`
      )
      cogoToast.success(response?.data?.message, {
        position: 'top-right',
      })
      set((state) => ({
        ...state,
        form: response.data.application,
      }))
    } catch (error) {
      console.log(error)
    }
  },
})

const useStore = createStore(store)

export default useStore
