import React from 'react'
import Image from 'next/image'

export const HeroAboutUs = () => {
  return (
    <div className='hero rounded-bl-[150px] max-[425px]:rounded-bl-[50px] px-6 pt-20 pb-12 md:px-12 text-center lg:text-left' style={{backgroundColor: '#191D25'}}>
      <div className='hero-content text-left text-primary-content'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='mt-4 lg:mt-0'>
            <h1 className='text-2lg md:text-3lg xl:text-4lg text-red-300 font-medium tracking-tight mb-2'>Tentang Boostive</h1>
            <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-tight mb-4'>Apa sih Boostive itu?</h1>
            <p className='text-white'>Boostive adalah platform berbasis website yang menyediakan tools produktivitas dengan mengarahkan user ke sebuah website, aplikasi atau sebuah kegiataan lain.</p>
          </div>
          <Image alt='Ilustrasi Hero untuk Page tentang Kami' src={'/hero/hero-tentang-kami.png'} width={300} height={400} className='w-fit mb-4 lg:mb-0 rounded-lg shadow-lg'></Image>
        </div>
      </div>
    </div>
  )
}
