import React from 'react'

function TodoItem({ todoName, todoDate }) {
  return (
    <div className="d-flex align-items-center mb-2">
     <table className="table table-bordered mb-2">
      <tbody>
        <tr>
          <td className="align-middle">
            <h6 className="mb-0">{todoName}</h6>
          </td>
          <td className="align-middle">
            <h6 className="mb-0">{todoDate}</h6>
          </td>
          <td className="align-middle">
            <button type="button" className="btn btn-sm btn-primary me-2">Edit</button>
            <button type="button" className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default TodoItem;
