import React, { Component } from 'react';
import './SendMessageForm.css';

class SendMessageForm extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render() {
    return (
      <div className="send-form-container">
        <div>
          <form onSubmit={this.onSubmit} className="send-form">
            <input
              type="text"
              placeholder="Type a message here then hit ENTER"
              onChange={this.onChange}
              value={this.state.text}
              className="send-input"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SendMessageForm;
