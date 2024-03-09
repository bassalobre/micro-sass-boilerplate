import Link from 'next/link'
import { PropsWithChildren } from 'react'

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">{children}</header>
  )
}

export function HeaderLinks({ children }: PropsWithChildren) {
  return <nav className="ml-auto flex gap-4 sm:gap-6">{children}</nav>
}

export function HeaderLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href={href}
    >
      {title}
    </Link>
  )
}
