'use client'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { StatusKontribusiTable } from './StatusKontribusiTable';

export const StatusKontribusiPage = ({contributorName, decodedContributorEmail, statusKontribusiData}) => {
  return (
    <div className="bg-slate-100 h-screen py-4 grid justify-items-center">
      <div className="w-full max-w-3xl flex flex-col gap-4">
        <Link href={'/formulir-kontribusi'}>
          <FontAwesomeIcon className="h-6 w-6 mx-2" icon={faArrowLeftLong}/>
        </Link>
        <div className="bg-white rounded-lg border-2 mx-2 pb-4">
          <div className="flex flex-col items-center py-4 gap-2">
            <h1 className="font-semibold text-3xl">Status Kontribusi Anda</h1>
            {statusKontribusiData.length == 0
                ? <p className='text-lg text-center'>Hai <b>{contributorName}</b>, anda belum memiliki kontribusi, mulai bagikan tools bermanfaat disini.</p>
                : <p className='text-lg text-center'>Hai <b>{contributorName}</b>, terima kasih atas kontribusi Anda dalam berbagi tools bermanfaat.</p>}
          </div>
          <div className="flex flex-col mx-4 gap-4">
            <div className="flex gap-2">
              <h1>Email: </h1>
              <p>{decodedContributorEmail}</p>
            </div>
            <StatusKontribusiTable statusKontribusiData={statusKontribusiData}/>
          </div>
        </div>
      </div>
    </div>
  )
}
