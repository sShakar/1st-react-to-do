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
  };

  const printToDos = (todos) => {
    return (
      <ul>
        {todos.map((item) => {
          return <ToDo key={item.id} todo={item.todo} />;
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      <Input handleTodos={handleTodos} />
      {printToDos(todos)}
    </Fragment>
  );
}

export default App;
