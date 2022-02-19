import { Fragment, useState, useEffect } from 'react';
import Input from './components/Form/Input';
import ToDo from './components/ToDo/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [selection, setSelection] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    console.log('Re Render');
    filterHandler();
  }, [todos, selection]);

  const filterHandler = () => {
    switch (selection) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed)); // We filter out the ones that are completed
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed)); // We filter out the ones that are completed
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const handleTodos = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random() * 10,
        todo: newTodo,
        completed: false,
      },
    ]);
  };

  const printToDos = (todos) => {
    return (
      <ul>
        {todos.map((item) => {
          return (
            <ToDo
              key={item.id}
              todo={item}
              todos={todos}
              setTodos={setTodos}
              selection={selection}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      <Input handleTodos={handleTodos} setSelection={setSelection} />
      {printToDos(filteredTodos)}
    </Fragment>
  );
}

export default App;
