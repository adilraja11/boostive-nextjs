import React from 'react'
import Image from 'next/image'
import { HeroAboutUs } from './aboutus-content/HeroAboutUs'
import { VisiMisiSection } from './aboutus-content/VisiMisiSection';
import { CapstoneTeam } from './aboutus-content/CapstoneTeam';

const capstoneListData = [
  {
    id: 1,
    srcImage: '/team/akmal.png',
    name: 'Hafizhuddin Akmal',
    university: 'Universitas Padjadjaran'
  },
  {
    id: 2,
    srcImage: '/team/adil.png',
    name: 'Muhammad Adil Raja Saputra',
    university: 'Universitas Diponegoro'
  },
  {
    id: 3,
    srcImage: '/team/jessica.png',
    name: 'Jessica Kristina Hutasoit',
    university: 'Universitas Sumatera Utara'
  },
  {
    id: 4,
    srcImage: '/team/fatwa.png',
    name: 'Fatwa Aulia',
    university: 'Politeknik Negeri Banyuwangi'
  },

];

export const AboutUs = () => {
  return (
    <div>
      <HeroAboutUs />
      <VisiMisiSection />
      <section className='px-6 pb-12 md:px-12'>
        <h1 className='text-center text-1xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-8'>Tim Capstone</h1>
        <CapstoneTeam capstoneData={capstoneListData}/>
      </section>
    </div>
  )
}
