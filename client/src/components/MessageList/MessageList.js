import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import moment from 'moment';

import './MessageList.css';

class MessagesList extends Component {
  scrollToBottom = () => {
    const { messageList } = this.refs;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(messageList).scrollTop =
      maxScrollTop > 0 ? maxScrollTop : 0;
  };

  componentDidUpdate = () => {
    this.scrollToBottom();
  };

  render() {
    return (
      <div className="message-container" ref="messageList">
        <ul className="users-list">
          {this.props.messages.map((message, index) => (
            <li key={index} className="user-posts">
              <div>
                <span className="sender-username">
                  {message.senderId}{' '}
                  <span className="time">
                    {moment(message.createdAt).format('MMM D, hh:mm a ')}
                  </span>
                </span>{' '}
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
