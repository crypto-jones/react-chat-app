import React, { Component } from 'react';
import './WhosOnlineList.css';

class WhosOnlineList extends Component {
  renderUsers() {
    return (
      <ul>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.currentUser.id) {
            return (
              <WhosOnlineListItem key={index} presenceState="online">
                {user.name} (You)
              </WhosOnlineListItem>
            );
          }
          return (
            <WhosOnlineListItem key={index} presenceState={user.presence.state}>
              {user.name}
            </WhosOnlineListItem>
          );
        })}
      </ul>
    );
  }

  render() {
    if (this.props.users) {
      return this.renderUsers();
    } else {
      return <p>Loading...</p>;
    }
  }
}

class WhosOnlineListItem extends Component {
  render() {
    const styles = {};
    return (
      <li className="online-list">
        <div
          className="status-indicator"
          style={{
            backgroundColor:
              this.props.presenceState === 'online' ? '#FEBD29' : '#778899'
          }}
        />
        {this.props.children}
      </li>
    );
  }
}

export default WhosOnlineList;
