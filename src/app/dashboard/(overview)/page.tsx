import { unstable_noStore as noStore } from 'next/cache';

const fetchDollarNow = async () => {
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const dollarRequest = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    return dollarRequest.json();
}

const fetchBitcoinNow = async () => {
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const bitcoinRequest = await fetch('https://economia.awesomeapi.com.br/last/BTC-USD');
    return bitcoinRequest.json();
}

export default async function Dashboard() {
    const [dollar, bitcoin] = await Promise.all([fetchDollarNow(), fetchBitcoinNow()]);

    return (
        <div className="flex flex-row gap-2">
            <pre className="w-1/2">{JSON.stringify(dollar, undefined, 1)}</pre>
            <pre className="w-1/2">{JSON.stringify(bitcoin, undefined, 1)}</pre>
        </div>
    );
};
