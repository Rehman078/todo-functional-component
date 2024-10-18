import React from 'react'

function Todo() {
  return (
    <>
     <div className="row justify-content-center align-items-center">
          <div className="col-2">
          <input type="text" name="todo" placeholder="Add Todo" />
          </div>
          <div className="col-2 ms-2">
          <input type="date" />
          </div>
          <div className="col-1">
          <button className="btn btn-success">Add</button>
          </div>
        </div>
    </>
  )
}

export default Todo