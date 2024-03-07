import { JSX, ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'

export function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="hidden border-r lg:block dark:border-gray-800">
      <div className="flex h-full max-h-screen flex-col gap-2">{children}</div>
    </div>
  )
}

export function SidebarHeader({ children }: { children: ReactNode }) {
  return <div className="flex h-14 items-center border-b px-6">{children}</div>
}

export function SidebarContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        {children}
      </nav>
    </div>
  )
}

export { SidebarItem } from './sidebar-item'

export function SidebarItemTitle({ title }: { title: string }) {
  return <span>{title}</span>
}

export function SidebarItemIcon({ icon }: { icon: JSX.ElementType }) {
  const Icon = icon

  return <Icon className="h-4 w-4" />
}

export function SidebarItemBadge({ value }: { value: string | number }) {
  return (
    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
      {value}
    </Badge>
  )
}

export function SidebarFooter({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[60px] items-center border-t px-6">{children}</div>
  )
}
