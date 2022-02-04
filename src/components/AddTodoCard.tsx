import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Todo } from "../models/todo";
import ActionCreators from "../store/action-creators";

const AddTodoCard: React.FC = (): JSX.Element => {
  const todos = useSelector((state: { payload: Todo[] }) => state.payload);
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(ActionCreators, dispatch);

  const [title, setTitle] = useState("");

  const addHandler = () => {
    if (title) {
      addTodo(new Todo(title));
    } else {
      alert("Title is required");
    }
  };

  return (
    <div className="todo-add">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default AddTodoCard;
