import React, { useEffect } from "react";
import TodoCard from "./components/TodoCard";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useAction";
import { UpdateTodosAction } from "./types/actionTypes";
import { Todo } from "./models/todo";
import AddTodoCard from "./components/AddTodoCard";

const App: React.FC = (): JSX.Element => {
  const { fetchTodos } = useActions();
  const todos: Todo[] = useSelector(
    (state: UpdateTodosAction) => state.payload
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <AddTodoCard />
      <div className="todo-container">
        {todos?.length ? (
          todos.map(todo => <TodoCard {...todo} />)
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </div>
  );
};

export default App;
