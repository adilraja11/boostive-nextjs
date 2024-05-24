import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const SuperadminAppbar = () => {
  return (
    <nav className="navbar bg-white border-solid border-2 border-gray-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label htmlFor="my-drawer" className="drawer-button">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                </label>
            </div>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center gap-2 btn btn-ghost text-base font-normal">
                <div className="avatar">
                    <Image
                        width={30}
                        height={30}
                        src={'/user-default.png'}
                        className='rounded-full'
                    ></Image>
                </div>
                <p>Superadmin</p>
                <FontAwesomeIcon icon={faChevronDown} className='h-3'/>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href={'/profile'} className='text-base'>
                    <FontAwesomeIcon icon={faUser} className='h-4'/>
                    Profil
                    </Link></li>
                <li><Link href={'/login'} className='text-base'>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='h-4'/>
                    Keluar
                    </Link></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
