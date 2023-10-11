import { Size } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/tamanhos`

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(Url);

    return res.json()
}

export default getSizes