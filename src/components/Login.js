import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/authedUser';
import '../styles/Login.css';
import logo from '../images/logo.png';

class Login extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired
  };
  
  state = {
    selectedUser: ''
  };

  onSelectUser = event => {
    this.setState({
      selectedUser: event.target.id
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(handleLogin(this.state.selectedUser));
  };

  render() {
    const users = Object.values(this.props.users);
    const { selectedUser } = this.state;
    return (
      <div className="login">
          <h3>Welcome to Would You Rather App!</h3>
          <span>Please sign in to continue</span>
          <img className="logo" src={logo} />
          <ul className="login-selector">
              {users && users.map(user => (
                <li
                  key={user.id}
                  id={user.id}
                  onClick={this.onSelectUser}
                  className={`login-item ${selectedUser === user.id ? 'selected': ''}`}>
                  <img src={user.avatarURL} alt={user.name} className="avatar"/>
                  <span>{user.name}</span>
                </li>
              ))}
          </ul>
          <button disabled={!this.state.selectedUser} onClick={this.onSubmit}>Sign in</button>
      </div>
    );
  }
}

export default connect(({ users }) => ({
  users
}))(Login);