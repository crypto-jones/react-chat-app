import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm/UsernameForm';
import ChatScreen from './components/ChatScreen/ChatScreen';

class App extends Component {
  state = {
    currentUsername: '',
    currentScreen: 'WhatIsYourUsernameScreen'
  };

  onUsernameSubmitted = username => {
    console.log('clicked');
    if (username.length === 0) {
      alert('Please enter a username');
    } else {
      fetch('https://server-react-chat-app.herokuapp.com/users', {
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
    }
  };

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return (
        <div>
          <UsernameForm onSubmit={this.onUsernameSubmitted} />
        </div>
      );
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return (
        <div>
          <ChatScreen currentUsername={this.state.currentUsername} />
        </div>
      );
    }
  }
}

export default App;
