import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHouse, faPaperPlane, faUpRightFromSquare, faUser, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

export const SidebarContent = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex gap-4">
        {/* Sidebar content here */}
        <Image src={"/logo.png"} alt='Boostive Logo' width={170} height={40}></Image>
        <div>
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
        </div>
        <h1>DATA PRODUKTIF</h1>
        <div>
        <li>
            <Link href={'/pengajuan-kontribusi'}>
            <FontAwesomeIcon className="h-5" icon={faPaperPlane}/>
            <h1 className="text-lg">Kontribusi</h1>
            </Link>
        </li>
        <li>
            <Link href={"/data-produktif"}>
            <FontAwesomeIcon className="h-5" icon={faUpRightFromSquare}/>
            <h1 className="text-lg">Data Produktif</h1>
            </Link>
        </li>
        </div>
        <h1>AKUN SAYA</h1>
        <div>
        <li>
            <Link href={'/profile'}>
            <FontAwesomeIcon className="h-5" icon={faUser}/>
            <h1 className="text-lg">Profil</h1>
            </Link>
        </li>
        <li>
            <Link href={"/login"}>
            <FontAwesomeIcon className="h-5" icon={faArrowRightFromBracket}/>
            <h1 className="text-lg">Keluar</h1>
            </Link>
        </li>
        </div>
    </ul>
  )
}
