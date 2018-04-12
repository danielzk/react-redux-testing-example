import React from 'react'

import UserItem from './UserItem'

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.count() > 0 &&
          <ul>
            {this.props.users.toArray().map(user =>
              <UserItem user={user} key={user.id} {...this.props}/>
            )}
          </ul>
        }

        {this.props.users.count() == 0 &&
          <span>No users</span>
        }
      </div>
    )
  }
}
