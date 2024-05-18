import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProduktifCard = () => {
  return (
    <div className='card bg-base-100 shadow-xl border-solid border-t-0 border-x-0 border-2 border-gray-200'>
        <figure className='max-h-52'>
        <Image 
            width={326}
            height={326}
            src={'/default.png'}></Image>
        </figure>
        <div className='card-body items-center text-center'>
        <h2 className='card-title'>mBlock</h2>
        <p className='mb-0 lc-2'>desksdasda aks djk asd</p>
        <span className='bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-full'>SD</span>
        <div className='divider'></div>
        <div className='flex flex-wrap'>
            <Link href={'/produktif/assda/mbloc'} className='flex'>
            <p className='mr-2'>Detail</p>
            <Image
                width={24}
                height={24}
                src={'/category-icon/detail-icon.png'}></Image>
            </Link>
        </div>
        </div>
    </div>
  )
}
