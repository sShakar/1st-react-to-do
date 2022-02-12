import { useState } from 'react';
import Card from '../UI/Card/Card';

const ToDo = (props) => {
  return (
    <Card>
      <li className="z-10" id={props.id}>
        {props.todo}
      </li>
      {/* {console.log(`${props.todo} Item`)} */}
    </Card>
  );
};

export default ToDo;
