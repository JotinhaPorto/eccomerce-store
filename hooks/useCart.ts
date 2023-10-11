import { Product } from '@/types/types'
import toast from 'react-hot-toast';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TCart = {
    data: Product[];
    add: (data: Product) => void;
    remove: (id: string) => void;
    removeAll: () => void;
}

export const useCart = create(
    persist<TCart>(
        (set, get) => ({
            data: [],
            add: (data: Product) => {
                const items = get().data
                const existItem = items.find((item) => item.id === data.id)

                if (existItem) {
                   return toast.error("O produto já está no carrinho")
                }

                set((state) => ({
                    data: [...state.data, data]
                }))
                toast.success('Produto adicionado ao carrinho')
            },
            remove: (id: string) => set((state) => ({
                data: [...state.data.filter((product) => product.id !== id)]
            })),
            removeAll: () => set({ data: [] })
        }),
        { name: 'data' }
    )
) 