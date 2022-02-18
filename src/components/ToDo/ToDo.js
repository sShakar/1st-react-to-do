import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const ToDo = ({ todo, todos, setTodos }) => {
  const removeHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const doneHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <Card>
      <div className={`flex`}>
        <div className="flex items-center  w-3/4">
          <li
            className={`${
              todo.completed ? 'text-red-600' : 'text-white'
            } font-medium px-2 drop-shadow`}
          >
            {todo.todo}
          </li>
        </div>
        <div className="flex items-center w-1/3">
          <Button onClick={doneHandler}>
            {!todo.completed ? 'Done' : 'Undone'}
          </Button>
          <Button onClick={removeHandler}>Remove</Button>
          {/* <button className="px-2 bg">Done</button>
          <button className="px-2">Remove</button> */}
        </div>
      </div>
    </Card>
  );
};

export default ToDo;
