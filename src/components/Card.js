import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

function Card (props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.title}
      </div>
      <div className="card-body">
        <div className="card-avatar">
          <img src={props.imageURL} alt={props.title} className="avatar"/>
        </div>
        <div className="card-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
};

export default Card;