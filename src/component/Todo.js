import React from 'react';

function Todo(props) {
  return (
    <li className="todo">
      {props.todo}
      <input type="checkbox" />
    </li>
  )
}

export default Todo;
