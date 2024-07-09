import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("please enter a title");
    } else {
      const newTodo = {
        title: title,
        completed: false,
        id: uuid(),
      };
      addTodo(newTodo);
      setTitle("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
