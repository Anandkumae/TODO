import React from "react";
import { TodoItem } from "../My components/TodoItem";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos list</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};

export default Todos;
