import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCreateQuestion } from '../actions/questions';

class NewQuestion extends Component {
  
  state = {
    optionOne: '',
    optionTwo: ''
  };

  onFormChange = (option, value) => {
    this.setState({[option]: value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    dispatch(handleCreateQuestion(optionOne, optionTwo, authedUser));
  };

  render() {
    return (
      <div>
        <h1>New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Enter Option One Text Here"
            value={this.state.optionOne}
            onChange={(event) => this.onFormChange('optionOne', event.target.value)}
            />
          <input
            placeholder="Enter Option Two Text Here"
            value={this.state.optionTwo}
            onChange={(event) => this.onFormChange('optionTwo', event.target.value)}
            />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(({ authedUser }) => ({
  authedUser
}))(NewQuestion);