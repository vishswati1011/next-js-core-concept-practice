import {BASE_URL} from '../src/db/url';
async function getUsersByStaticApiRoutes() {
    return fetch(`${BASE_URL}users`)
        .then(response => response.json())
        .then(users => users);
}

async function getUsersByIdApiRoutes(userId) {
    return fetch(`${BASE_URL}users/${userId}`)
        .then(response => response.json())
        .then(users => users);
}

async function postUsersData (data) {
  return fetch(`${BASE_URL}users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export  {
    getUsersByStaticApiRoutes,
    getUsersByIdApiRoutes,
    postUsersData
}