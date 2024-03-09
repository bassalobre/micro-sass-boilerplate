import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from '@/components/ui/collapsible'
import { ChevronDownIcon } from '@/components/icons'
import { PropsWithChildren } from 'react'

export function Faq({ children }: PropsWithChildren) {
  return (
    <section id="faq" className="container w-full py-6">
      <div className="flex flex-col gap-4 px-4 md:px-6 md:flex-row">
        {children}
      </div>
    </section>
  )
}

export function FaqHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex-1 space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

export function FaqItems({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 space-y-4">
      <dl className="grid gap-4">{children}</dl>
    </div>
  )
}

export function FaqItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <Collapsible className="space-y-2">
        <div className="flex items-center space-x-4 cursor-pointer">
          <CollapsibleTrigger asChild>
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 w-full flex items-center justify-between shadow-sm cursor-pointer sm:p-4 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
              <span className="font-medium">{title}</span>
              <ChevronDownIcon className="w-4 h-4 transition-all peer-collapsed:rotate-180 duration-150 peer-collapsed:duration-100" />
            </div>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent asChild>
          <div className="pt-2 text-sm peer-collapsed:invisible">
            <p className="leading-loose">{description}</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
