import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import './App.css';

class App extends Component {
  state = {
    currentUsername: ''
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
          currentUsername: username
        });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <UsernameForm onSubmit={this.onUsernameSubmitted} />
      </div>
    );
  }
}

export default App;
