// arquivo StrictAccess.js
import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = (props) => {
  return (
    <div>
      {props.user === 'Alex' && props.pw ==='1234'? (
        <p> Welcome {props.user}!</p>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default StrictAccess;
