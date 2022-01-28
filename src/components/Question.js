import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/shared';


class Question extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.options && this.options.lenght
        ? this.options[0].key
        : null
    };
  }

  onOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  onSubmitAnswer(event) {
    event.preventDefault();
    const { authedUser, id, dispatch } = this.props;
    const { selectedOption } = this.state;
    dispatch(handleAnswerQuestion(authedUser, id, selectedOption));
  }

  render() {
    return (
      <form onSubmit={this.onSubmitAnswer}>
        {this.props.options.map(option => (
          <label>
            <input
              type="radio"
              key={option.key}
              value={option.key}
              checked={this.state.selectedOption === option.key}
              onChange={this.onOptionChange}/>
            {option.text}
          </label>
        ))}
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(({ questions, authedUser }, { id }) => ({
  options: questions[id].options,
  authedUser
}))(Question);