import React from 'react';
import Todo from './Todo.js';

class Todolist extends React.Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      
      <div className="List">
        <div className="input">
          <input type="text" onChange={this.props.handleChange}/>
          <button className="addList" onClick={() => this.props.PostToDo(this.props.texting)}>Post</button>
        </div>
        <ul>
          {this.props.allList.map(todo => 
          <Todo todo={todo}/>
          )}
        </ul>
      </div>
    );
  }
}

export default Todolist;