import React from 'react'
import {shallow} from 'enzyme'

import {UserFactory} from '../../../../../factories'
import UserItem from '../UserItem'

describe('UserItem component', () => {
  it('should render username, full name and delete button', () => {
    const user = UserFactory.build()
    const wrapper = shallow(<UserItem user={user}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call deleteUser when delete button is clicked', () => {
    const props = {
      user:  UserFactory.build(),
      actions: {
        deleteUser: jest.fn(),
      }
    }
    const wrapper = shallow(<UserItem {...props}/>)
    wrapper.find('button').simulate('click')
    expect(props.actions.deleteUser).toBeCalledWith(props.user.id)
    expect(props.actions.deleteUser).toHaveBeenCalledTimes(1)
  })
})
