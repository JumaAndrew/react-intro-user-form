import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <li key={user.id}>
      {user.name} {user.age} years old
    </li>
  ));

  return (
    <Card className={classes.users}>
      <ul>{users}</ul>
    </Card>
  );
};

export default UserList;
