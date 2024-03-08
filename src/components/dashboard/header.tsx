import { PropsWithChildren } from 'react'

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="flex h-14 items-center justify-end gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      {children}
    </header>
  )
}
export function HeaderContent({ children }: PropsWithChildren) {
  return <div className="w-full flex-1">{children}</div>
}

export function HeaderActions({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>
}
