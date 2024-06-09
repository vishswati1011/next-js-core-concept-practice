import Link from 'next/link';
import {getUsersByStaticApiRoutes} from '../../../services/getUsersByApiRoutes';
import DeleteButton from './component/deleteuser';
export default async function UserStaticAPi() {

    const getUserList = await getUsersByStaticApiRoutes();
    const users = await getUserList;

  return (
    <div>
        <h1> Fetch User data From api routes</h1>
        {
            users.map((user,index)=> {
                return (
                
                    <div key={index}>
                        <span><Link href={`/users/${user.id}`} key={index}>{user.name} </Link> </span> &nbsp; 
                            <span> <Link href={`/users/${user.id}/update`}>
                                <button >edit</button></Link>
                            </span>
                            <span>
                                <DeleteButton userId={user.id}  />
                            </span>
                        <br/>
                    </div>
                )
            })
        }
    </div>
  )
}
