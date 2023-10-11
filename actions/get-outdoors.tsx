import { Outdoor } from "@/types/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/outdoors`

const getOutdoor = async (id: string): Promise<Outdoor> => {
    const res = await fetch(`${Url}/${id}`)

    return res.json()
}

export default getOutdoor