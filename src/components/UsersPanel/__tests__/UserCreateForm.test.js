import React from 'react'
import {shallow} from 'enzyme'

import UserCreateForm from '../UserCreateForm'

describe('UserCreateForm component', () => {
  it('should render field values', () => {
    const wrapper = shallow(<UserCreateForm/>)
    wrapper.setState({
      username: 'username',
      firstName: 'Daniel',
      lastName: 'Ramos',
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('should update username state when username input is changed', () => {
    let wrapper = shallow(<UserCreateForm/>)
    const event = {target: {value: 'usern'}}
    wrapper.find('#username').simulate('change', event)
    wrapper = wrapper.update()
    expect(wrapper.state('username')).toBe('usern')
  })

  it('should update firstName state when firstName input is changed', () => {
    let wrapper = shallow(<UserCreateForm/>)
    const event = {target: {value: 'Daniel'}}
    wrapper.find('#first-name').simulate('change', event)
    wrapper = wrapper.update()
    expect(wrapper.state('firstName')).toBe('Daniel')
  })

  it('should update lastName state when firstName input is changed', () => {
    let wrapper = shallow(<UserCreateForm/>)
    const event = {target: {value: 'Ramos'}}
    wrapper.find('#last-name').simulate('change', event)
    wrapper = wrapper.update()
    expect(wrapper.state('lastName')).toBe('Ramos')
  })

  it('should call createUser when form is submitted', () => {
    const props = {
      actions: {
        createUser: jest.fn(),
      }
    }
    const wrapper = shallow(<UserCreateForm {...props}/>)
    wrapper.setState({
      username: 'username',
      firstName: 'Daniel',
      lastName: 'Ramos',
    })

    const event = {preventDefault: jest.fn()}
    wrapper.find('form').simulate('submit', event)
    expect(props.actions.createUser).toHaveBeenCalledTimes(1)
    expect(props.actions.createUser).toBeCalledWith('username', 'Daniel', 'Ramos')
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  })
})
