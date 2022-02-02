import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      {props.voted && <div>Your vote</div>}
      <p className="option">{`Would you rather ${props.option}?`}</p>
      <div className="precentage">{`${props.votes / props.total * 100}%`}</div>
      <p className="counter">{`${props.votes} out of ${props.total} votes`}</p>
    </div>
  );
}

Result.propTypes = {
  voted: PropTypes.bool.isRequired,
  option: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Result;