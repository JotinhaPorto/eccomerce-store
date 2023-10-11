'use client'
import { Color, Size } from "@/types/types"
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useEffect, useState } from "react";

type FilterProps = {
    data: Size[] | Color[]
    nome: string;
    valorChave: string;
}

const Filter = ({ data, nome, valorChave }: FilterProps) => {
    //  searchParams.get('sizeId') Ex: random?sizeId=123 vai retornar 123
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valorChave)
    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString())
        const query = {
            ...current,
            [valorChave]: id
        }
        if (current[valorChave] === id) {
            query[valorChave] = null
        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query: query
        }, { skipNull: true })
        router.push(url)
    }
    return (
        <div className="flex ">
            <div>

                <div className="py-2">
                    <h1 className="font-bold text-xl">{nome}</h1>
                </div>
                <hr className="py-2" />
                <div className="flex flex-wrap gap-2 max-w-xs w-full ">
                    {data.map((item) => (
                        <div className=" " key={item.id}>
                            <button
                                onClick={() => onClick(item.id)}
                                className={`p-2 rounded-lg border border-gray-500 hover:opacity-80 
                                ${selectedValue === item.id ? 'bg-black' : 'bg-white'}
                                ${selectedValue === item.id ? 'text-white' : 'text-black'}`}
                            >
                                {item.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter