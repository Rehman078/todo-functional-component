import React from 'react'
import AppName from "./components/AppName"
import Todo from "./components/Todo"
import TodoItems from "./components/TodoItems"

function App() {
  const todoitemslist = [
    {
      name: "Fruit",
      duedate: "12/2/2024"
    },
    {
      name: "Cake",
      duedate: "1/5/2024"
    },
    {
      name: "Milk",
      duedate: "20/8/2024"
    }
  ];

  return (
    <div className="container">
      <AppName />
      <Todo />
      <TodoItems todoItems={todoitemslist} />
    </div>
  )
}

export default App;
