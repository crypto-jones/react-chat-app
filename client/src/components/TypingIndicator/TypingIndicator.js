import React, { Component } from 'react';
import './TypingIndicator.css';

class TypingIndicator extends Component {
  render() {
    if (this.props.usersWhoAreTyping.length > 0) {
      return (
        <div className="typing-indicator">
          {`${this.props.usersWhoAreTyping
            .slice(0, 2)
            .join(' and ')} is typing`}
        </div>
      );
    }
    return <div />;
  }
}

export default TypingIndicator;
