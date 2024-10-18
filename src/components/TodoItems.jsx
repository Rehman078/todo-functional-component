import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({ todoItems }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center pt-4">
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.duedate} />
      ))}
    </div>
  )
}

export default TodoItems;
