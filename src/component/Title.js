import App from './App';
import React from 'react';



function Title(props) {
  return (
    <h1 className={props.isDarkOn ? 'title-dark' : 'title'}>Todo List</h1>
  );
}








export default Title;
