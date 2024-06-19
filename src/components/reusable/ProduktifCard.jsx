import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProduktifCard = ({title, slug, description, featuredImage, categoryId, category}) => {
  const imageUrl = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fresources%2F';
  return (
    <div className='card bg-base-100 shadow-xl border-solid border-t-0 border-x-0 border-2 border-gray-200'>
        <figure className='min-h-52 max-h-52 shadow-md'>
        <Image
            className='h-full w-full object-cover'
            width={326}
            height={326}
            src={`${imageUrl}${featuredImage}`}></Image>
        </figure>
        <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p className='mb-0 line-clamp-3'>{description}</p>
        <span style={{backgroundColor: `${category.backgroundColor}`}} className='text-md font-medium mr-2 px-2.5 py-0.5 rounded-full'>{category.name}</span>
        <div className='divider'></div>
        <div className='flex flex-wrap'>
            <Link href={`/produktif/${categoryId}/${slug}`} className='flex'>
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
