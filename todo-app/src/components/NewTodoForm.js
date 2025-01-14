import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTodo({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter a new task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
