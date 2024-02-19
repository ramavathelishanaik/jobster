export const addUserToLocalStroage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStroage = () => {
  localStorage.removeItem('user');
};

export const getUserDataFromLocalStroage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};
