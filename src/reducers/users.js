import { CREATE_QUESTION } from '../actions/questions';
import { ANSWER_QUESTION } from '../actions/shared';
import { RECEIVE_USERS } from '../actions/users';

export default function users (state = {}, action) {
  switch(action.type) {
    case CREATE_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id]
        }
      };
    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};