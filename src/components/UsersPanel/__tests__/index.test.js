import React from 'react'
import {shallow} from 'enzyme'

import UsersPanel from '../'

describe('UsersPanel component', () => {
  it('should render UserCreateForm and UserList, and call loadUsers', () => {
    const props = {
      actions: {
        loadUsers: jest.fn(),
      }
    }
    const wrapper = shallow(<UsersPanel {...props}/>)
    expect(wrapper).toMatchSnapshot()
    expect(props.actions.loadUsers).toHaveBeenCalledTimes(1)
  })
})
