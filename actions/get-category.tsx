import { Category } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categorias`

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${Url}/${id}`);

    return res.json()
}

export default getCategory