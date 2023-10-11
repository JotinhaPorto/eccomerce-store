import { Product } from '@/types/types';
import { create } from 'zustand'

type TPreviewProduct = {
    isOpen: boolean;
    data?: Product
    onOpen: (data: Product) => void;
    onClose: () => void
}
export const usePreviewProduct = create<TPreviewProduct>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))