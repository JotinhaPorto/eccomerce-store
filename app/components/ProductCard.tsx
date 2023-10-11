'use client'
import { Product } from "@/types/types"
import Image from "next/image"
import Price from "./Price"
import IconButton from "./IconButton"
import { GiExpand } from 'react-icons/gi'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { usePreviewProduct } from "@/hooks/usePreviewProduct"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/useCart"

type ProductCardProps = {
    item: Product
}

const ProductCard = ({ item }: ProductCardProps) => {
    const { push } = useRouter()
    const usePreview = usePreviewProduct()
    const Cart = useCart()
    const handleClickProduct = () => {
        push(`/produtos/${item.id}`)
    }

    const onOpenPreviewProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        usePreview.onOpen(item)
    }

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        Cart.add(item)
    }
    return (
        <div onClick={handleClickProduct} className="border group rounded-xl p-3 bg-white cursor-pointer hover:shadow ">
            <div className="relative aspect-square bg-gray-100 rounded-lg">
                <Image
                    fill
                    alt="..."
                    src={item.Image?.[0].url}
                    className="aspect-square object-cover rounded "
                />
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-4 w-full">
                    <div className="flex justify-center gap-x-3">
                        <IconButton
                            onClick={onOpenPreviewProduct}
                            icon={<GiExpand className="w-6 h-6" />}
                        />
                        <IconButton
                            onClick={addToCart}
                            icon={<AiOutlineShoppingCart className="w-6 h-6" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">{item.categorias.name}</p>
                <Price value={item.price} />
            </div>
        </div>
    )
}

export default ProductCard