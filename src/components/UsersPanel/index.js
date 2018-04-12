import React from 'react'

import UserCreateForm from './UserCreateForm'
import UserList from './UserList'

export default class UsersPanel extends React.Component {
  constructor(props) {
    super(props)
    this.props.actions.loadUsers()
  }

  render() {
    return (
      <div>
        <UserCreateForm {...this.props}/>
        <UserList {...this.props}/>
      </div>
    )
  }
}
