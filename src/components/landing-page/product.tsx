import { PropsWithChildren } from 'react'

export function Product({ children }: PropsWithChildren) {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2xl lg:items-center">
          {children}
        </div>
      </div>
    </section>
  )
}

export function ProductDescription({ children }: PropsWithChildren) {
  return <div className="space-y-2">{children}</div>
}

export function ProductDescriptionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
  )
}

export function ProductDescriptionText({
  description,
}: {
  description: string
}) {
  return <p className="text-gray-500 dark:text-gray-400">{description}</p>
}

export function ProductSkills({ children }: PropsWithChildren) {
  return <div className="grid gap-6">{children}</div>
}

export function ProductSkill({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
