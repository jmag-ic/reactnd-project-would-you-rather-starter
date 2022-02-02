import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './Card';
import Result from './Result';
import { optionsKeys } from './Question';

function QuestionResult(props) {
  const { question } = props;
  
  const total = optionsKeys.reduce(
    (sum, optionKey) => sum + question[optionKey].votes.length,
    0
  );
  return (
    <Card
      title={`${props.author.name} asks:`}
      imageURL={props.author.avatarURL}>
      <h2>Results:</h2>
      {optionsKeys.map(optionKey => (
        <Result
          option={question[optionKey].text}
          votes={question[optionKey].votes.length}
          total={total}
          voted={question[optionKey].votes.includes(props.author)} />
      ))}
    </Card>
  );
}

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default connect(({ users }, { question }) => ({
  author: users[question.author]
}))(QuestionResult);