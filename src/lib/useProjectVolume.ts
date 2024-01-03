import { useState } from 'react'
import { useCartStore } from '@/store/cart'
import { Project } from './schema'
import { toast } from 'sonner'

export const useProjectVolume = (
  project: Project,
  initialVolume?: number,
  isCartItem?: boolean,
) => {
  const [volume, setVolume] = useState(initialVolume || 0)
  const { cartItems, addItemToCart, updateItemInCart, removeItemFromCart } =
    useCartStore((state) => ({
      cartItems: state.cartItems,
      addItemToCart: state.addItemToCart,
      updateItemInCart: state.updateItemInCart,
      removeItemFromCart: state.removeItemFromCart,
    }))

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
  }

  const cartItem = cartItems.find((item) => item.id === project.id)

  const showToast = (title: string, description: string) => {
    toast(title, { description })
  }

  const validateCartUpdate = (
    volume: number,
    totalVolume: number,
    isCartItem?: boolean,
  ) => {
    if (volume > project.offered_volume_in_tons) {
      return showToast(
        'Whoa there!',
        `Volume entered for the ${project.name} project is too high`,
      )
    }

    // Cart item update
    if (isCartItem) {
      if (volume === 0) {
        removeItemFromCart(project.id)
        return showToast(
          'Volume updated in cart',
          `Project ${project.name} has been removed from cart.`,
        )
      }

      updateItemInCart(project, volume)
      return showToast(
        'Volume updated in cart',
        `Updated to ${volume} tons for ${project.name}`,
      )
    }

    // Add item to cart
    if (volume === 0) {
      return showToast('Oops...', 'Please enter a volume number greater than 0')
    }

    if (totalVolume > project.offered_volume_in_tons) {
      return showToast(
        'Whoa there! The total volume for this project is too high',
        `Maximum available volume is ${project.offered_volume_in_tons} tons, you already have ${cartItem?.volume} tons of ${cartItem?.name} in your cart`,
      )
    }

    addItemToCart(project, volume)
    return showToast(
      'Added to cart',
      `Added ${volume} tons of ${project.name} to your cart`,
    )
  }

  const updateCart = () => {
    const totalVolume = (cartItem?.volume || 0) + volume
    validateCartUpdate(volume, totalVolume, isCartItem)
  }

  return { volume, handleVolumeChange, updateCart }
}
