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

const baseURL = 'http://localhost:5000'

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
        `${baseURL}/api/admin/login`,
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
        `${baseURL}/api/admin/add`,
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
        `${baseURL}/api/student/submit/application`,
        data
      )
      cogoToast.success(response.data.message)
    } catch (error) {
      cogoToast.error(`${error.response.data.message}`, {
        position: 'top-right',
      })
    }
  },
  adminQueryFetchApplications: async (data = {}) => {
    try {
      const response = await axios.get(
        `${baseURL}/api/admin/fetch/query/applications`,
        { params: data }
      )
      cogoToast.success(response?.data?.message, {
        position: 'top-right',
      })
      return response
    } catch (error) {
      cogoToast.error(`${error?.response?.data?.message}`, {
        position: 'top-right',
      })
    }
  },
  adminFetchApplications: async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/admin/fetch/applications`
      )
      cogoToast.success(response?.data?.message, {
        position: 'top-right',
      })
      return response
    } catch (error) {
      cogoToast.error(`${error?.response?.data?.message}`, {
        position: 'top-right',
      })
    }
  },
})

const useStore = createStore(store)

export default useStore
