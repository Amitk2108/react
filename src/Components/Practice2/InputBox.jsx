/* eslint-disable react/prop-types */
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todoitem from "./Todoitem";

const InputBox = () => {
  const [todo, setTodo] = useState([]);

  const handleADD = (text) => {
    const newTodo = {
      title: text,
      status: false,
      key: Math.random(),
    };

    setTodo([...todo, newTodo]);
  };

  // console.log(todo);

  return (
    <div>
      <div>
        {/* add function .....................*/}
        <AddTodo handleADD={handleADD} />
      </div>

      {/* display ............. ..................*/}
      <div>
        {todo.map((todoitem) => (
          <Todoitem
            key={todoitem.key}
            title={todoitem.title}
            status={todoitem.status}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBox;
