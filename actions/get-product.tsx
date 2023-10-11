import { Product } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/produtos`

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${Url}/${id}`)

    return res.json()
}

export default getProduct