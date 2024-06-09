import React from 'react'
import getUsers from '../../../../services/getUsers'

export default async function UserPage({params}) {

    const getUsersList =await getUsers();
    let users =await getUsersList
    users = users.filter(user => user.id == params.userId);

  return (
    <div>
        <h1>User detail page</h1>
        <h5>UserId :{params.userId}</h5>
        <h5> name : {users[0].name}</h5>
        <h5> email : {users[0].email}</h5>
        <h5> email : {users[0].website}</h5>

    </div>
  )
}

// this is the function that will be called at build time for generating static paths it come under (SSG)
export async function generateStaticParams() {
    const getUsersList =await getUsers();
    let users =await getUsersList;
    return users.map(user => ({
                userId: user.id.toString()
        })
    )
}
