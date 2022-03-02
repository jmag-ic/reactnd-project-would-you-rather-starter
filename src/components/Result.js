import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Result.css";

function Result(props) {
  const percent = (props.votes / props.total * 100);
  return (
    <div className={props.voted ? 'voted result' : 'result'}>
      {props.voted && <div className="your-vote">
        <span>Your</span>
        <span>vote</span>
      </div>}
      <p className="option">{`Would you rather ${props.option}?`}</p>
      <div className="percentage">
        <div className="total"></div>
        <div
          className={percent > 0 ? 'value' : 'value empty'}
          style={{ width: `${percent}%` }}>  
        </div>
        <span className="label">{`${percent}%`}</span>
      </div>
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