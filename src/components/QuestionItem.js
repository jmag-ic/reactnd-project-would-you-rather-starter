import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/QuestionItem.css';

function QuestionItem(props) {
  return (
    <Card
      title={`${props.author.name} asks:`}
      imageURL={props.author.avatarURL}>
      <h2>Would you rather</h2>
      <p>...{props.question.optionOne.text.substr(0, 15)}...</p>
      <div className="view-poll">
        <Link to={`questions/${props.question.id}`}>View Poll</Link>
      </div>
    </Card>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default connect(({ users }, { question }) => ({
  author: users[question.author]
}))(QuestionItem);