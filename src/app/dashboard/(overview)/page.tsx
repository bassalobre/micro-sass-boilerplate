import { unstable_noStore as noStore } from 'next/cache'
import { auth } from '@/services/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const fetchDollarNow = async () => {
  noStore()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const dollarRequest = await fetch(
    'https://economia.awesomeapi.com.br/last/USD-BRL',
  )
  return dollarRequest.json()
}

const fetchBitcoinNow = async () => {
  noStore()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const bitcoinRequest = await fetch(
    'https://economia.awesomeapi.com.br/last/BTC-USD',
  )
  return bitcoinRequest.json()
}

export default async function Dashboard() {
  const [dollar, bitcoin] = await Promise.all([
    fetchDollarNow(),
    fetchBitcoinNow(),
  ])
  const session = await auth()

  return (
    <div className="flex-1 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>View all products in the store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Link
              className="flex items-center rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm p-4 w-full transition-transform hover:scale-105 hover:shadow-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-md"
              href="#"
            >
              <PackageIcon className="h-6 w-6" />
              <div className="flex-1 w-full grid ml-4 text-left">
                <p className="font-medium">All Products</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  View all products in the store
                </p>
              </div>
            </Link>
            <Link
              className="flex items-center rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm p-4 w-full transition-transform hover:scale-105 hover:shadow-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-md"
              href="#"
            >
              <PackageIcon className="h-6 w-6" />
              <div className="flex-1 w-full grid ml-4 text-left">
                <p className="font-medium">All Products</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  View all products in the store
                </p>
              </div>
            </Link>
            <Link
              className="flex items-center rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm p-4 w-full transition-transform hover:scale-105 hover:shadow-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-md"
              href="#"
            >
              <PackageIcon className="h-6 w-6" />
              <div className="flex-1 w-full grid ml-4 text-left">
                <p className="font-medium">All Products</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  View all products in the store
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
      <pre className="w-1/2">{JSON.stringify(session?.user, undefined, 1)}</pre>
      <pre className="w-1/2">{JSON.stringify(dollar, undefined, 1)}</pre>
      <pre className="w-1/2">{JSON.stringify(bitcoin, undefined, 1)}</pre>
    </div>
  )
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
