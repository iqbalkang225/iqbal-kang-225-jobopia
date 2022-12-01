const URL = 'https://jobopia.onrender.com/api/v1/'



export const postRequest = (resource, data) => fetch(`${URL}${resource}`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
