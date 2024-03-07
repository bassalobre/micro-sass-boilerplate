import { ReactNode } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarItemBadge,
  SidebarItemIcon,
  SidebarItemTitle,
} from '@/components/dashboard/sidebar'
import Header from '@/components/dashboard/header'
import { HomeIcon, Package2Icon, UsersIcon } from '@/components/icons'
import Link from 'next/link'

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
            <span>Acme Inc</span>
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
            <SidebarItemBadge value={5} />
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
