'use client'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const NavActions = () => {
    const cart = useCart((state) => state.data)
    const [cartLength, setCartLength] = useState<Product[]>()
    useEffect(() => {
        setCartLength(cart)
    }, [cart])
    const { push } = useRouter()

    return (
        <div>
            <button onClick={() => push('/cart')} className='bg-[#010001] py-2 px-4  rounded-lg flex items-center gap-2 text-white hover:bg-zinc-900'>
                <AiOutlineShopping className="w-5 h-5" />
                <span className='text-sm'>{cartLength?.length}</span>
            </button>
        </div>
    )
}

export default NavActions