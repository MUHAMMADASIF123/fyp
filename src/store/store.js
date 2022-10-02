import createStore from 'zustand'
// import { devtools, persist } from 'zustand/middleware';
import axios from 'axios'
import cogoToast from 'cogo-toast'

// local storage
const token = localStorage.getItem('token')
// let user = localStorage.getItem('user')

// axios.defaults.headers.common['Auth'] = token

// add to local storage
const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

// removeUserFromLocalStorage
const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const baseURL = 'http://localhost:5000'
// axios.defaults.headers.common['Auth'] = token

// store
let store = (set) => ({
  //   user: user ? JSON.parse(user) : null,
  token: token,
  students: [],
  admins: [],
  rentings: [],
  form: {},
  forms: [],
  //   pendingUsers: [],
  //   filteredUsers: [],
  //   showSidebar: false,
  //   equipment: [],
  //   showSelect: true,
  //   hideSelect: false,
  //   queries: [],
  //   biddingItems: [],
  //   query: {},
  //   properties: [],
  //   propertiesAdded: false,
  adminLogin: async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/admin/login`,
        data
      )
      console.log(response)
      const { user, token } = response.data
      //   user.password = null

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
      //   const { user, token } = response.data
      //   user.password = null

      //   addUserToLocalStorage({ token })

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
      cogoToast.error(
        `${error.response.data.message}`, //in education block
        {
          position: 'top-right',
        }
      )
    }
  },
  // get all terndor items
  //   getTendorItems: async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/tender/listAllTenders`
  //       )

  //       return data.tenders
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   },

  //   // get all bidding items
  //   getAllItems: async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/bid/listAll`
  //       )

  //       return data.bids
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return
  //     }
  //   },

  //   // add item to tender
  //   addItemToTender: async (item) => {
  //     try {
  //       const { data } = await axios.post(
  //         `${baseURL}/api/tender/createTender`,
  //         item
  //       )

  //       return data
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return
  //     }
  //   },

  //   // add item
  //   addItem: async (data) => {
  //     try {
  //       const response = await axios.post(
  //         `${baseURL}/api/bid/createBid`,
  //         data
  //       )

  //       if (response.data) {
  //         // cogoToast.success('Item Added Successfully')
  //       }
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // get single tender
  //   getSingleTender: async ({ id }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/tender/listOne/${id}`
  //       )
  //       // console.log(response.data.tender);
  //       return data.tender
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // get single bid
  //   getSingleBid: async ({ id }) => {
  //     try {
  //       const response = await axios.get(
  //         `${baseURL}/api/bid/listOne/${id}`
  //       )
  //       return response.data.bid
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // close tender
  //   closeTender: async ({ id }) => {
  //     try {
  //       await axios.put(`${baseURL}/api/tender/closeTender/${id}`)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   closeBid: async ({ id }) => {
  //     try {
  //       await axios.put(`${baseURL}/api/bid/closeBid/${id}`)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // place a tender
  //   placeTender: async ({ id, data }) => {
  //     try {
  //       await axios.post(
  //         `${baseURL}/api/tender/addBid/${id}`,
  //         data
  //       )
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // place a bid
  //   placeBid: async ({ id, data }) => {
  //     try {
  //       await axios.post(`${baseURL}/api/bid/addBid/${id}`, data)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // fetch query details
  //   fetchQuery: async ({ id }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/query/singleQuery/${id}`
  //       )
  //       console.log(data)
  //       return data.query
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // get comments
  //   getComments: async ({ id }) => {
  //     try {
  //       const response = await axios.get(
  //         `${baseURL}/api/query/getComments/${id}`
  //       )
  //       console.log(response.data)
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   fetchUser: async ({ id2 }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/auth/getUser/${id2}`
  //       )
  //       console.log(data)
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return
  //     }
  //   },

  //   // send email
  //   sendEmail: async ({ data }) => {
  //     try {
  //       const response = await axios.post(
  //         `${baseURL}/api/email/sendEmail`,
  //         data
  //       )
  //       if (response.data) {
  //         return true
  //       }
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // set false
  //   setPropertiesAdded: () => {
  //     set((state) => ({ ...state, propertiesAdded: false }))
  //   },

  //   // set properties
  //   setProperties: ({ data }) => {
  //     set((state) => ({
  //       ...state,
  //       properties: data,
  //       propertiesAdded: true,
  //     }))
  //   },

  //   // set query
  //   setQuery: ({ data }) => {
  //     set((state) => ({
  //       ...state,
  //       query: data,
  //     }))
  //   },

  //   // accept query
  //   acceptQuery: async ({
  //     _id,
  //     comment,
  //     userName,
  //     userRole,
  //     dataTechincal,
  //   }) => {
  //     const { data } = await axios.patch(
  //       `${baseURL}/api/query/acceptQuery/${_id}`,
  //       {
  //         comment,
  //         userName,
  //         userRole,
  //         dataTechincal,
  //       }
  //     )
  //     return data
  //   },
  //   // reject query
  //   rejectQuery: async ({ _id, comment, userName, userRole }) => {
  //     const { data } = await axios.post(
  //       `${baseURL}/api/query/rejectQuery/${_id}`,
  //       {
  //         comment,
  //         userName,
  //         userRole,
  //       }
  //     )
  //     return data
  //   },

  //   // get hightest bidder
  //   getHighestBidder: async (id) => {
  //     const { data } = await axios.get(
  //       `${baseURL}/api/bid/getHighestBidder/${id}`
  //     )
  //     return data.user[0]
  //   },

  //   // get hightest tender bidder
  //   getHighestTenderBidder: async (id) => {
  //     const { data } = await axios.get(
  //       `${baseURL}/api/tender/getHighestBidder/${id}`
  //     )
  //     console.log(data)
  //     return data.user[0]
  //   },

  //   // get received queries
  //   getReceivedQueries: async ({ _id }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/query/getReceivedQueries/${_id}`
  //       )
  //       return data.queries
  //     } catch (error) {
  //       return
  //     }
  //   },

  //   // get all queries
  //   getAllQueries: async ({ id }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/query/getAllQueries`
  //       )
  //       //   cogoToast.success('Queries Fetched Successfully')
  //       return data.queries
  //     } catch (error) {
  //       console.log(error)
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   getUser: async ({ _id }) => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/auth/getCurrentUser/${_id}`
  //       )
  //       return data.user

  //       // set((state) => ({ ...state, user: currentUser }));
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   // add query
  //   addQuery: async ({ id, data }) => {
  //     // const { id } = data;
  //     const details = data

  //     try {
  //       const { data } = await axios.post(
  //         `${baseURL}/api/query/addQuery/${id}`,
  //         details
  //       )
  //       console.log(data)
  //       //   cogoToast.success('Query added Successfully')
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // add lab equipment
  //   addLabEquipment: async ({ item }) => {},

  //   // add new equipment
  //   addEquipment: async ({ item }) => {
  //     set((state) => ({
  //       ...state,
  //       equipment: [...state.equipment, item],
  //     }))
  //     // cogoToast.success(`Item Added Successfully`)
  //   },

  //   // toggle sidebar
  //   toggleSidebar: () => {
  //     set((state) => ({
  //       ...state,
  //       showSidebar: !state.showSidebar,
  //     }))
  //   },

  //   // login user
  //   login: async ({ data }) => {
  //     try {
  //       const response = await axios.post(
  //         `${baseURL}/api/auth/login`,
  //         data
  //       )

  //       const { user, token } = response.data
  //       user.password = null

  //       addUserToLocalStorage({ user, token })

  //       set((state) => ({ ...state, user: user, token: token }))

  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // check password
  //   checkPassword: async ({ password }) => {
  //     console.log('current user', user)
  //     let { _id: id } = JSON.parse(user)

  //     try {
  //       const response = await axios.post(
  //         `${baseURL}/api/auth/checkPassword/${id}`,
  //         {
  //           password,
  //         }
  //       )

  //       //   cogoToast.success(response.data.msg)
  //       return true
  //     } catch (error) {
  //       cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // approve user
  //   approveUser: async ({ _id }) => {
  //     try {
  //       await axios.post(`${baseURL}/api/auth/acceptUser/${_id}`)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // reject user
  //   rejectUser: async ({ _id }) => {
  //     try {
  //       await axios.post(`${baseURL}/api/auth/rejectUser/${_id}`)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // update profile
  //   updateProfile: async (currentValues) => {
  //     let { _id: id } = JSON.parse(user)

  //     try {
  //       const { data } = await axios.post(
  //         `${baseURL}/api/auth/updateProfile/${id}`,
  //         {
  //           currentValues,
  //         }
  //       )
  //       console.log(data)

  //       const { user, token } = data

  //       addUserToLocalStorage({ user, token })
  //       set((state) => ({ ...state, user: user, token: token }))

  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // add user
  //   addUser: async ({ data }) => {
  //     try {
  //       const response = await axios.post(
  //         `${baseURL}/api/auth/addUser`,
  //         data
  //       )

  //       const { user } = response.data
  //       //   cogoToast.success(`${user.name} Added Successfully`)
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   // sign up
  //   signUp: async ({ data }) => {
  //     try {
  //       console.log(data)
  //       await axios.post(`${baseURL}/api/auth/register`, data)
  //       return true
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //       return false
  //     }
  //   },

  //   // get all users
  //   getAllUsers: async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/auth/users`
  //       )
  //       set((state) => ({
  //         ...state,
  //         users: data.users,
  //         filteredUsers: data.users,
  //       }))
  //       //   cogoToast.success('Users Fetched Successfully')
  //     } catch (error) {
  //       console.log(error)
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   // get pending users
  //   getPendingUsers: async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${baseURL}/api/auth/pendingUsers`
  //       )
  //       //   cogoToast.success('Users Fetched Successfully')
  //       return data.pendingUsers
  //     } catch (error) {
  //       console.log(error)
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   // log out user
  //   logOutUser: () => {
  //     removeUserFromLocalStorage()
  //     set((state) => ({
  //       ...state,
  //       user: null,
  //       token: null,
  //     }))

  //     axios.defaults.headers.common['Auth'] = ''
  //   },

  //   // filter users
  //   filterUser: (input, searchLength) => {
  //     if (searchLength >= 0) {
  //       set((state) => ({
  //         ...state,
  //         filteredUsers: input,
  //       }))
  //     } else if (searchLength < 1) {
  //       set((state) => ({
  //         ...state,
  //         filteredUsers: state.users,
  //       }))
  //     }
  //   },

  //   // edit user
  //   editUser: async ({ data }) => {
  //     const { _id: id } = data
  //     try {
  //       await axios.patch(
  //         `${baseURL}/api/auth/updateUser/${id}`,
  //         data
  //       )

  //       // if the same user is editing himself(updating profile)
  //       // addUserToLocalStorage({ user, token });
  //       // set((state) => ({
  //       //   ...state,
  //       //   user: user,
  //       // }));

  //       //   cogoToast.success('User Updated Successfully')
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },

  //   // delete user
  //   deleteUser: async (data) => {
  //     let { _id: id } = data

  //     try {
  //       const response = await axios.delete(
  //         `${baseURL}/api/auth/deleteUser/${id}`,
  //         data
  //       )

  //       console.log(response.data)

  //       //   cogoToast.success('User Deleted Successfully')
  //       // window.location.reload();
  //     } catch (error) {
  //       //   cogoToast.error(error.response.data.msg)
  //     }
  //   },
})

const useStore = createStore(store)

export default useStore
