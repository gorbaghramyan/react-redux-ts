import React from "react";
import { Todo } from "../models/todo";
import "./TodoCard.css";

const TodoCard: React.FC<Todo> = (todo: Todo): JSX.Element => {
  return (
    <div className="todo-card">
      <input type="checkbox" defaultChecked={todo.checked} />
      <h1>{todo.title}</h1>
      <span>
        <button>X</button>
        <button>Edit</button>
      </span>
    </div>
  );
};

export default TodoCard;
