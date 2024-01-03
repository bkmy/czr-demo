import { describe, it, vi, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import AddToCart from '@/components/add-to-cart'
import { CartItem as CartItemProps } from '@/store/cart'


const createMockItem = (id: number, volume: number): CartItemProps => ({
    id,
    name: `Test Item ${id}`,
    country: 'Germany',
    image: '/test.jpg',
    price_per_ton: 100,
    offered_volume_in_tons: 100,
    distribution_weight: 0,
    supplier_name: 'Test Supplier',
    earliest_delivery: '2024-02-01',
    sdgs: [],
    description: 'Test Description',
    volume,
})

const mockItem = createMockItem(1, 50)

describe('AddToCart', () => {

    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders without crashing', () => {
        const { getByRole } = render(<AddToCart project={mockItem} />)

        const input = getByRole('spinbutton', { name: 'Test Item 1 Volume' })
        expect(input).not.toBeNull()

        const button = getByRole('button', { name: 'Add to Cart' })
        expect(button).not.toBeNull()
    })
})


