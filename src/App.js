import React, { useState } from 'react';

import './App.css';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((previousUsers) => {
      return [
        ...previousUsers,
        { name: user.username, age: user.age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onUserAdd={addUserHandler} />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;
