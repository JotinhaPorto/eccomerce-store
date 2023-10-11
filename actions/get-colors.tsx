import { Color } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/cores`

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(Url);

    return res.json()
}

export default getColors