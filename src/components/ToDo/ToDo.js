import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const ToDo = ({ id, todo }) => {
  return (
    <Card>
      <div className="flex">
        <div className="flex items-center  w-3/4">
          <li className="text-white font-medium px-2 drop-shadow">{todo}</li>
        </div>
        <div className="flex items-center w-1/3">
          <Button>Done</Button>
          <Button>Remove</Button>
          {/* <button className="px-2 bg">Done</button>
          <button className="px-2">Remove</button> */}
        </div>
      </div>
    </Card>
  );
};

export default ToDo;
