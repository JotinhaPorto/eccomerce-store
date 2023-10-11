import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import Gallery from "@/app/components/Gallery/Gallery"
import { formatValueToReal } from "@/app/components/Price"
import ProductInfos from "@/app/components/ProductInfos"
import ProductList from "@/app/components/ProductList"
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const revalidate = 0;
type pageProps = {
    params: { IdProdutos: string }
}
const page = async ({ params }: pageProps) => {
    const produto = await getProduct(params.IdProdutos)
    const produtosSugeridos = await getProducts({
        categoriasId: produto.categorias.id
    })

    const produtosSugeridosSemProdutoAtual = produtosSugeridos.filter((item) => item.id !== produto.id)

    return (
        <div>
            <div className="gap-y-5 py-4 px-6 flex">
                <div className="flex flex-1 max-w-3xl">
                    <Gallery images={produto.Image} />
                </div>
                <ProductInfos produto={produto} />

            </div>

            <div className="gap-y-5 py-4 px-4 flex flex-col">
                <ProductList
                    title='Produtos semelhantes'
                    items={produtosSugeridosSemProdutoAtual}
                />
            </div>
        </div>
    )
}

export default page