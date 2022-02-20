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
        <div className="flex items-center  w-3/4 sm:w-1/2">
          <li
            className={`${
              todo.completed ? 'opacity-50 line-through' : 'text-white'
            } font-medium px-2 drop-shadow`}
          >
            {todo.todo}
          </li>
        </div>
        <div className="flex justify-end w-full">
          <Button onClick={doneHandler}>
            {!todo.completed ? 'Done' : 'Undone'}
          </Button>
          <Button onClick={removeHandler}>Remove</Button>
        </div>
      </div>
    </Card>
  );
};

export default ToDo;
