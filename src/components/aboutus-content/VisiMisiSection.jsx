import React from 'react'

export const VisiMisiSection = () => {
  return (
    <section className='px-6 pt-12 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8'>
            <article>
                <h1 className='text-1lg md:text-2lg xl:text-3lg text-red-600 font-medium tracking-tight mb-2'>Visi Boostive</h1>
                <h1 className='text-1xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-4'>Indonesia Produktif</h1>
                <p className='text-1lg md:text-2lg xl:text-3lg text-inherit font-regular tracking-tight mb-2'>Boostive adalah platform berbasis website yang menyediakan tools produktivitas dengan mengarahkan user ke sebuah website, aplikasi atau sebuah kegiataan lain.</p>
            </article>
            <article>
                <h1 className='text-1lg md:text-2lg xl:text-3lg text-red-600 font-medium tracking-tight mb-2'>Misi Boostive</h1>
                <h1 className='text-1xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-4'>Untuk mengajak, menyedihkan, dan berbincang</h1>
                <p className='text-1lg md:text-2lg xl:text-3lg text-inherit font-regular tracking-tight mb-4'>Itulah misi kami. Dengan tampilan yang menarik dan mudah digunakan dapat membantu hari-hari kamu lebih produktif.</p>
            </article>
        </div>
        <div className='divider'></div>
    </section>
  )
}
