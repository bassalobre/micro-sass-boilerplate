import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export function Hero({ children }: PropsWithChildren) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {children}
        </div>
      </div>
    </section>
  )
}

export function HeroContent({ children }: PropsWithChildren) {
  return <div className="space-y-2">{children}</div>
}

export function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
      {title}
    </h1>
  )
}

export function HeroDescription({ description }: { description: string }) {
  return (
    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
      {description}
    </p>
  )
}

export function HeroActions({ children }: PropsWithChildren) {
  return <div className="space-x-4">{children}</div>
}

export function HeroActionLink({
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
