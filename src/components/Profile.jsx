'use client'

import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLock } from '@fortawesome/free-solid-svg-icons'

export const Profile = () => {
  return (
    <div className='bg-white shadow-sm shadow-gray-500 rounded-lg px-10 py-4 flex flex-col gap-4'>
      <div className="relative w-[150px]">
          <Image
              width={150}
              height={150}
              src={'/user-default.png'}
              className='rounded-full'
          ></Image>
          <div className='absolute bottom-0 right-0'>
            <button className='btn btn-circle btn-neutral'>
              <FontAwesomeIcon className='w-6 text-white' icon={faCamera}/>
            </button>
          </div>
      </div>
      <div className="flex flex-col gap-2">
          <label>Nama Lengkap</label>
          <input value={'Muhammad Adil Raja Saputra'}></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Jenis Kelamin</label>
          <select className="border-2 rounded-lg px-3 py-2">
              <option>Laki-laki</option>
              <option>Perempuan</option>
          </select>
      </div>
      <div className="flex flex-col gap-2">
          <label>Alamat</label>
          <textarea className="border-2 rounded-lg px-3 py-2" value={'Komplek Dewa Kembar Blok A/8'} rows={'3'}></textarea>
      </div>
      <div className="flex flex-col gap-2">
          <label>Nomor Telepon</label>
          <input placeholder='08xx'></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Email</label>
          <input value={'superadmin@gmail.com'} disabled></input>
          <div className="divider"></div>
          <a href="#" onClick={() => document.getElementById('change_password').showModal()} className="link link-hover text-blue-600 flex items-center gap-2">
            <FontAwesomeIcon icon={faLock}/>
            Ubah Password
          </a>
      </div>
      <button className="btn btn-primary font-bold text-base">Simpan Perubahan</button>
    </div>
  )
}
