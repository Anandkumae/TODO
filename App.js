import "./App.css";

import Header from "./My components/Header";
import Todos from "./My components/Todos";
import Footer from "./My components/Footer";
import React, { useState } from "react";
import AddTodo from "./My components/AddTodo";
function App() {
  const onDelete = (todo) => {
    console.log("i am on delete");

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "u need to go the market to complete this particular job",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "u need to go the mall to complete this particular job",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "u need to go the ghat to complete this particular job",
    },
  ]);
  return (
    <>
      <Header title="My todos list" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
export default App;
