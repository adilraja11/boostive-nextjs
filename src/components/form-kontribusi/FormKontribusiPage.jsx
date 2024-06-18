'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FormKontribusi } from "@/components/FormKontribusi";
import { ModalStatusKontribusi } from "@/components/form-kontribusi/ModalStatusKontribusi";

import React from 'react'

export const FormKontribusiPage = ({categoryData}) => {
  return (
    <div className="bg-slate-100 py-4 grid justify-items-center">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        <Link href={'/'}>
          <FontAwesomeIcon className="h-6 w-6 mx-2" icon={faArrowLeftLong}/>
        </Link>
        <div className="bg-white rounded-lg border-2 mx-2 pb-4">
          <div className="flex flex-col items-center py-4">
            <h1 className="font-semibold text-3xl">Formulir Kontribusi</h1>
            <p>Bagikan tools bermanfaat kepada banyak orang.</p>
          </div>
          <div className="flex flex-col mx-4 gap-4">
            <div className="flex justify-between">
              <h1 className="font-semibold">Kontributor</h1>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <ModalStatusKontribusi />
            </div>
            <FormKontribusi categoryData={categoryData}/>
          </div>
        </div>
      </div>
    </div>
  )
}
