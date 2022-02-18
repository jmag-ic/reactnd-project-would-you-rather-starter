import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
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
      <div className="nav-items">
        {props.items.map(item => (
          <NavLink
            key={item.route}
            to={item.route}
            className={({isActive}) => isActive ? 'active' : null} >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="nav-items">
        <div className="current-user">
          <img src={props.currentUser.avatarURL} alt="avatar" className="avatar"/>
          <span>{props.currentUser.name}</span>
        </div>
        <button
          className="nav-link"
          onClick={onLogout}>
            Logout
        </button>
      </div>
    </div>
  );
}

Nav.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(({ authedUser, users }) => ({
  currentUser: users[authedUser]
}))(Nav);