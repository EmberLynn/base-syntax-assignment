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

    const textStyle = {
      backgroundColor: 'grey',
      border: '2px solid black',
      alignItems: 'center'
    };

    return (
      <div className="App">
        <div style={textStyle}>
          <UserInput 
          changeName={this.nameChangeHandler} username={this.state.name}/>
        </div>
        <UserOutput username={this.state.name}/>
        <UserOutput username={this.state.name}/>
        <UserOutput username={this.state.name}/>
      </div>
    );
  }
  
}

export default App;
