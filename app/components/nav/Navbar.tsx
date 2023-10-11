import Link from 'next/link'
import MainNav from './MainNav'
import getCategories from '@/actions/get-categories'
import NavActions from './NavActions'

export const revalidate = 0

const Navbar = async () => {

    const categories = await getCategories()

    return (
        <div className='relative w-full bg-white px-5 py-4 h-16 border-b border'>
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <Link href='/' className='font-bold text-2xl'>LOJA</Link>
                    <MainNav data={categories} />
                </div>
                <NavActions />
            </div>
        </div>
    )
}

export default Navbar