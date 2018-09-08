import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import UsernameForm from './components/UsernameForm';
import ChatScreen from './components/ChatScreen';
import './App.css';

class App extends Component {
  state = {
    currentUsername: '',
    currentScreen: 'WhatIsYourUsernameScreen'
  };

  onUsernameSubmitted = username => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'
        });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return (
        <div className="App">
          <UsernameForm className="App" onSubmit={this.onUsernameSubmitted} />
        </div>
      );
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return (
        <div className="App">
          <ChatScreen currentUsername={this.state.currentUsername} />
        </div>
      );
    }
  }
}

export default App;
