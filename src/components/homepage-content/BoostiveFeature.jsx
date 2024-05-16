import React from 'react'
import Link from 'next/link'

export const BoostiveFeature = () => {
  return (
    <section className='px-6 pb-12 md:px-12'>
        <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tight mt-8 mb-8">Fitur Boostive</h1>
        <div className='grid grid-cols-1 min-[900px]:grid-cols-2 place-items-center gap-x-8 gap-y-8'>
            <div className='card w-80 sm:w-96 bg-base-100 shadow-xl'>
                <div className='card-body rounded-tl-3xl rounded-br-3xl bg-blue-200'>
                    <h1 className='card-title text-blue-800'>Produktivitas</h1>
                </div>
                <div className='card-body items-center text-center'>
                    <p className='text-justify pb-2'>Banyak tools produktif yang tersedia, gunakanlah waktu luang anda untuk melakukan hal-hal positif dan jadilah produktif!</p>
                    <Link className='w-full btn btn-info rounded-full text-white' href={'/produktif'}>Selengkapnya</Link>
                </div>
            </div>
            <div className='card w-80 sm:w-96 bg-base-100 shadow-xl'>
                <div className='card-body rounded-tl-3xl rounded-br-3xl bg-red-200'>
                    <h1 className='card-title text-red-800'>Kontribusi Data</h1>
                </div>
                <div className='card-body items-center text-center'>
                    <p className='text-justify pb-2'>Banyak tools produktif yang tersedia, gunakanlah waktu luang anda untuk melakukan hal-hal positif dan jadilah produktif!</p>
                    <Link className='w-full btn btn-error rounded-full text-white' href={'/'}>Selengkapnya</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
