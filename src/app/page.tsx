import ProjectList from '@/components/project-list'
import { buttonVariants } from '@/components/ui/button'
import { ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-end justify-center space-y-4 w-full">
        <div className="w-64">
          <Link className={`${buttonVariants({ variant: "outline" })} text-gray-700`} href="/cart">
            <ShoppingBagIcon className='text-gray-700 h-4 w-4 mx-1' />
            Shopping Cart
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <h1 className="text-3xl font-bold text-center">CZR Demo</h1>
        <p className="text-xl text-center">Choose from a variety of projects to offset your carbon footprint</p>
      </div>
      <ProjectList />
    </main>
  )
}
