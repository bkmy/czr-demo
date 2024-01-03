import { Card } from "./ui/card";
import { useCartStore, CartItem as CartItemProps } from "@/store/cart";
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { Trash2Icon } from 'lucide-react';
import { useProjectVolume } from '@/lib/useProjectVolume';

export default function CartItem({ item }: { item: CartItemProps }) {

    const { cartItemVolume, removeItemFromCart } = useCartStore((state) => ({
        cartItemVolume: state.cartItems.find(cartItem => cartItem.id === item.id)?.volume,
        removeItemFromCart: state.removeItemFromCart,
    }));

    const { volume, handleVolumeChange, updateCart } = useProjectVolume(item, cartItemVolume, true);

    const handleRemoveClick = () => {
        removeItemFromCart(item.id);
    };

    return (
        <Card>
            <div className="flex flex-col md:flex-row space-y-1.5 p-4 w-[350px] md:w-full">
                <div className="flex flex-col w-72 justify-center">
                    <h2 className="font-semibold text-l">{item.name}</h2>
                </div>
                <div className="flex flex-row w-full space-x-1.5 justify-end">
                    <div className="w-32">
                        <Input
                            type="number"
                            id={`project-${item.id}-volume`}
                            name={`${item.name} Volume`}
                            value={volume}
                            onChange={handleVolumeChange}
                            min="0"
                            max={item.offered_volume_in_tons}
                            aria-label={`${item.name} Volume`}
                        />
                    </div>
                    <Button variant="secondary" onClick={updateCart}>Update</Button>
                    <Button variant="link" onClick={handleRemoveClick}>
                        <Trash2Icon className='text-gray-700 h-4 w-4 mx-1' />
                        Remove
                    </Button>
                </div>
            </div>
        </Card>
    )
}