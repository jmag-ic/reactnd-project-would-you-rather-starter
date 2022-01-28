import {
  showLoading,
  hideLoading
} from 'react-redux-loading';
import {
  answerQuestion,
  getQuestions,
  getUsers
} from '../util/api';
import { receiveQuestionsAction } from './questions';
import { receiveUsersAction } from './users';
import { fetchedDataAction } from './fetchedData';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return dispatch => {
    dispatch(answerQuestionAction(authedUser, qid, answer));
    return answerQuestion({
      authedUser,
      qid,
      answer
    });
  };
}

export function handleFetchInitialData() {
  return async dispatch => {
    dispatch(showLoading());
    const [questions, users] = await Promise.all([
      getQuestions(),
      getUsers()
    ]);
    dispatch(receiveQuestionsAction(questions));
    dispatch(receiveUsersAction(users));
    dispatch(fetchedDataAction(true));
    dispatch(hideLoading());
  };
}

function answerQuestionAction(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}