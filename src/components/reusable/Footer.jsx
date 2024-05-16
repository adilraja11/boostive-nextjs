import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div>
        <footer className='footer px-10 py-5 bg-base-200 text-base-content'>
            <div>
                <span className='footer-title'>Features</span>
                <Link href={'/'} className='link link-hover'>Beranda</Link>
                <Link href={'/produktif'} className='link link-hover'>Produktif</Link>
                <Link href={'/'} className='link link-hover'>Kontribusi</Link>
            </div>
            <div>
                <span className='footer-title'>Company</span>
                <Link href={'/tentang-kami'} className='link link-hover'>Tentang Kami</Link>
            </div>
        </footer>
        <footer className='footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300'>
            <div className='flex items-center gap-4'>
                <Image src={'/logo.png'} width={170} height={40} className='w-40 sm:w-32 md:w-36' alt='Boostive Logo'></Image>
                <p>Mengenal Tools Produktif melalui Kami</p>
            </div>
            <div className='md:place-self-center md:justify-self-end'>
                <Link href={'https://github.com/fatwaaulia/sib-dicoding-boostive.git'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.1 11.4.6.1.9-.3.9-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .6 2.6.5 3.3.4.1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.2-5.2-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.3-5.3 5.6.4.4.8 1.1.8 2.3v3.4c0 .3.3.7 1 .6 4.7-1.6 8-6.1 8-11.4C24 5.4 18.6 0 12 0zm0 17.5c-.9 0-1.6-.3-2.2-.9.2-.3.4-.5.7-.7.6-.5 1.4-.7 2.2-.7s1.6.3 2.2.8c.3.2.5.4.7.7-.6.6-1.3.9-2.2.9zm0-15c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4S2.6 17.1 2.6 12 6.8 2.6 12 2.6zm-3.3 10c.3.1.7.1 1 0 .3-.2.4-.6.2-1-.2-.3-.6-.4-1-.2-.3.2-.4.6-.2 1zm6.3 0c.3.1.7.1 1 0 .3-.2.4-.6.2-1-.2-.3-.6-.4-1-.2-.3.2-.4.6-.2 1z"/></svg></Link>
            </div>
        </footer>
    </div>
  )
}
