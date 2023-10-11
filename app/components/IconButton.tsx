import { MouseEventHandler } from "react";

type IconButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    icon: React.ReactElement
}


const IconButton = ({ icon, onClick }: IconButtonProps) => {
    return (
        <button onClick={onClick} className="bg-white rounded-full p-4 shadow-sm hover:scale-110 transition">
            {icon}
        </button>
    )
}

export default IconButton