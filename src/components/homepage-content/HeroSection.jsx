import React from 'react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className='hero px-6 pt-20 pb-12 md:px-12 text-center lg:text-left' style={{backgroundColor: '#191D25'}}>
        <div className='hero-content text-left text-primary-content'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div className='mt-4 lg:mt-0'>
                    <h1 class="text-white text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8">Yuk, berkenalan dengan BOOSTIVE dan salurkan Ide Produktif kamu</h1>
                    <p class="text-white">Pilih kegiatan produktif kamu dan dapatkan ilmu baru dengan cara yan menyenangkan.</p>
                </div>
                <div className='mt-4 lg:mt-0'>
                    <Image src={'/hero/hero-beranda.png'} width={500} height={500} className='w-fit' alt='Ilustarsi Hero Boostive'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}
