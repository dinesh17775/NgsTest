import React from "react";
function Todo({ id, completed, title, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div className="cross-btn" onClick={() => removeTodo(id)}>
        {/* <ImCross /> */}
      </div>
    </div>
  );
}

export default Todo;
