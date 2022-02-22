import { Fragment, useState, useEffect } from 'react';
import Input from './components/Form/Input';
import ToDo from './components/ToDo/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [selection, setSelection] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  const printToDos = (todos, filteredTodos) => {
    return (
      <ul>
        {filteredTodos.map((item) => {
          return (
            <ToDo key={item.id} todo={item} todos={todos} setTodos={setTodos} />
          );
        })}
      </ul>
    );
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    // filterHandler Function
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
    filterHandler();

    // saveLocalTodos Function
    // Saving our data to local storage so it doesn't reset on refresh
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, selection]);

  return (
    <Fragment>
      <Input handleTodos={handleTodos} setSelection={setSelection} />
      {printToDos(todos, filteredTodos)}
    </Fragment>
  );
}

export default App;
