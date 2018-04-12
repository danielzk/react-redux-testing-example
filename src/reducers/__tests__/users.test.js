import reducer from '../users'
import types from '../../actionTypes'
import {UserFactory, UserListFactory} from '../../../factories'

describe('Users reducer', () => {
  it('should handle initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toMatchSnapshot()
  })

  it('ADD_USER should add user', () => {
    const user = UserFactory.build()
    const state = reducer(undefined, {type: types.ADD_USER, payload: {user}})
    expect(state).toMatchSnapshot()
  })

  it('REMOVE_USER should remove user', () => {
    const users = UserListFactory(2)
    const state = reducer(users, {type: types.REMOVE_USER, payload: {id: users.get(1).id}})
    expect(state).toMatchSnapshot()
  })

  it('SET_USERS should set users', () => {
    const users = UserListFactory(2)
    const state = reducer(undefined, {type: types.SET_USERS, payload: {users}})
    expect(state).toMatchSnapshot()
  })
})
