import React from 'react'
import {OrderedMap} from 'immutable'
import {shallow} from 'enzyme'

import {UserListFactory} from '../../../../../factories'
import UserList from '../'

describe('UserList component', () => {
  it('should render list of users', () => {
    const props = {users: UserListFactory(2)}
    const wrapper = shallow(<UserList {...props}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should display a no-users message if no users', () => {
    const props = {users: OrderedMap()}
    const wrapper = shallow(<UserList {...props}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
