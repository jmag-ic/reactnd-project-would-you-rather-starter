import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleLogout } from '../actions/authedUser';
import '../styles/Nav.css';

class Nav extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  onLogout = (event) => {
    event.preventDefault();
    this.props.dispatch(handleLogout());
  };

  render() {
    return (
      <div className="nav">
        <ul className="nav-items">
          {this.props.items.map(item => (
            <li className="nav-item" key={item.route}>
              <Link to={item.route} className="nav-link">{item.label}</Link>
            </li>
          ))}
          <li className="nav-item-right">
            <button
              className="nav-link"
              onClick={this.onLogout}>
                Logout
            </button>
          </li>
          <li className="nav-item-right">
            <span>{this.props.currentUser.name}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(({ authedUser, users }) => ({
  currentUser: users[authedUser]
}))(Nav);