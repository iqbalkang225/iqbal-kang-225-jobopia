export const setLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}