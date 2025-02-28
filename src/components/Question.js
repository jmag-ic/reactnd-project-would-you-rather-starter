import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/shared';
import Card from './Card';
import '../styles/Question.css';

export const optionsKeys = ['optionOne', 'optionTwo'];

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired
  };

  state = {
    selectedOption: ''
  };

  onOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  onSubmitAnswer = (event) => {
    event.preventDefault();
    const { authedUser, question, dispatch } = this.props;
    const { selectedOption } = this.state;
    dispatch(handleAnswerQuestion(authedUser, question.id, selectedOption));
  };

  render() {
    const { author, question } = this.props;
    const { selectedOption } = this.state;

    return (
      <Card
        title={`${author.name} asks:`}
        imageURL={author.avatarURL}>
        <form className="question" onSubmit={this.onSubmitAnswer}>
          <h1>Would You Rather...</h1>
          {optionsKeys.map(optionKey => (
            <label key={optionKey}>
              <input
                type="radio"
                value={optionKey}
                checked={selectedOption === optionKey}
                onChange={this.onOptionChange}/>
              {question[optionKey].text}
            </label>
          ))}
          <button disabled={!selectedOption}>Submit</button>
        </form>
      </Card>
    );
  }
}

export default connect(({ authedUser, users }, { question }) => ({
  authedUser,
  author: users[question.author]
}))(Question);