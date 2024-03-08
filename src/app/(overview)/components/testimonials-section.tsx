import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-12 px-4 text-center md:gap-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Customers Love Us
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don't just take our word for it. Here's what our customers are
            saying about us.
          </p>
        </div>
        <div className="flex gap-14 overflow-x-auto">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-1 md:gap-8 lg:max-w-5xl"
            >
              <div className="grid w-full grid-rows-1 items-center justify-center gap-2 md:order-2 md:gap-4 lg:order-1">
                <div className="flex w-full items-center justify-center">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    width="96"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: '96/96',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="text-2xl font-bold">Alice Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CEO, @acmecorp
                </div>
              </div>
              <div className="grid w-full grid-rows-1 items-center justify-center gap-4 md:gap-8 lg:grid-cols-1 lg:gap-4">
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  "Our team has been using the platform for a few months now,
                  and it has completely transformed the way we collaborate. The
                  interface is intuitive, and the features are robust. We've
                  seen a significant improvement in our productivity since we
                  started using it. Highly recommended!"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
