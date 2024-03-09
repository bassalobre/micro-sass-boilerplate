import Link from 'next/link'
import { PropsWithChildren } from 'react'

export function Footer({ children }: PropsWithChildren) {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      {children}
    </footer>
  )
}

export function FooterDescription({ description }: { description: string }) {
  return (
    <p className="text-xs text_gray_500 dark:text_gray_400">{description}</p>
  )
}

export function FooterActions({ children }: PropsWithChildren) {
  return <nav className="sm:ml-auto flex gap-4 sm:gap-6">{children}</nav>
}

export function FooterActionLink({
  href,
  title,
}: {
  href: string
  title: string
}) {
  return (
    <Link className="text_xs hover:underline underline_offset_4" href={href}>
      {title}
    </Link>
  )
}
