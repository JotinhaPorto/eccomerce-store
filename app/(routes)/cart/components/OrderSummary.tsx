'use client'

import { formatValueToReal } from '@/app/components/Price'
import { useCart } from '@/hooks/useCart'



const OrderSummary = () => {

    const items = useCart((state) => state.data)
    const removeAll = useCart((state) => state.removeAll)

    const totalPrice = items.reduce((prevoiusValue, currentValue) => {
        return prevoiusValue + Number(currentValue.price)
    }, 0)

    return (
        <div className='bg-slate-50 rounded-lg px-6 py-8 my-2 h-max w-full lg:ml-auto lg:max-w-xl'>
            <h1 className='pb-2'>Resumo do pedido</h1>
            <hr className='py-2' />
            <div className='flex justify-between '>
                <p>Total</p>
                <span>{formatValueToReal.format(Number(totalPrice))}</span>
            </div>
            <button className='relative w-full bg-black text-white py-2 mt-2'>Finalizar compra</button>
        </div>
    )
}

export default OrderSummary