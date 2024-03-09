import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export function About({ children }: PropsWithChildren) {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          {children}
        </div>
      </div>
    </section>
  )
}

export function AboutContent({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center space-y-4">{children}</div>
  )
}

export function AboutDescription({ children }: PropsWithChildren) {
  return <div className="space-y-2">{children}</div>
}

export function AboutDescriptionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
  )
}

export function AboutDescriptionText({ description }: { description: string }) {
  return (
    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      {description}
    </p>
  )
}

export function AboutActions({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">{children}</div>
  )
}

export function AboutActionLink({
  href,
  title,
  variant,
}: {
  href: string
  title: string
  variant: 'primary' | 'secondary'
}) {
  return (
    <Link
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300',
        {
          'bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90':
            variant === 'primary',
          'border border-gray-200 border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50':
            variant === 'secondary',
        },
      )}
      href={href}
    >
      {title}
    </Link>
  )
}
