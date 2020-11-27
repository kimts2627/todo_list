import React from 'react';
import Todo from './Todo.js';

class Todolist extends React.Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      
      <div className={this.props.isDarkOn ? "List-dark" : "List"}>
        <div className="input">
          <input type="text" onChange={this.props.handleChange} placeholder='내용을 입력해 주세요!'/>
          <button className="addList" onClick={() => this.props.PostToDo(this.props.texting)}>Post</button>
        </div>
        <ul>
          {this.props.allList.map(todo => 
          <Todo
          todo={todo}
          isDarkOn={this.props.isDarkOn}
          />
          )}
        </ul>
      </div>
    );
  }
}

export default Todolist;