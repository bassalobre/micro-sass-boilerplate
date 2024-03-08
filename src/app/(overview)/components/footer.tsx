import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text_gray_500 dark:text_gray_400">
        © 2024 Acme Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text_xs hover:underline underline_offset_4" href="#">
          Terms of Service
        </Link>
        <Link className="text_xs hover:underline underline_offset_4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}
