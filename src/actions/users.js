export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsersAction(users) {
  return {
    type: RECEIVE_USERS,
    users
  }  
}