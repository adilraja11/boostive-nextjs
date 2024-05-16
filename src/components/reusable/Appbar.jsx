import React from 'react'
import Link from 'next/link'

export const Appbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 navbar drop-shadow-md bg-base-100 px-20'>
        <div className='flex gap-5'>
            <Link href={"/"} className='btn btn-ghost text-2xl font-bold text-primary'>BOOSTIVE</Link>
            <div className='flex gap-2'>
                <Link href={"/produktif"}><button>Produktif</button></Link>
                <Link href={"/tentang-kami"}><button>Tentang Kami</button></Link>
            </div>
        </div>
    </div>
  )
}
