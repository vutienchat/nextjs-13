const getUserDetails = async (userId: string) => {
  const res = await fetch(
    `https://649bef6404807571923726dd.mockapi.io/fake-api/${userId}`
  );
  return res.json();
};

const UserDetails = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const details = await getUserDetails(userId);

  return (
    <div>
      <p>first Name:{details.firstName}</p>
      <p>Last Name:{details.lastName}</p>
      <p>Age:{details.age}</p>
    </div>
  );
};

export default UserDetails;
