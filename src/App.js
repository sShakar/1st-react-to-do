import { Fragment, useState, useEffect } from 'react';
import Input from './components/Form/Input';
import ToDo from './components/ToDo/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (todos.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [todos]);

  const handleTodos = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random() * 10,
        todo: newTodo,
      },
    ]);
    console.log('The ToDo Array State:');
    console.log(todos);
  };

  const printToDos = (todos) => {
    return todos.map((item) => {
      return <ToDo id={item.id} todo={item.todo} />;
    });
  };

  return (
    <Fragment>
      <Input handleTodos={handleTodos} />
      <ul>{printToDos(todos)}</ul>
    </Fragment>
  );
}

export default App;
