import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import PropTypes from 'prop-types';
import Question from './Question';

function QuestionPage(props) {
  const { questions, users, authedUser } = props;
  const { id } = useParams();
  const answered = !!users[authedUser].answers[id];

  return (
    !questions[id]
    ? <Navigate to="/page-not-found" />
    : (
        answered
        ? <Question question={questions[id]}/>
        : <div>Result</div>
      )
  );
}

QuestionPage.propTypes = {
  questions: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired
};

export default connect(({ questions, users, authedUser }) => ({
  questions,
  users,
  authedUser
}))(QuestionPage);