import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleLogout } from '../actions/authedUser';
import '../styles/Nav.css';

function Nav(props) {
  
  const navigate = useNavigate();

  function onLogout(event) {
    navigate('/');
    event.preventDefault();
    props.dispatch(handleLogout());
  };

  return (
    <div className="nav">
      <ul className="nav-items">
        {props.items.map(item => (
          <li className="nav-item" key={item.route}>
            <Link to={item.route} className="nav-link">{item.label}</Link>
          </li>
        ))}
        <li className="nav-item-right">
          <button
            className="nav-link"
            onClick={onLogout}>
              Logout
          </button>
        </li>
        <li className="nav-item-right">
          <span>{props.currentUser.name}</span>
        </li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(({ authedUser, users }) => ({
  currentUser: users[authedUser]
}))(Nav);