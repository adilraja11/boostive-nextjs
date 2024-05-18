import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = () => {
  return (
    <div className='grid grid-cols-2 max-[500px]:grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8'>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
        <Link href={'/produktif/asdasdf'} className='flex items-center'>
            <div className='w-[48px] h-[48px] flex flex-shrink-0 justify-center items-center bg-[#F0EEB7] rounded-full md:w-16 md:h-16 sm:w-14 sm:h-14 overflow-hidden'>
                <Image 
                    width={48}
                    height={48}
                    src={'/category-icon/tk-cat-icon.png'} 
                    className='object-contain aspect-square rounded'></Image>
            </div>
            <div className='text-sm ms-4'>
                <p className='text-black font-semibold'>TK</p>
                <p className='text-neutral-500'>Taman Kanak-Kanak</p>
            </div>
        </Link>
    </div>
  )
}
