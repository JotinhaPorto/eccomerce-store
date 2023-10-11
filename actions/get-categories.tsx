import { Category } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categorias`

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(Url);

    return res.json()
}

export default getCategories