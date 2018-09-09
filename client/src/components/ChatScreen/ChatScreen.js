import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import TypingIndicator from '../TypingIndicator/TypingIndicator';
import WhosOnlineList from '../WhosOnlineList/WhosOnlineList';
import { INSTANCE_LOCATER, ROOM_ID } from '../../credentials';
import './ChatScreen.css';

class ChatScreen extends Component {
  state = {
    currentUser: {},
    currentRoom: {},
    messages: [],
    usersWhoAreTyping: []
  };

  sendTypingEvent = () => {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error('error', error));
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    });
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
        return currentUser.subscribeToRoom({
          roomId: ROOM_ID,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            },
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
              });
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                )
              });
            },
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate()
          }
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => console.error('error', error));
  };

  render() {
    return (
      <div className="chat-screen-container">
        <div className="chat-container">
          <aside className="online-list-container">
            <WhosOnlineList
              currentUser={this.state.currentUser}
              users={this.state.currentRoom.users}
            />
          </aside>
          <section className="chat-list-container">
            <MessageList messages={this.state.messages} />
            <SendMessageForm
              onSubmit={this.sendMessage}
              onChange={this.sendTypingEvent}
            />
            <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
          </section>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
