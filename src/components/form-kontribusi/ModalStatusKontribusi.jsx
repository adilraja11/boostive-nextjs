'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const ModalStatusKontribusi = () => {
    const router = useRouter();

    const [contributorName, setContributorName] = useState('');
    const [contributorEmail, setContributorEmail] = useState('');

    const handleClickModal = () => {
        document.getElementById('check_status_kontribusi').showModal();
    }

    const handleChangeContributorName = (e) => {
        setContributorName(e.target.value);
    }

    const handleChangeContributorEmail = (e) => {
        setContributorEmail(e.target.value);
    }

    const handleSubmit = () => {
        if (!contributorName || !contributorEmail) {
            toast.error("All field must be filled");
            return;
        }

        router.push(`/status-kontribusi/${contributorName}/${contributorEmail}`);
    };
  return (
    <>
        <a href="#" onClick={handleClickModal} className="link link-hover text-blue-600">Periksa Status Kontribusi</a>
        <dialog id="check_status_kontribusi" className="modal">
            <div className="flex flex-col modal-box gap-4">
                <h3 className="font-bold text-lg">Periksa Status Kontribusi</h3>
                <div className="flex flex-col gap-2">
                    <label>Nama Anda</label>
                    <input value={contributorName} onChange={handleChangeContributorName} placeholder="Masukkan Nama Anda"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input value={contributorEmail} onChange={handleChangeContributorEmail} placeholder="name@gmail.com"></input>
                </div>
                <div className="modal-action">
                    <form method="dialog" className="flex gap-3">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Batal</button>
                        <button onClick={handleSubmit} className="btn btn-primary">Periksa</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  )
}
