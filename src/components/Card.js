import React from 'react';
import PropTypes from 'prop-types';

function Card (props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.title}
      </div>
      <div className="card-body">
        <div className="card-avatar"></div>
        <div className="card-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired
};

export default Card;