export const AUTH_USER = 'AUTH_USER';

export function handleLogin(user) {
  return authUserAction(user);
}

export function handleLogout() {
  return authUserAction();
}

function authUserAction(user = null) {
  return {
    type: AUTH_USER,
    user
  };
}