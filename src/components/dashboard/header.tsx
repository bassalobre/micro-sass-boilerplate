import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOut } from '@/services/auth'
import { BellIcon, MenuIcon, SearchIcon } from '@/components/icons'

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Button
        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
        size="icon"
        variant="outline"
      >
        <MenuIcon className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search products..."
              type="search"
            />
          </div>
        </form>
      </div>
      <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
        <BellIcon className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
            size="icon"
            variant="outline"
          >
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <DropdownMenuItem>
              <button>Logout</button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
