'use client'
import { useCart } from "@/hooks/useCart"
import CartItem from "./components/CartItem"
import { useEffect, useState } from "react";
import OrderSummary from "./components/OrderSummary";
const page = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <div className='p-5'>
            <h1 className="text-3xl font-bold">Carrinho</h1>
            <div className="flex gap-x-20 flex-col lg:flex-row lg:justify-between">
                    {cart?.data.length === 0 && (
                        <div>NENHUM ITEM NO CARRINHO</div>
                    )}
                <ul>
                    {cart?.data.map((item) => (
                        <CartItem key={item.id} data={item} />
                    ))}
                </ul>
                <OrderSummary />
            </div>
        </div>
    )
}

export default page;