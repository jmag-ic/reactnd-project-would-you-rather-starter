import { AUTH_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch(action.type) {
    case AUTH_USER:
      return action.user;
    default:
      return state;
  }
};