import { useState } from "react";

function AddTodo({ handleADD }) {
  const [text, setText] = useState("");

  const liveText = (e) => {
    setText(e.target.value);
  };
  //amit
  return (
    <div>
      <input value={text} onChange={liveText} type="text" placeholder="Name" />

      <button onClick={() => handleADD(text)}>ADD TODO</button>
    </div>
  );
}

export default AddTodo;
