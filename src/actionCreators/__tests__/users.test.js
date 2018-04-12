import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {createUser, deleteUser, loadUsers} from '../'
import {urls} from '../../settings'
import {StoreFactory, UserFactory} from '../../../factories'
import {getSnapshotRequest} from '../../../jest/utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Users actionCreators', () => {
  let axiosMock = new MockAdapter(axios)

  beforeEach(() => {
    axiosMock.reset()
  })

  it('createUser should create the user and create ADD_USER action', async () => {
    const user = UserFactory.build()
    axiosMock.onPost(urls.userList()).reply(201, user)
    const store = mockStore(StoreFactory.build())
    store.dispatch(createUser(user.username, user.firstName, user.lastName))
      .then((response) => {
        expect(store.getActions()).toMatchSnapshot('dispatched actions')
        expect(getSnapshotRequest(response)).toMatchSnapshot('request data')
      })
  })

  it('deleteUser should delete the user and create REMOVE_USER action', async () => {
    axiosMock.onDelete(urls.userDetail(1)).reply(204)
    const store = mockStore(StoreFactory.build())
    store.dispatch(deleteUser(1))
      .then((response) => {
        expect(store.getActions()).toMatchSnapshot('dispatched actions')
        expect(getSnapshotRequest(response)).toMatchSnapshot('request data')
      })
  })

  it('loadUsers should load users and create SET_USERS action', async () => {
    axiosMock.onGet(urls.userList()).reply(200, UserFactory.buildList(2))
    const store = mockStore(StoreFactory.build())
    store.dispatch(loadUsers())
      .then((response) => {
        expect(store.getActions()).toMatchSnapshot('dispatched actions')
        expect(getSnapshotRequest(response)).toMatchSnapshot('request data')
      })
  })
})
