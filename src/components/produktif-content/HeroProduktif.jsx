import React from 'react'
import Image from 'next/image'

export const HeroProduktif = ({categoryData}) => {
  return (
    <div className='hero pt-20 pb-12 md:px-12 text-center lg:text-left' style={{backgroundColor: '#191D25'}}>
        <div className='hero-content text-left text-primary-content'></div>
        <div className='grid md:grid-cols-2 items-center justify-center mb-6'>
            <div className='mb-12 mr-[-30px] md:mt-0 md:mb-8 xl:ml-40'>
                <h1 className='text-white text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-center'>{categoryData.description} ({categoryData.name})</h1>
            </div>
            <div className='mb-4 lg:mb-0'>
                <Image
                    width={190}
                    height={224}
                    className='w-fit ml-24'
                    src={'/hero/hero-produktif.png'}
                ></Image>
            </div>
        </div>
    </div>
  )
}
