import '../App.css';
import React from 'react';
import Title from './Title.js';
import Tap from './Tap.js';
import Todolist from './Todolist.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkOn: false,
      texting: '',
      allList: ['냠냠']
    }
    this.handleChange = this.handleChange.bind(this);
    this.listPush = this.listPush.bind(this);
    this.PostToDo = this.PostToDo.bind(this);
  }

  //turnOnDarkMode() {}

  handleChange(e) {
    let target = e.target.value;
    this.setState({texting: target});
  }

  PostToDo(val) {
    if(val.length !== 0) {
      this.listPush(val);
    }
    else {
      alert('내용을 입력해 주세요!')
    }
    
  }

  listPush(todo) {
    this.setState(prevState => {
      return {allList: [...prevState.allList, todo]}
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <div className="Catalina">
          <Tap />
        </div>
        <Todolist handleChange={this.handleChange} PostToDo={this.PostToDo} texting={this.state.texting} allList={this.state.allList}/>
      </div>
    );
  }
}

export default App;
