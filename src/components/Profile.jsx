'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLock } from '@fortawesome/free-solid-svg-icons'
import { API_URL } from '@/config/apiUrl'

export const Profile = () => {
  const [profile, setProfile] = useState(null);

  const [fullName, setFullName] = useState('');
  const [gender,setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = localStorage.getItem("user");
      if (profileData) {
        const user = JSON.parse(profileData);
  
        try {
          const response = await fetch(`${API_URL}/api/users/${user.id}`, {
            cache: 'no-store'
          });
          
          const {data} = await response.json();

          setProfile(data);
          setFullName(data.fullName);
          setGender(data.gender);
          setAddress(data.address);
          setPhoneNumber(data.phoneNumber);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchProfile();
  }, []);

  if(!profile) {
    return <div>Loading...</div>
  }

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
          <input value={fullName}></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Jenis Kelamin</label>
          <select value={gender} className="border-2 rounded-lg px-3 py-2">
              <option value={'MALE'}>Laki-laki</option>
              <option value={'FEMALE'}>Perempuan</option>
          </select>
      </div>
      <div className="flex flex-col gap-2">
          <label>Alamat</label>
          <textarea className="border-2 rounded-lg px-3 py-2" value={address} rows={'3'}></textarea>
      </div>
      <div className="flex flex-col gap-2">
          <label>Nomor Telepon</label>
          <input value={phoneNumber} placeholder='08xx'></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Email</label>
          <input value={profile.email} disabled></input>
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
