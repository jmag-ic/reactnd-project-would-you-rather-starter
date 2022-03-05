import { hideLoading, showLoading } from "react-redux-loading-bar";
import { createQuestion } from "../util/api";

export const CREATE_QUESTION = 'CREATE_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function handleCreateQuestion(optionOneText, optionTwoText, author) {
  return async dispatch => {
    dispatch(showLoading());
    const formattedQuestion = await createQuestion({
      optionOneText,
      optionTwoText,
      author,
      timestamp: Date.now()
    });
    dispatch(createQuestionAction(formattedQuestion));
    dispatch(hideLoading());
  };
}

export function receiveQuestionsAction(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function createQuestionAction(question) {
  return {
    type: CREATE_QUESTION,
    question
  };
}