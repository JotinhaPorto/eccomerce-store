'use client'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/types'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type InfosProps = {
    produto: Product
}


const Infos = ({ produto }: InfosProps) => {
    const cart = useCart()
    const onAdd = () => {
        cart.add(produto)
    }

    return (
        <div className="mt-4 lg:mt-20">
            <button onClick={onAdd} className="flex items-center gap-2 bg-black text-white p-4 rounded-full hover:bg-black/80">
                <span>Adicionar ao carrinho</span>
                <AiOutlineShoppingCart />
            </button>
        </div>
    )
}

export default Infos