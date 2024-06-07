import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = ({categoryData}) => {
    const urlImage = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fcategories%2F';
  return (
    <div className='grid grid-cols-2 max-[500px]:grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8'>
        {categoryData.map(({id, name, description, iconImage, backgroundColor}) => {
            return (
                <Link key={id} href={`/produktif/${id}`} className='flex items-center'>
                    <div style={{backgroundColor: backgroundColor}} className={`w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden`}>
                        <Image 
                            width={48}
                            height={48}
                            src={`${urlImage}${iconImage}`} 
                            className='object-contain aspect-square rounded'></Image>
                    </div>
                    <div className='text-sm ms-4'>
                        <p className='text-black font-semibold'>{name}</p>
                        <p className='text-neutral-500'>{description}</p>
                    </div>
                </Link>
            );
        })}
    </div>
  )
}
