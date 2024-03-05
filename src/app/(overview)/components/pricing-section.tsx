import { Button } from "@/components/ui/button"

export default function PricingSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Plans that scale with you
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible pricing for every team</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Choose the perfect plan for your needs. All plans include unlimited users and projects.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="flex flex-col items-center p-4 border border-gray-200 border-gray-200 rounded-lg bg-gray-50 shadow-sm sm:p-6 sm:order-last md:order-first md:rounded-xl lg:order-last lg:p-8 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-bold">Basic</h3>
                                <p className="text-sm leading-6">For small teams just getting started</p>
                                <div className="text-2xl font-bold">$9/user/mo</div>
                            </div>
                            <ul className="grid gap-2 mt-4 text-sm border-t border-gray-200 py-4 dark:border-gray-800">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    3 team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Basic support
                                </li>
                            </ul>
                            <Button size="sm" variant="outline">
                                Choose Basic
                            </Button>
                        </div>
                        <div className="flex flex-col items-center p-4 border border-gray-200 border-gray-200 rounded-lg bg-white shadow-sm sm:p-6 lg:p-8 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:shadow-md">
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-bold">Pro</h3>
                                <p className="text-sm leading-6">For growing teams that need more advanced features</p>
                                <div className="text-2xl font-bold">$19/user/mo</div>
                            </div>
                            <ul className="grid gap-2 mt-4 text-sm border-t border-gray-200 py-4 dark:border-gray-800">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    10 team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Advanced support
                                </li>
                            </ul>
                            <Button size="sm">Choose Pro</Button>
                        </div>
                        <div className="flex flex-col items-center p-4 border border-gray-200 border-gray-200 rounded-lg bg-white shadow-sm sm:p-6 sm:order-first md:rounded-xl md:p-8 lg:order-last lg:p-8 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:shadow-md">
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-bold">Enterprise</h3>
                                <p className="text-sm leading-6">For large organizations with advanced security and compliance needs</p>
                                <div className="text-2xl font-bold">$29/user/mo</div>
                            </div>
                            <ul className="grid gap-2 mt-4 text-sm border-t border-gray-200 py-4 dark:border-gray-800">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    Unlimited team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-4 h-4" />
                                    24/7 premium support
                                </li>
                            </ul>
                            <Button size="sm" variant="outline">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
