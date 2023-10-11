import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Filter from "@/app/components/Filter"
import MobileFilters from "@/app/components/MobileFilters"
import Outdoor from "@/app/components/Outdoor"
import ProductList from "@/app/components/ProductList"

type pageProps = {
    params: {
        IdCategoria: string
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}
const page = async ({ params, searchParams }: pageProps) => {

    const produtos = await getProducts(({
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
        categoriasId: params.IdCategoria
    }))
    const tamanhos = await getSizes()
    const cores = await getColors()
    const categoriaAtual = await getCategory(params.IdCategoria)

    return (
        <div className="flex gap-2 py-4 px-3 flex-col">
            <div className=" text-center justify-center flex">
                <Outdoor data={categoriaAtual.outdoor} />
            </div>
            <div className="lg:flex">
                <MobileFilters
                    color={cores}
                    size={tamanhos}
                />
                <div className=" gap-10 hidden lg:flex lg:flex-col">
                    <Filter
                        nome='Tamanhos'
                        valorChave={'sizeId'}
                        data={tamanhos}
                    />
                    <Filter
                        nome='Cores'
                        valorChave={'colorId'}
                        data={cores}
                    />
                </div>
                <div className="flex flex-1">
                    <div className="gap-y-5 py-4 px-4 flex flex-col w-full">
                        <ProductList
                            title=''
                            items={produtos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page