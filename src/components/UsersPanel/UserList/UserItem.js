import React from 'react'

export default class UserItem extends React.Component {
  onDeleteClick = () => {
    this.props.actions.deleteUser(this.props.user.id)
  }

  render() {
    return (
      <li>
        <span>Username: {this.props.user.username}</span>
        <span>Full name: {this.props.user.firstName} {this.props.user.lastName}</span>
        <button onClick={this.onDeleteClick}>Delete</button>
      </li>
    )
  }
}
