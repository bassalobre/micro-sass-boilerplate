import { ReactNode } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarItemIcon,
  SidebarItemTitle,
} from '@/components/dashboard/sidebar'
import { Header, HeaderActions } from '@/components/dashboard/header'
import {
  BellIcon,
  HomeIcon,
  Package2Icon,
  SettingsIcon,
  UsersIcon,
} from '@/components/icons'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOut } from '@/services/auth'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
      <Sidebar>
        <SidebarHeader>
          <Link
            className="flex items-center gap-2 font-semibold"
            href="/dashboard"
          >
            <Package2Icon className="h-6 w-6" />
            <span>{"Bassalobres' Company"}</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem href="/dashboard">
            <SidebarItemIcon icon={HomeIcon} />
            <SidebarItemTitle title="Home" />
          </SidebarItem>
          <SidebarItem href="/dashboard/customers">
            <SidebarItemIcon icon={UsersIcon} />
            <SidebarItemTitle title="Customers" />
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <Header>
          <HeaderActions>
            <Button className="h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-8 h-8" size="icon" variant="outline">
                  <SettingsIcon className="h-4 w-4" />
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
          </HeaderActions>
        </Header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
