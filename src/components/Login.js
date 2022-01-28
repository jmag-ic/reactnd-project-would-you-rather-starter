import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/authedUser';

class Login extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired
  };
  
  state = {
    selectedUser: ''
  };

  onSelectUser = event => {
    this.setState({
      selectedUser: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(handleLogin(this.state.selectedUser));
  };

  render() {
    const users = Object.values(this.props.users);
    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <select
            value={this.state.selectedUser}
            onChange={this.onSelectUser}>
              <option value="">Select a user...</option>
              {users && users.map(user => (
                <option
                  key={user.id}
                  value={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
          <button disabled={!this.state.selectedUser}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(({ users }) => ({
  users
}))(Login);