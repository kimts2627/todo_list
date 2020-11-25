import React from 'react';

function Todo(props) {
  return (
    <li className={props.isDarkOn ? "todo-dark" : "todo"}>
      {props.todo}
      <input type="checkbox"/>
    </li>
  )
}

export default Todo;
