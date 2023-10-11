'use client'
import { Category } from '@/types/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



type mainNavProps = {
    data: Category[]
}
const MainNav = ({ data }: mainNavProps) => {

    const pathName = usePathname()
    const routes = data.map((item) => ({
        href: `/categorias/${item.id}`,
        label: item.name,
        active: pathName === `/categorias/${item.id}`
    }))

    return (
        <nav className='flex items-center  ml-4 gap-2'>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={`${route.active ? 'text-black' : 'text-[#919091]'}`}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav