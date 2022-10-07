import React from 'react';
import User from './User';

//destructuring?
const Users = ({ userList }) => {
  // console.log(props);

  return (
    <div>
      <h3>List of Users</h3>
      <ul>
        {/* {userList.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })} */}
        {userList.map((user) => {
          return (
            <li key={user.id}>
              <User props={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
