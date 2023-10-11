import { Outdoor as OutdoorT } from "@/types/types"

type OutdoorProps = {
    data: OutdoorT
}

const Outdoor = ({ data }: OutdoorProps) => {
    console.log(data)
    return (
        <div className="overflow-hidden rounded w-full ">
            <div
                className="aspect-square overflow-hidden md:aspect-[2.4/1] bg-cover relative rounded-md"
                style={{ backgroundImage: `url(${data?.imageSrc})` }}
            >
                <div className="h-full w-full flex justify-center items-center">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outdoor