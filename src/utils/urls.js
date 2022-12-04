// const URL = 'https://jobopia.onrender.com/api/v1/'
export const URL = 'http://127.0.0.1:8000/api/v1/'



export const postRequest = (resource, data, token, method) => fetch(`${URL}${resource}`, {
  method: method ? method : 'GET',
  headers: {
    'Content-Type': method === 'DELETE' ? null : 'application/json',
    'Authorization': `Bearer ${token ? token : ''}`
  },
  body: JSON.stringify(data)
})
