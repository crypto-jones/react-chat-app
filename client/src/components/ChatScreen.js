import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import INSTANCE_LOCATER from '../credentials';

class ChatScreen extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: INSTANCE_LOCATER,
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:5000/authenticate'
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default ChatScreen;
