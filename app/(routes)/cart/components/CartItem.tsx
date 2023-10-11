import { formatValueToReal } from "@/app/components/Price"
import { useCart } from "@/hooks/useCart"
import { Product } from "@/types/types"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"

type CartItemProps = {
    data: Product
}
const CartItem = ({ data }: CartItemProps) => {
    const cart = useCart()
    const onRemove = () => {
        cart.remove(data.id)
    }

    return (
        <li className="flex gap-2 my-4 flex-col lg:flex-row relative border-b">
            <div className="flex aspect-square relative w-[60%] sm:w-[200px] my-2">
                <Image
                    fill
                    src={data.Image[0].url}
                    alt="..."
                    className="rounded-xl object-center object-cover"
                />
            </div>
            <div className="flex flex-col lg:flex-row flex-1 gap-2">
                <div className="flex flex-col min-w-[230px] break-words gap-2">
                    <h1 className="font-semibold text-3xl max-w-[230px] ">{data.name}</h1>
                    <p className="font-semibold">{formatValueToReal.format(Number(data.price))}</p>
                </div>
                <div className="flex gap-5 min-w-[230px]  justify-between">
                    <div className="flex gap-1 ">
                        <p className="text-gray-500">{data.Color.name}</p>
                        <span className="border h-6 border-slate-50"></span>
                        <p className="text-gray-500">{data.size.name}</p>
                    </div>
                    <div className="lg:static absolute bottom-16 right-0">
                        <button onClick={onRemove} className='rounded-full p-2 shadow-xl border hover:opacity-80 '>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem