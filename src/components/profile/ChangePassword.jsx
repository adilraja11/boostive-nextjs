'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { API_URL } from '@/config/apiUrl';

export const ChangePassword = ({userId}) => {
    const router = useRouter();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPasssword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    }

    const handleChangeNewPassword = (e) => {
        setNewPasssword(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleClickModal = () => {
        document.getElementById(`change_password_${userId}`).showModal();
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", newPassword);

        if (!oldPassword || !newPassword || !confirmPassword) {
            toast.error('All field must be filled');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('New Password is not the same');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/users/pwd/${userId}`, {
                method: 'PATCH',
                body: formData
            });

            if (response.status === 401 || response.status === 404 || response.status === 500) {
                const { errorMessage } = await response.json();
                toast.error(errorMessage);
                return;
            };

            const {message} = await response.json();
            toast.success(message);

            document.cookie = 'token=; Path=/; Max-Age=0';
            router.push("/");
            window.location.replace(`${API_URL}/login`);

        } catch (error) {
            console.log(error);
        }

        document.getElementById(`change_password_${userId}`).open = false;
    }

  return (
    <>
        <button onClick={handleClickModal} className='link link-hover text-blue-600 flex items-center gap-2'><FontAwesomeIcon icon={faLock}/>Ubah Password</button>
        <dialog id={`change_password_${userId}`} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-xl">Ubah Password</h3>
                <div className='divider'></div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p>Password Saat Ini</p>
                        <input value={oldPassword} onChange={handleChangeOldPassword} type="password" placeholder='Masukkan Password saat ini'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Password Baru</p>
                        <input value={newPassword} onChange={handleChangeNewPassword} type="password" placeholder='Masukkan Password Baru'/>
                        <input value={confirmPassword} onChange={handleChangeConfirmPassword} type="password" placeholder='Confirm Password'/>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog" className='flex gap-2'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Batal</button>
                        <button onClick={handleSubmit} className="btn btn-primary">Simpan</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  )
}
