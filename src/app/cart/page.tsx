"use client"

import CartList from "@/components/cart"
import { buttonVariants } from "@/components/ui/button"
import useIsClient from "@/lib/useIsClient"
import { SproutIcon } from "lucide-react"
import Link from "next/link"

export default function Cart() {

    const isClient = useIsClient()

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex flex-col items-end justify-center space-y-4 w-full">
                <div className="w-64">
                    <Link className={buttonVariants({ variant: "outline" })} href="/">
                        <SproutIcon className='text-gray-700 h-4 w-4 mx-1' />
                        Back to Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <h1 className="text-3xl font-bold text-center">Cart</h1>
                <p className="text-xl text-center text-gray-700">
                    Review added Projects
                </p>
            </div>
            {isClient ? <CartList /> : null}
            <div className="flex flex-col w-full items-center justify-center">
            </div>
        </main>
    )
}