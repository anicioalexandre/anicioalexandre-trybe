import React from 'react';
import UserProfile from './UserProfile';

class Users extends React.Component {
  render() {
    const { userProps } = this.props;
    return (
      <div>
        {userProps.map((user) => (
          <UserProfile key={user.name} profile={user} />
        ))}
      </div>
    );
  }
}

export default Users;
