import { Project } from '@/lib/schema'
import { StateCreator, create } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'

export type CartItem = Project & {
  volume: number
}

type CartState = {
  cartItems: CartItem[]
}

type CartActions = {
  addItemToCart: (item: Project, volume: number) => void
  updateItemInCart: (item: Project, volume: number) => void
  removeItemFromCart: (id: number) => void
  emptyCart: () => void
}

type CartSelectors = {
  calculateCartTotal: () => number
  calculateCartVolume: () => number
}

type CartStore = CartState & CartActions & CartSelectors

const persistOptions: PersistOptions<CartStore> = {
  name: 'cart-store',
}

const findCartItem = (items: CartItem[], id: number) =>
  items.find((item) => item.id === id)

const filterCartItem = (items: CartItem[], id: number) =>
  items.filter((item) => item.id !== id)

const sumItemsVolume = (items: CartItem[]) =>
  items.reduce((acc, item) => acc + item.volume, 0)

const sumItemsPrice = (items: CartItem[]) =>
  items.reduce((acc, item) => acc + item.volume * item.price_per_ton, 0)

const validateVolume = (item: Project, volume: number) => {
  if (volume < 0) {
    throw new Error(`Volume must be greater than 0.`)
  }

  if (volume > item.offered_volume_in_tons) {
    throw new Error(
      `Maximum volume for ${item.name} project is ${item.offered_volume_in_tons} tons.`,
    )
  }
}

const cartStore: StateCreator<CartStore> = (set, get) => ({
  cartItems: [],
  addItemToCart: (item, volume) => {
    validateVolume(item, volume)

    set((state) => {
      const existingCartItem = findCartItem(state.cartItems, item.id)
      const currentVolume = existingCartItem ? existingCartItem.volume : 0
      const totalVolume = currentVolume + volume

      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, volume: totalVolume } : i,
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, volume }],
        }
      }
    })
  },
  updateItemInCart: (item, volume) => {
    validateVolume(item, volume)

    set((state) => {
      const existingCartItem = findCartItem(state.cartItems, item.id)

      if (!existingCartItem) {
        throw new Error(`Item ${item.name} not found in cart.`)
      }

      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i.id === item.id ? { ...i, volume } : i,
        ),
      }
    })
  },
  removeItemFromCart: (id) => {
    set((state) => ({
      ...state,
      cartItems: filterCartItem(state.cartItems, id),
    }))
  },
  emptyCart: () => {
    set(() => ({
      cartItems: [],
    }))
  },
  calculateCartTotal: () => sumItemsPrice(get().cartItems),
  calculateCartVolume: () => sumItemsVolume(get().cartItems),
})

export const useCartStore = create(persist(cartStore, persistOptions))
