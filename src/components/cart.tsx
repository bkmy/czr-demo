"use client"

import { useCartStore } from "@/store/cart";
import CartItem from "./cart-item";
import { formatPrice } from "@/lib/locale";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { SproutIcon } from "lucide-react";

export default function Cart() {

    const { cartItems, calculateCartTotal, calculateCartVolume, emptyCart } = useCartStore((state) => ({
        cartItems: state.cartItems,
        calculateCartTotal: state.calculateCartTotal,
        calculateCartVolume: state.calculateCartVolume,
        emptyCart: state.emptyCart,
    }));

    const totalPrice = calculateCartTotal();
    const totalVolume = calculateCartVolume();

    return (
        <div className="flex flex-wrap w-full items-center space-y-4 max-w-[640px]">
            {cartItems.length > 0 ? (
                <div className="flex justify-between items-end w-full">
                    <Button variant="link" className="ml-auto" onClick={() => emptyCart()}>
                        Clear Cart
                    </Button>
                </div>) : null}
            {cartItems.length === 0 ? (
                <div className="flex flex-col justify-between items-center w-full space-y-4">
                    <p className="text-gray-700 text-center font-semibold">Your cart is empty</p>
                    <Link className={`${buttonVariants({ variant: "link" })}`} href="/">
                        <SproutIcon className='text-gray-700 h-4 w-4 mx-1' />
                        Go back to Projects
                    </Link>
                </div>
            ) : (
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
            )}
            {cartItems.length > 0 ? (
                <div className="flex justify-between w-full mt-4">
                    <p>Total Price: <span className="font-semibold">{formatPrice(totalPrice)}</span></p>
                    <p>Total Volume: <span className="font-semibold">{totalVolume}</span> tons</p>
                </div>
            ) : null}
        </div>
    )
}