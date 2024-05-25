'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FormKontribusi } from "@/components/FormKontribusi";

export default function Home() {
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
              <a href="#" onClick={() => document.getElementById('check_status_kontribusi').showModal()} className="link link-hover text-blue-600">Periksa Status Kontribusi</a>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="check_status_kontribusi" className="modal">
                <div className="flex flex-col modal-box gap-4">
                  <h3 className="font-bold text-lg">Periksa Status Kontribusi</h3>
                  <div className="flex flex-col gap-2">
                    <label>Nama Anda</label>
                    <input placeholder="Masukkan Nama Anda"></input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input placeholder="name@gmail.com"></input>
                  </div>
                  <div className="modal-action">
                    <form method="dialog" className="flex gap-3">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Batal</button>
                      <button className="btn btn-primary">Periksa</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <FormKontribusi />
          </div>
        </div>
      </div>
    </div>
  );
}
