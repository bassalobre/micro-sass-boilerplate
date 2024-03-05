import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Collaboration
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Faster iteration. More innovation.
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                The platform for rapid progress. Let your team focus on shipping features instead of
                                managing
                                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Contact Sales
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg_white px-8 text-sm font-medium shadow_sm transition-colors hover:bg_gray_100 hover:text_gray_900 focus-visible:outline-none focus-visible:ring_gray_950 disabled:pointer-events_none disabled:opacity_50 dark:border-gray_800 dark:border-gray_800 dark:bg_gray_950 dark:hover:bg_gray_800 dark:hover:text_gray_50 dark:focus-visible:ring_gray_300"
                                href="#"
                            >
                                Tour the Platform
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
