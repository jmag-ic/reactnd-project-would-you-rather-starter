export const FETCHED_DATA = 'FETCHED_DATA';

export function fetchedDataAction(value) {
  return {
    type: FETCHED_DATA,
    value
  };
}