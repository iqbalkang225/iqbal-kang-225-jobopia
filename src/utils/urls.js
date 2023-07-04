// export const URL = 'http://54.193.69.1/api/v1/';
export const URL = 'http://184.169.245.191/api/v1/';

export const postRequest = (resource, data, token, method) =>
  fetch(`${URL}${resource}`, {
    method: method ? method : 'GET',
    headers: {
      'Content-Type': method === 'DELETE' ? null : 'application/json',
      Authorization: `Bearer ${token ? token : ''}`,
    },
    body: JSON.stringify(data),
  });
