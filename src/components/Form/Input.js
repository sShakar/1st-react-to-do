import { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Input.module.css';

const Input = (props) => {
  const [newTodo, setNewTodo] = useState('');

  const onInputHandler = (e) => {
    setNewTodo(e.target.value.trim());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTodo !== undefined && newTodo !== '') {
      props.handleTodos(newTodo);
    }
    setNewTodo('');
  };

  const selectionHandler = (e) => {
    props.setSelection(e.target.value);
  };

  return (
    <Card>
      <form
        className={`${classes['input']} align-middle`}
        onSubmit={submitHandler}
      >
        <label htmlFor="to-do">Enter a To-Do</label>
        <div className={`${classes['inputs-div']} align-middle  w-full`}>
          <input
            className="mr-8 w-1/2"
            value={newTodo}
            id="to-do"
            type="text"
            placeholder="Enter a To-Do"
            onChange={onInputHandler}
          />
          <select
            onChange={selectionHandler}
            name="todos"
            id=""
            className="w-1/4"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <Button type="submit">Add To-Do</Button>
      </form>
    </Card>
  );
};

export default Input;
