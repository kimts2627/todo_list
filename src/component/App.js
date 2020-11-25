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
      allList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.listPush = this.listPush.bind(this);
    this.PostToDo = this.PostToDo.bind(this);
    this.turnOnDarkMode = this.turnOnDarkMode.bind(this);
  }

  turnOnDarkMode() {
    this.setState({isDarkOn: !this.state.isDarkOn});
  }

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
      <div className={this.state.isDarkOn ? "App-dark" : "App"}>
        <Title isDarkOn={this.state.isDarkOn}/>
        <div className={this.state.isDarkOn ? "Catalina-dark" : "Catalina"}>
          <Tap
          turnOnDarkMode={this.turnOnDarkMode}
          isDarkOn={this.state.isDarkOn}
          />
        </div>
        <Todolist
        handleChange={this.handleChange}
        PostToDo={this.PostToDo}
        texting={this.state.texting}
        allList={this.state.allList}
        isDarkOn={this.state.isDarkOn}
        />
      </div>
    );
  }
}

export default App;
