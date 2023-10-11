'use client'
import { useEffect, useState } from 'react'
import GalleryItem from './GalleryItem'
import { Images } from '@/types/types'
import Image from 'next/image'

type GalleryProps = {
    images?: Images[]
}

const Gallery = ({ images }: GalleryProps) => {

    const [selectedImage, setSelectedImage] = useState<Images | null>(null)

    const handleCick = (selected: Images) => {
        setSelectedImage(selected)
    }
    useEffect(() => {
        if (images && images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);
    return (

        <div className='flex w-full flex-col items-center '>
            <div className=' aspect-square relative w-[90%] lg:w-[70%]  sm:rounded-lg overflow-hidden '>
                <Image
                    fill
                    src={selectedImage?.url}
                    alt=""
                    className=" object-center object-cover rounded-lg"
                />
            </div>
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block ">
                <div className="grid grid-cols-4 gap-5 lg:gap-0 lg:place-items-center">
                    {images?.map((image) => (
                        <GalleryItem
                            key={image.id}
                            image={image}
                            isSelected={selectedImage?.id === image?.id}
                            onClick={() => handleCick(image)}
                        />
                    ))}
                </div >
            </div>
        </div>
    )
}

export default Gallery
