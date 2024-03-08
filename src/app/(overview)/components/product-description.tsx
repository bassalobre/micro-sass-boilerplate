export default function ProductDescription() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2xl lg:items-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              New Product
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Introducing Project Firefly
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The all-in-one platform for building and deploying Jamstack
              applications. Firefly lets you focus on creating dynamic and
              interactive web experiences without managing infrastructure.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Rapid Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Build sites with your favorite framework and deploy to a global
                edge network.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Seamless Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect to your CI/CD pipeline and automate previews with every
                push.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Scale with Ease</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Deliver instant loading sites with built-in caching and scale to
                handle traffic spikes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
