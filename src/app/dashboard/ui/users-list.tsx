const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const usersRequest = await fetch('https://fakestoreapi.com/users');
    return usersRequest.json();
}

export default async function UsersList() {
    const users = await fetchUsers();

    return <pre className="w-1/2">{JSON.stringify(users, undefined, 1)}</pre>;
}
