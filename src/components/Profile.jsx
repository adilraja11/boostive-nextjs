'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLock } from '@fortawesome/free-solid-svg-icons'
import { API_URL } from '@/config/apiUrl'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ChangePassword } from './profile/ChangePassword'

export const Profile = () => {
  const router = useRouter();

  const [profile, setProfile] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [fullName, setFullName] = useState('');
  const [gender,setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const imageUrl = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fprofiles%2F';

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
          setProfileImage(data.profileImage);
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

  function createProfileImagePreview(file) {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setProfileImagePreview(objectUrl);
      setProfileImage(file);
    }
  }

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeAdress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !gender) {
      toast.error('All field must be filled');
      return;
    }

    const formData = new FormData();

    formData.append("profileImage", profileImage)
    formData.append("fullName", fullName);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);

    try {
      const response = await fetch(`${API_URL}/api/users/${profile.id}`, {
        method: 'PATCH',
        body: formData
      });

      if (response.status === 401 || response.status === 404 || response.status === 500) {
        const { errorMessage } = await response.json();
        toast.error(errorMessage);
        return;
      }

      const {message} = await response.json();
      toast.success(message);

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-white shadow-sm shadow-gray-500 rounded-lg px-10 py-4 flex flex-col gap-4'>
      <div className="relative w-[150px]">
        {profileImagePreview 
          ? <Image width={150} height={150} src={profileImagePreview} className='rounded-full'></Image>
          : <Image width={150} height={150} src={`${imageUrl}${profileImage}`} className='rounded-full w-36 h-36 object-cover'></Image>
        }
          <div className='absolute bottom-0 right-0'>
            <button onClick={()=>document.getElementById('upload_profile_modal').showModal()} className='btn btn-circle btn-neutral'>
              <FontAwesomeIcon className='w-6 text-white' icon={faCamera}/>
            </button>
            <dialog id="upload_profile_modal" className="modal">
                <div className="modal-box">
                    <input 
                        type="file"
                        className="file-input file-input-bordered w-full"
                        onChange={(e) => createProfileImagePreview(e.target.files[0])} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
          </div>
      </div>
      <div className="flex flex-col gap-2">
          <label>Nama Lengkap</label>
          <input value={fullName} onChange={handleChangeFullName}></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Jenis Kelamin</label>
          <select value={gender} onChange={handleChangeGender} className="border-2 rounded-lg px-3 py-2">
              <option value={'MALE'}>Laki-laki</option>
              <option value={'FEMALE'}>Perempuan</option>
          </select>
      </div>
      <div className="flex flex-col gap-2">
          <label>Alamat</label>
          <textarea className="border-2 rounded-lg px-3 py-2" value={address} onChange={handleChangeAdress} rows={'3'}></textarea>
      </div>
      <div className="flex flex-col gap-2">
          <label>Nomor Telepon</label>
          <input value={phoneNumber} onChange={handleChangePhoneNumber} placeholder='08xx'></input>
      </div>
      <div className="flex flex-col gap-2">
          <label>Email</label>
          <input value={profile.email} disabled></input>
          <div className="divider"></div>
          <ChangePassword userId={profile.id}/>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary font-bold text-base mt-2">Simpan Perubahan</button>
    </div>
  )
}
