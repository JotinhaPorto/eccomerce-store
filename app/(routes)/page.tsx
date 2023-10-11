import getOutdoors from "@/actions/get-outdoors"
import Outdoor from "../components/Outdoor"
import getProducts from "@/actions/get-products"
import ProductList from "../components/ProductList"

export const revalidate = 0
const page = async () => {
    const produtos = await getProducts({ isFeatured: true })
    const outdoor = await getOutdoors('650b6ba0536e5f5ef9323dae')
    return (
        <div className="px-5 py-8">
            <Outdoor data={outdoor} />
            <div className="gap-y-5 py-4 px-4 flex flex-col">
                <ProductList
                    title='Produtos em destaque'
                    items={produtos}
                />
                
            </div>

        </div>
    )
}

export default page