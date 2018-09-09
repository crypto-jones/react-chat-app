import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import moment from 'moment';
import Linkify from 'react-linkify';
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
                  {message.senderId}
                  <span className="time">
                    {moment(message.createdAt).format('MMM D, hh:mm a ')}
                  </span>
                </span>{' '}
              </div>
              <Linkify
                properties={{
                  target: '_blank',
                  style: { color: 'blue', fontWeight: 'bold' }
                }}
                className="message"
              >
                {message.text}
              </Linkify>{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;
