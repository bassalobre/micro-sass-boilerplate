import { Button } from '@/components/ui/button'
import { CheckIcon } from '@/components/icons'
import { PropsWithChildren } from 'react'

export function Pricing({ children }: PropsWithChildren) {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {children}
        </div>
      </div>
    </section>
  )
}

export function PricingHeader({ children }: PropsWithChildren) {
  return <div className="space-y-2">{children}</div>
}

export function PricingHeaderTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
  )
}

export function PricingHeaderDescription({
  description,
}: {
  description: string
}) {
  return (
    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      {description}
    </p>
  )
}

export function PricingContent({ children }: PropsWithChildren) {
  return (
    <div className="grid gap-6 sm:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8">
      {children}
    </div>
  )
}

export function PricingCard({
  name,
  description,
  price,
  benefits,
}: {
  name: string
  description: string
  price: string
  benefits: string[]
}) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-200 border-gray-200 rounded-lg bg-gray-50 shadow-sm sm:p-6 sm:order-last md:order-first md:rounded-xl lg:order-last lg:p-8 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm leading-6">{description}</p>
        <div className="text-2xl font-bold">{price}</div>
      </div>
      <ul className="grid gap-2 mt-4 text-sm border-t border-gray-200 py-4 dark:border-gray-800">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4" />
            {benefit}
          </li>
        ))}
      </ul>
      <Button size="sm" variant="outline">
        Choose {name}
      </Button>
    </div>
  )
}
