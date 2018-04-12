import React from 'react'

export default class UserCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
    }
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onFirstNameChange = (event) => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = (event) => {
    this.setState({lastName: event.target.value})
  }

  onSubmit = (event) => {
    this.props.actions.createUser(
      this.state.username, this.state.firstName, this.state.lastName)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.onUsernameChange}
          placeholder="Username"
        />

        <input
          id="first-name"
          type="text"
          value={this.state.firstName}
          onChange={this.onFirstNameChange}
          placeholder="First name"
        />

        <input
          id="last-name"
          type="text"
          value={this.state.lastName}
          onChange={this.onLastNameChange}
          placeholder="Last name"
        />

        <button type="submit">Create</button>
      </form>
    )
  }
}
