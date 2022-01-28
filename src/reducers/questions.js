import {
  CREATE_QUESTION,
  RECEIVE_QUESTIONS
} from "../actions/questions";
import { ANSWER_QUESTION } from '../actions/shared';

export default function questions(state = {}, action) {
  switch(action.type) {
    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser]
          }
        }
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};