import { MountainIcon } from '@/components/icons'
import Link from 'next/link'

export default function BrandLink() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Bassalobres' Company</span>
    </Link>
  )
}
