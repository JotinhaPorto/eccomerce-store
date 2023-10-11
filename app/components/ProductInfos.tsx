'use client'

import { Product } from "@/types/types"
import { formatValueToReal } from "./Price"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useCart } from "@/hooks/useCart"

type ProductInfosProps = {
    produto: Product
}
const ProductInfos = ({ produto }: ProductInfosProps) => {
    const cart = useCart()
    const onAdd = () => {
        cart.add(produto)
    }


    return (
        <div className='flex flex-1 flex-col justify-start'>
            <div>
                <h1 className='font-bold text-xl sm:text-4xl'> {produto?.name}</h1>
                <p className='font-semibold text-xl pt-2'>{formatValueToReal.format(Number(produto?.price))}</p>
            </div>
            <div className='border-b-2 py-2'></div>
            <div className='flex gap-2 pt-4'>
                <h1 className='font-semibold'>Tamanho:</h1>
                <p>{produto?.size.value}</p>
            </div>
            <div className='flex gap-2 items-center pt-4'>
                <h1 className='font-semibold'>Cor:</h1>
                <p
                    className='shadow-md'
                    style={{ border: 1, backgroundColor: `${produto?.Color.value}`, width: 20, height: 20, borderRadius: 10 }}
                >
                </p>
            </div>
            <div className="mt-10">
                <button onClick={onAdd} className="flex items-center gap-2 bg-black text-white p-2 text-xs sm:text-base md:p-4 rounded-full hover:bg-black/80">
                    <span>Adicionar ao carrinho</span>
                    <AiOutlineShoppingCart />
                </button>
            </div>

        </div>
    )
}

export default ProductInfos