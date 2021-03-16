import Link from 'next/link'
import { render } from 'react-dom';
import { useState } from 'react';

const NavBar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div className="mb-3" >
            <nav className="flex lg:flex container items-center mx-auto py-4" >
                <div className="text-bold  text-2xl font-sans" id="brandLogo">LoremCompany</div>
                <div className="hidden lg:flex items-center text-1xl mx-auto" id="menuItem">
                    <Link href="/">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Beranda</a>
                    </Link>
                    <Link href="/produk">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Produk</a>
                    </Link>
                    <Link href="/layanan">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Layanan</a>
                    </Link>
                    <Link href="/blog">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Blog</a>
                    </Link>
                    <Link href="/tentang">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Tentang</a>
                    </Link>
                    <Link href="/kontak">
                        <a className="mx-4 hover:text-blue-700 hover:font-weight-bold">Kontak</a>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <button className="transition duration-300 ease-in-out border-blue-700 border focus:outline-none focus:opacity-80 rounded-full px-7 py-2 hover:opacity-70 text-blue-700 text-sm mr-1 hover:scale-110">Daftar</button>
                    <button className="transition duration-300 bg-blue-700 rounded-full px-7 py-2 hover:opacity-70 text-white text-sm focus:outline-none focus:opacity-80">Masuk</button>
                </div>
                <div className="ml-auto  md:hidden">
                    <button type="button" className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-400 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleClick}>
                        <span className="sr-only">Open main menu</span>
                        
                        {/* Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                            */}
                        <svg className={`${active ? 'block' : 'hidden'} h-6 w-61`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
{/*                         
                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                            */}
                        <svg className={`${!active ? 'block' : 'hidden'} h-6 w-61`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`${active?'hidden':''} md:hidden transition duration-300 ease-in-out`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3">
                        <Link href="/">
                            <a className="mx-auto block pb-3 text-center hover:text-blue-700 hover:font-weight-bold">Beranda</a>
                        </Link>
                        <Link href="/produk">
                            <a className="mx-auto block py-3 text-center hover:text-blue-700 hover:font-weight-bold">Produk</a>
                        </Link>
                        <Link href="/layanan">
                            <a className="mx-auto block py-3 text-center hover:text-blue-700 hover:font-weight-bold">Layanan</a>
                        </Link>
                        <Link href="/blog">
                            <a className="mx-auto block py-3 text-center hover:text-blue-700 hover:font-weight-bold">Blog</a>
                        </Link>
                        <Link href="/tentang">
                            <a className="mx-auto block py-3 text-center hover:text-blue-700 hover:font-weight-bold">Tentang</a>
                        </Link>
                        <Link href="/kontak">
                            <a className="mx-auto block py-3 text-center hover:text-blue-700 hover:font-weight-bold">Kontak</a>
                        </Link>
                    </div>
                    <hr/>
                    <div className="flex py-2">
                        <button className="transition duration-300 ml-auto ease-in-out border-blue-700 border focus:outline-none focus:opacity-80 rounded-full px-7 py-2 hover:opacity-70 text-blue-700 text-sm mr-1 hover:scale-110">Daftar</button>
                        <button className="transition duration-300 bg-blue-700 rounded-full px-7 py-2 hover:opacity-70 text-white text-sm focus:outline-none focus:opacity-80 mr-auto">Masuk</button>
                    </div>
                </div>
            <hr/>
        </div>
    );
}

export default NavBar;