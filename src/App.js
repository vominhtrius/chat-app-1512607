import React, { Component } from 'react';
import Login from './components/Login';
import ContainerApp from './components/chat/ContainerApp';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerApp></ContainerApp>
      </div>
    );
  }
}

export default App;
