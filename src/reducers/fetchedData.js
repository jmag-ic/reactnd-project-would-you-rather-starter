import { FETCHED_DATA } from "../actions/fetchedData";

export default function fetchedData(state = false, action) {
  switch(action.type) {
    case FETCHED_DATA:
      return action.value;
    default:
      return state;
  }
};