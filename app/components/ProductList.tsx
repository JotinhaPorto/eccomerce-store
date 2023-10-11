'use client'
import { Product } from "@/types/types"
import ProductCard from "./ProductCard";

type ProductListProps = {
    title: string;
    items: Product[]
}
const ProductList = ({ title, items }: ProductListProps) => {

    return (
        <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            {items.length === 0 &&
                <div>Nenhum produto encontrado</div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-2 gap-8 justify-center">
                {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductList