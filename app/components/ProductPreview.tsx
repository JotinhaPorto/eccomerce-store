'use client'
import { usePreviewProduct } from '@/hooks/usePreviewProduct'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'
import { formatValueToReal } from './Price'
import Gallery from '../components/Gallery/Gallery'
import { useCart } from '@/hooks/useCart'
import Infos from './Infos'

const ProductExpand = () => {

    const product = usePreviewProduct((state) => state.data)
    const { isOpen, onOpen, onClose } = usePreviewProduct()
    const [showModal, setShowModal] = useState(isOpen)


    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    if (!isOpen) {
        return null
    }
    if (!product) {
        return null
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center z-30 bg-black/20'>
            <div className='rounded-xl shadow-sm bg-white w-[90%] lg:w-3/4 px-5 py-6'>
                <div className='flex justify-end'>
                    <button onClick={() => onClose()} className='rounded-full p-2 shadow-xl border hover:opacity-80'>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <div className='flex-1 flex '>
                        <Gallery images={product?.Image} />
                    </div>
                    <div className='flex flex-1 flex-col justify-center sm:justify-start '>
                        <div>
                            <h1 className='font-bold text-4xl'> {product?.name}</h1>
                            <p className='font-semibold text-xl pt-2'>{formatValueToReal.format(Number(product?.price))}</p>
                        </div>
                        <div className='border-b-2 py-2'></div>
                        <div className='flex gap-2 pt-4'>
                            <h1 className='font-semibold lg:text-lg'>Tamanho:</h1>
                            <p>{product?.size.value}</p>
                        </div>
                        <div className='flex gap-2 items-center pt-4'>
                            <h1 className='font-semibold lg:text-lg'>Cor:</h1>
                            <p
                                className='shadow-md'
                                style={{ border: 1, backgroundColor: `${product?.Color.value}`, width: 20, height: 20, borderRadius: 10 }}
                            >

                            </p>
                        </div>
                        <Infos produto={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductExpand

