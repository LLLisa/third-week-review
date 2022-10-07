import React from 'react';

//destructuring in an arg list is preferred
const User = ({ props }) => {
  // console.log(props);
  //pulling the data we want from the props
  const { name, email } = props;
  return (
    <ul>
      <li>name: {name}</li>
      <li>email: {email}</li>
    </ul>
  );
};

export default User;
