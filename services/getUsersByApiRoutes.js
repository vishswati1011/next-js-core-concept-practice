
async function getUsersByStaticApiRoutes() {
    return fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(users => users);
}

async function getUsersByIdApiRoutes(userId) {
    return fetch(`http://localhost:3000/api/users/${userId}`)
        .then(response => response.json())
        .then(users => users);
}

async function postUsersData (data) {
  return fetch('http://localhost:3000/api/users', {
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