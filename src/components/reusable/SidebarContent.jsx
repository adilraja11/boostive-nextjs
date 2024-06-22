'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHouse, faPaperPlane, faUpRightFromSquare, faUser, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from 'next/navigation'
import { API_URL } from '@/config/apiUrl'

export const SidebarContent = () => {
    const router = useRouter();

    function handleLogout() {
        document.cookie = 'token=; Path=/; Max-Age=0';
        router.push("/");
        window.location.replace(`${API_URL}/login`);
    }

  return (
    <ul className="menu w-80 min-h-full bg-base-200 text-base-content flex gap-3">
        {/* Sidebar content here */}
        <li><Image src={"/logo.png"} alt='Boostive Logo' width={170} height={40}></Image></li>
        <ul>
            <li>
                <Link href={"/dashboard"}>
                <FontAwesomeIcon className="h-5" icon={faChartLine}/>
                <h1 className="text-lg">Dashboard</h1>
                </Link>
            </li>
            <li>
                <Link href={"/"}>
                <FontAwesomeIcon className="h-5" icon={faHouse}/>
                <h1 className="text-lg">Beranda</h1>
                </Link>
            </li>
        </ul>
        <li><h1>DATA PRODUKTIF</h1></li>
        <ul>
            <li>
                <Link href={'/dashboard/pengajuan-kontribusi'}>
                <FontAwesomeIcon className="h-5" icon={faPaperPlane}/>
                <h1 className="text-lg">Kontribusi</h1>
                </Link>
            </li>
            <li>
                <Link href={"/dashboard/data-produktif"}>
                <FontAwesomeIcon className="h-5" icon={faUpRightFromSquare}/>
                <h1 className="text-lg">Data Produktif</h1>
                </Link>
            </li>
        </ul>
        <li><h1>AKUN SAYA</h1></li>
        <ul>
            <li>
                <Link href={'/dashboard/profile'}>
                <FontAwesomeIcon className="h-5" icon={faUser}/>
                <h1 className="text-lg">Profil</h1>
                </Link>
            </li>
            <li>
                <Link href={"#"} onClick={handleLogout}>
                <FontAwesomeIcon className="h-5" icon={faArrowRightFromBracket}/>
                <h1 className="text-lg">Keluar</h1>
                </Link>
            </li>
        </ul>
    </ul>
  )
}
