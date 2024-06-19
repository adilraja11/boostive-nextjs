import React from 'react'
import { CategoryList } from './produktif-content/CategoryList'
import { ProduktifCard } from './reusable/ProduktifCard'

export const Produktif = ({categoryData, popularData}) => {
  return (
    <div>
        <section className='mt-10 px-6 py-12 md:px-12'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8'>Kategori</h1>
          <CategoryList categoryData={categoryData} />
        </section>
        <div className='divider'></div>
        <section className='px-6 pb-12 md:px-12'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-center mb-4'>Tools Populer</h1>
          <p className='text-1lg md:text-2lg xl:text-3lg text-inherit font-regular text-center tracking-tight mb-8'>Temukan pengetahuan baru dari tools populer</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-8'>
            {/* Filtering by biggest View on card */}
            {popularData
              .slice(0, 4)
              .map(({id, title, slug, description, featuredImage, categoryId, category}) => {
                return <ProduktifCard key={id} title={title} slug={slug} description={description} featuredImage={featuredImage} categoryId={categoryId} category={category} />
              })}
          </div>
        </section>
    </div>
  )
}
