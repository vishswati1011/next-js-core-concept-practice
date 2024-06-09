import {getUsersByIdApiRoutes} from '../../../../services/getUsersByApiRoutes'

export default async function UserStaticAPi({params}) {

    const getUserData = await getUsersByIdApiRoutes(params?.userId)
    const userData = await getUserData.userdata;

    return (
      <div>
          <h1> User data By ID from static api routes</h1>
          <br/>
            <h5>Username : {userData.name}</h5>
            <h5>email :{userData.email}</h5>
      </div>
    )
  }
  