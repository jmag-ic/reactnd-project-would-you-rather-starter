import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import '../styles/Home.css';

class Home extends Component {
  state = {
    selectedTab: 'unanswered'
  };

  onSelectAnswered = (event) => {
    event.preventDefault();
    this.setState({ selectedTab: 'answered' });
  };

  onSelectUnanswered = (event) => {
    event.preventDefault();
    this.setState({ selectedTab: 'unanswered' });
  };

  getTabClassName = (tabName) =>
    this.state.selectedTab === tabName ? 'active-tab' : 'tab';

  render() {
    return (
      <div className="home">
        <div className="tabs">
          <button
            className={this.getTabClassName('answered')}
            onClick={this.onSelectAnswered}>
            Answered
          </button>
          <button
            className={this.getTabClassName('unanswered')}
            onClick={this.onSelectUnanswered}>
            Unanswered
          </button>
        </div>
        <div className="question-list">
          {this.state.selectedTab === 'answered' && <QuestionList questions={this.props.answeredQuestions}/>}
          {this.state.selectedTab === 'unanswered' && <QuestionList questions={this.props.unansweredQuestions}/>}
        </div>
      </div>
    );
  }
}

function classifyQuestions(currentUser, questions) {
  const answeredQuestions = [];
  const unansweredQuestions = [];
  const userAnswers = Object.keys(currentUser.answers);

  Object.values(questions).forEach(question => {
    if (userAnswers.includes(question.id)) {
      answeredQuestions.push(question);
    } else {
      unansweredQuestions.push(question);
    }
  });

  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(({ questions, users, authedUser }) => {
  return classifyQuestions(users[authedUser], questions);
})(Home);