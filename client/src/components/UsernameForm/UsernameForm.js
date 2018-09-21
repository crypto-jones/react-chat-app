import React, { Component } from 'react';
import './UsernameForm.css';

class UsernameForm extends Component {
  state = {
    username: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  onChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="login-container">
          <h2>Enter a username</h2>
          <form onSubmit={this.onSubmit} className="user-form">
            <input
              className="username-input"
              type="text"
              placeholder="Your Username"
              onChange={this.onChange}
            />
            <button className="btn" disabled={!this.state.username}>
              Let's Chat!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
