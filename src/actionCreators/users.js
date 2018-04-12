import axios from 'axios'
import {OrderedMap} from 'immutable'

import {urls} from '../settings'
import types from '../actionTypes'

export const createUser = (username, firstName, lastName) => (dispatch) => {
  return axios.post(urls.userList(), {username, firstName, lastName})
    .then((response) => {
      dispatch({type: types.ADD_USER, payload: {user: response.data}})
      return response
    })
}

export const deleteUser = (id) => (dispatch) => {
  return axios.delete(urls.userDetail(id))
    .then((response) => {
      dispatch({type: types.REMOVE_USER, payload: {id}})
      return response
    })
}

export const loadUsers = () => (dispatch) => {
  return axios.get(urls.userList())
    .then((response) => {
      const users = OrderedMap(response.data.map(item => [item.id, item]))
      dispatch({type: types.SET_USERS, payload: {users}})
      return response
    })
}
