import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const UserAppbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 navbar bg-white border-solid border-2 border-gray-100">
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={"/"} className='text-base'>Beranda</Link></li>
                    <li><Link href={"/produktif"} className='text-base'>Produktif</Link></li>
                    <li><Link href={"/tentang-kami"} className='text-base'>Tentang Kami</Link></li>
                </ul>
            </div>
            <Link href={"/"} className='btn btn-ghost'>
                <Image src={"/logo.png"} alt='Boostive Logo' width={170} height={40}></Image>
            </Link>
        </div>
        <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href={"/"} className='text-base'>Beranda</Link></li>
                <li><Link href={"/produktif"} className='text-base'>Produktif</Link></li>
                <li><Link href={"/tentang-kami"} className='text-base'>Tentang Kami</Link></li>
            </ul>
        </div>
    </nav>
  )
}
