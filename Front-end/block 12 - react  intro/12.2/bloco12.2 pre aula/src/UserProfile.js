import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const {name, email, avatar} = this.props.profile
    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alt="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
