import { Images } from "@/types/types"
import Image from "next/image"

type GallerySelectProps = {
    image: Images;
    onClick: () => void;
    isSelected: boolean;
}

const GalleryItem = ({ image, onClick, isSelected }: GallerySelectProps) => {

  

    return (
        <div
            className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white w-3/4 sm:w-[90%] lg:w-[70%] "
            onClick={onClick}
        >
            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                <Image
                    fill
                    src={image?.url}
                    alt=""
                    className="object-cover object-center"
                />
            </span>
            <span
                className={`absolute inset-0 rounded-md ring-2 ring-offset-2
                ${isSelected ? 'ring-black' : 'ring-transparent'} `}
            >
            </span>
        </div>
    )
}

export default GalleryItem