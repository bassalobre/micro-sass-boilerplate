import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from '@/components/ui/collapsible'
import { ChevronDownIcon } from '@/components/icons'

export default function FaqSection() {
  return (
    <section className="container w-full py-6">
      <div className="flex flex-col gap-4 px-4 md:px-6 md:flex-row">
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Got a question? We've got answers. If you have some other questions,
            see our support center.
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <dl className="grid gap-4">
            <div>
              <Collapsible className="space-y-2">
                <div className="flex items-center space-x-4 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 w-full flex items-center justify-between shadow-sm cursor-pointer sm:p-4 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
                      <span className="font-medium">
                        What can I build with this platform?
                      </span>
                      <ChevronDownIcon className="w-4 h-4 transition-all peer-collapsed:rotate-180 duration-150 peer-collapsed:duration-100" />
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent asChild>
                  <div className="pt-2 text-sm peer-collapsed:invisible">
                    <p className="leading-loose">
                      You can build a wide range of applications, including
                      websites, APIs, microservices, and more. The platform
                      supports popular frameworks and languages, allowing you to
                      work with the tools you already know and love.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div>
              <Collapsible className="space-y-2">
                <div className="flex items-center space-x-4 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 w-full flex items-center justify-between shadow-sm cursor-pointer sm:p-4 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
                      <span className="font-medium">
                        How do I get started with the platform?
                      </span>
                      <ChevronDownIcon className="w-4 h-4 transition-all peer-collapsed:rotate-180 duration-150 peer-collapsed:duration-100" />
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent asChild>
                  <div className="pt-2 text-sm peer-collapsed:invisible">
                    <p className="leading-loose">
                      Getting started is easy. Simply sign up for an account and
                      follow the onboarding process. You'll be guided through
                      the setup steps, and our documentation provides detailed
                      instructions for creating and deploying your projects.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div>
              <Collapsible className="space-y-2">
                <div className="flex items-center space-x-4 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 w-full flex items-center justify-between shadow-sm cursor-pointer sm:p-4 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
                      <span className="font-medium">
                        Can I use my own domain with the platform?
                      </span>
                      <ChevronDownIcon className="w-4 h-4 transition-all peer-collapsed:rotate-180 duration-150 peer-collapsed:duration-100" />
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent asChild>
                  <div className="pt-2 text-sm peer-collapsed:invisible">
                    <p className="leading-loose">
                      Yes, you can use your own custom domain with the platform.
                      Once you have configured your domain settings, you can
                      easily add your domain to your projects using the
                      platform's dashboard. Our support team is also available
                      to assist you with the process if you need help.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div>
              <Collapsible className="space-y-2">
                <div className="flex items-center space-x-4 cursor-pointer">
                  <CollapsibleTrigger asChild>
                    <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 w-full flex items-center justify-between shadow-sm cursor-pointer sm:p-4 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm">
                      <span className="font-medium">
                        Is the platform secure?
                      </span>
                      <ChevronDownIcon className="w-4 h-4 transition-all peer-collapsed:rotate-180 duration-150 peer-collapsed:duration-100" />
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent asChild>
                  <div className="pt-2 text-sm peer-collapsed:invisible">
                    <p className="leading-loose">
                      Yes, security is a top priority for the platform. We
                      employ industry best practices to protect your data and
                      ensure the integrity of your applications. Our
                      infrastructure is designed with security in mind, and we
                      provide features such as SSL encryption, DDoS protection,
                      and more to keep your projects safe.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
