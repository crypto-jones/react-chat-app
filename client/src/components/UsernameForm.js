import React, { Component } from 'react';

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
    const styles = {
      loginContainer: {
        height: '200px',
        marginTop: 100,
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        borderRadius: 20,
        background: '#FFFFFF',
        boxShadow: '0 1px 0 rgba(0,0,0,.25)'
      }
    };

    return (
      <div>
        <div style={styles.loginContainer}>
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your Username"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
