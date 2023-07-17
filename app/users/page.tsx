import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://649bef6404807571923726dd.mockapi.io/fake-api"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const users = await getData();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id} className="pt-2">
          {user.lastName}{" "}
          <Link href={`users/${user.id}`}>
            <button className="border border-gray-500 bg-gray-500 text-white rounded-md px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-600 focus:outline-none focus:shadow-outline">
              Chi tiết
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
