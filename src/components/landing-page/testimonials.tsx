import Image from 'next/image'
import { PropsWithChildren } from 'react'

export function Testimonials({ children }: PropsWithChildren) {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-12 px-4 text-center md:gap-12 md:px-6">
        {children}
      </div>
    </section>
  )
}

export function TestimonialsHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

export function TestimonialsCarousel({ children }: PropsWithChildren) {
  return <div className="flex gap-14 overflow-x-auto">{children}</div>
}

export function TestimonialCard({ children }: PropsWithChildren) {
  return (
    <div className="max-w-4xl mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1 md:gap-8 lg:max-w-5xl">
      <div className="grid w-full grid-rows-1 items-center justify-center gap-4 md:gap-8 lg:grid-cols-1 lg:gap-4">
        {children}
      </div>
    </div>
  )
}

export function TestimonialCardHeader({
  avatar,
  name,
  role,
}: {
  avatar: string
  name: string
  role: string
}) {
  return (
    <div className="grid w-full grid-rows-1 items-center justify-center gap-2 md:order-2 md:gap-4 lg:order-1">
      <div className="flex w-full items-center justify-center">
        <Image
          alt="Avatar"
          className="rounded-full"
          width="96"
          height="96"
          src={avatar}
          style={{
            aspectRatio: '96/96',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="text-2xl font-bold">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
    </div>
  )
}

export function TestimonialCardDescription({
  description,
}: {
  description: string
}) {
  return (
    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      {description}
    </p>
  )
}
