import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'Sherlock'
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render () {

    return (
      <div className="App">
        <UserInput changeName={this.nameChangeHandler} username={this.state.name}/>
        <UserOutput username={this.state.name}/>
        <UserOutput username={this.state.name}/>
        <UserOutput username={this.state.name}/>
      </div>
    );
  }
  
}

export default App;
