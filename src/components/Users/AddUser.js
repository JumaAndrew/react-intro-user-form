import { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const usernameInput = usernameRef.current.value;
    const ageInput = ageRef.current.value;

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid username and age',
      });
      return;
    }

    const user = {
      username: usernameInput,
      age: ageInput,
    };

    props.onUserAdd(user);

    usernameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={usernameRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" min="1" max="130" ref={ageRef}></input>
          <Button>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
