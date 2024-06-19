'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/config/apiUrl'

export const SuperadminAppbar = () => {
    const router = useRouter();

    const [user, setUser] = useState(null);

    const imageUrl = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fprofiles%2F';

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    function handleLogout() {
        document.cookie = 'token=; Path=/; Max-Age=0';
        router.push("/");
        window.location.replace(`${API_URL}/login`);
    }

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
            {!user
                ? <div>Loading...</div> 
                : <>
                <div tabIndex={0} role="button" className="flex items-center gap-2 btn btn-ghost text-base font-normal">
                    <div className="avatar">
                        <div className='w-8 h-8 rounded-full overflow-hidden'>
                            <Image
                                width={75}
                                height={75}
                                src={`${imageUrl}${user.profileImage}`}
                                className='object-cover w-full h-full'
                            ></Image>
                        </div>
                    </div>
                    <p>{user.fullName}</p>
                    <FontAwesomeIcon icon={faChevronDown} className='h-3'/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={'/dashboard/profile'} className='text-base'>
                        <FontAwesomeIcon icon={faUser} className='h-4'/>
                        Profil
                        </Link></li>
                    <li><Link href={'#'} onClick={handleLogout} className='text-base'>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className='h-4'/>
                        Keluar
                        </Link></li>
                </ul>
                </>
            }
            </div>
        </div>
    </nav>
  )
}
