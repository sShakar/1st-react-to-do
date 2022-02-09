import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Input.module.css';

const Input = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form className={classes['input']} onSubmit={submitHandler}>
        <label htmlFor="to-do">Enter a To-Do</label>
        <input id="to-do" type="text" placeholder="Enter a To-Do" />
        <Button>Add To-Do</Button>
      </form>
    </Card>
  );
};

export default Input;
