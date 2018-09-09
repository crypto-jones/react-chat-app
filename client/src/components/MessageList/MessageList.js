import React, { Component } from 'react';
import './MessageList.css';

class MessagesList extends Component {
  render() {
    return (
      <div className="message-container">
        <ul className="users-list">
          {this.props.messages.map((message, index) => (
            <li key={index} className="user-posts">
              <div>
                <span className="sender-username">{message.senderId}</span>{' '}
              </div>
              <p className="message">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
