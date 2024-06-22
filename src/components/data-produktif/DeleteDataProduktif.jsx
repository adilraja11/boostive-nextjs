'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/config/apiUrl';
import toast from 'react-hot-toast';

export const DeleteDataProduktif = ({requestId, requestData}) => {
    const router = useRouter();

    const {contributorName, title} = requestData;

    const handleClickModal = () => {
        document.getElementById(`delete_modal_data_produktif_${requestId}`).showModal();
    }

    const handleSubmitDelete = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${API_URL}/api/produktif/${requestId}`, {
                method: 'DELETE',
            });
    
            if (response.status === 401 || response.status === 404 || response.status === 500) {
                const { errorMessage } = await res.json();
                toast.error(errorMessage);
                return;
            };

            const {message} = await response.json();
            toast.success(message);

            router.refresh();
        } catch (error) {
            console.log(error);
        }

        document.getElementById(`delete_modal_data_produktif_${requestId}`).open = false;
    }
  return (
    <>
        <button id='delete' aria-label='Delete kegiatan' onClick={handleClickModal} className='btn btn-sm btn-error text-white'><FontAwesomeIcon icon={faTrashCan}/></button>
        <dialog id={`delete_modal_data_produktif_${requestId}`} className="modal">
            <div className="modal-box">
                <h1 className="font-bold text-xl">Hapus Kontribusi?</h1>
                <div className='divider'></div>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Nama Kegiatan    : </p>
                    <p>{title}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Kontributor  : </p>
                    <p>{contributorName}</p>
                </div>
                <div className="modal-action">
                    <form method="dialog" className='flex gap-2'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Batal</button>
                        <button onClick={handleSubmitDelete} className="btn btn-error text-white">Hapus</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  )
}
