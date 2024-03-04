const fetchCustomers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const customerRequest = await fetch('https://fakestoreapi.com/products');
    return customerRequest.json();
}

export default async function CustomersList() {
    const customers = await fetchCustomers();

    return <pre className="w-1/2">{JSON.stringify(customers, undefined, 1)}</pre>;
}
