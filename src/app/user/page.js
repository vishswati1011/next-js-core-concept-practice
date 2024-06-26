import getUsers from "../../../services/getUsers";
import Link from "next/link";

export default async function page() {
  let getUsersList = await getUsers();
  const users = await getUsersList;

  return (
    <div>
      <h1>
        generateStaticParams concept used in user detail page to generate static
        paths
      </h1>

      <h3>User Page</h3>

      {users &&
        users.map((user) => (
          <div key={user.id}>
            <Link href={`/user/${user.id}`}>
              <h5>{user.name}</h5>
              <p>{user.email}</p>
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
}
