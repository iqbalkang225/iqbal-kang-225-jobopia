export const setLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeLocalStorage = () => {
  localStorage.removeItem('user')
}

export const getLocalStorage = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}