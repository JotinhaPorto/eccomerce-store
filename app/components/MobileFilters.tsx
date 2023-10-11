'use client'
import { Color, Size } from "@/types/types"
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Filter from "./Filter";

type MobileFiltersProps = {
    color: Color[];
    size: Size[];
}
const MobileFilters = ({ color, size }: MobileFiltersProps) => {

    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className="lg:hidden py-4">
            <div>
                <button onClick={() => setIsOpen(true)} className="bg-black text-white py-2 px-4 rounded-full hover:opacity-80">Filtros +</button>
            </div>
            {isOpen && (
                <div className="inset-0 fixed z-40 bg-black/20">
                    <div className="bg-white relative ml-auto max-w-xs h-full w-full p-4">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)} className='rounded-full p-2 shadow-xl border hover:opacity-80'><AiOutlineClose /></button>
                        </div>
                        <Filter
                            nome="Tamanhos"
                            valorChave="sizeId"
                            data={size}
                        />
                        <Filter
                            nome="Cores"
                            valorChave="colorId"
                            data={color}
                        />
                    </div>
                </div>
            )}
        </div>
    )

}

export default MobileFilters