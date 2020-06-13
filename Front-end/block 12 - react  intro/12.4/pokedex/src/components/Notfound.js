import React from 'react';
import { Redirect } from 'react-router-dom';
import { FlexColumn } from '../styles/styles';
import Image from './Image';

class NotFound extends React.Component {
  render() {
    return (
      <FlexColumn margin="auto">
        <h1>#404 - Page Not Found</h1>
        <Image
          src="https://media3.giphy.com/media/i3fmueJZjIx8s/200.webp?cid=ecf05e475b45fa8243371c73c5a2cdc596d0f95148344260&rid=200.webp"
          alt="sad-pikachu"
        />
        <Redirect from="*" to="/404" />
      </FlexColumn>
    );
  }
}

export default NotFound;
