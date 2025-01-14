import React from "react";

function Todo({ id, task, removeTodo }) {
  return (
    <li>
      {task}
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
}

export default Todo;
