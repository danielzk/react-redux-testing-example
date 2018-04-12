import {OrderedMap} from 'immutable'

import types from '../actionTypes'

export const initialState = OrderedMap()

export default (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.set(action.payload.user.id, action.payload.user)

    case types.REMOVE_USER:
      return state.delete(action.payload.id)

    case types.SET_USERS:
      return action.payload.users

    default:
      return state
  }
}
