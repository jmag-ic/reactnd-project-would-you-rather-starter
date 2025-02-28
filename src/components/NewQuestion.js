import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleCreateQuestion } from '../actions/questions';
import '../styles/NewQuestion.css';

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

class NewQuestion extends Component {
  
  state = {
    optionOne: '',
    optionTwo: '',
    redirect: false
  };

  onFormChange = (option, value) => {
    this.setState({[option]: value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    dispatch(handleCreateQuestion(optionOne, optionTwo, authedUser));
    this.setState({ redirect: true });
  };

  isButtonDisabled = () => !this.state.optionOne.trim() || !this.state.optionTwo.trim();

  render() {
    return (
      this.state.redirect
      ? <Redirect to="/" />
      : <div className="new-question">
        <div className="header">
          <h1>Create New Question</h1>
        </div>
        <div className="content">
          <p>Complete the question:</p>
          <h3>Would you rather...</h3>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Enter Option One Text Here"
              value={this.state.optionOne}
              onChange={(event) => this.onFormChange('optionOne', event.target.value)}
              />
            <div className="or">OR</div>
            <input
              placeholder="Enter Option Two Text Here"
              value={this.state.optionTwo}
              onChange={(event) => this.onFormChange('optionTwo', event.target.value)}
              />
            <button disabled={this.isButtonDisabled()}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(({ authedUser }) => ({
  authedUser
}))(NewQuestion);