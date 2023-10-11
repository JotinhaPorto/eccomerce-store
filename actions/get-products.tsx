import qs from 'query-string'

import { Product } from '@/types/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/produtos`
type Query = {
    categoriasId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoriasId: query.categoriasId,
            sizeId: query.sizeId,
            colorId: query.colorId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url)

    return res.json()
}

export default getProducts;
