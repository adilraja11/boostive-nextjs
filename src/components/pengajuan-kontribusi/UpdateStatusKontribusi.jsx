'use client'

import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/config/apiUrl';
import toast from 'react-hot-toast';

export const UpdateStatusKontribusi = ({requestId, requestData}) => {
    const router = useRouter();
    
    const {contributorName, contributorEmail, categoryId, category, title, description, linkUrl, createAt} = requestData;
    const [status, setStatus] = useState(requestData.status);
    const [featuredImage, setFeaturedImage] = useState(null);

    const handleClickModal = () => {
        document.getElementById(`update_modal_kontribusi_${requestId}`).showModal();
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleChangeFeaturedImage = (e) => {
        setFeaturedImage(e.target.files[0]);
    }

    const handleSubmitUpdate = async () => {
        const formData = new FormData();
        formData.append("status", status);
        formData.append("featuredImage", featuredImage);

        try {
            const response = await fetch(`${API_URL}/api/kontribusi/${requestId}`, {
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

            router.refresh();
        } catch (error) {
            console.log(error);
        }

        document.getElementById(`update_modal_kontribusi_${requestId}`).open = false;
    }

  return (
    <>
        <button onClick={handleClickModal} className='btn btn-sm btn-primary text-white'><FontAwesomeIcon icon={faPenToSquare}/></button>
        <dialog id={`update_modal_kontribusi_${requestId}`} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-xl">Periksa Kontribusi</h3>
                <div className='divider'></div>
                <div className='flex justify-between'>
                    <div>
                        <p>{contributorName}</p>
                        <p>{contributorEmail}</p>
                    </div>
                    <p>{createAt}</p>
                </div>
                <div className='divider'></div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p>Kategori</p>
                        <select className="select border-2 rounded-lg px-3 py-2" disabled>
                            <option value={categoryId}>{category.name}</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Nama Kegiatan</p>
                        <input type="text" value={title} disabled />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Deskripsi</p>
                        <textarea value={description} className="textarea border-2 rounded-lg px-3 py-2" disabled rows={'4'}></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Tautan</p>
                        <a href={linkUrl} className='link-primary' target='_blank'>{linkUrl}</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Status</p>
                        <select className="border-2 rounded-lg px-3 py-2" value={status} onChange={handleChangeStatus}>
                            <option value={'Diproses'}>Diproses</option>
                            <option value={'Diterima'}>Diterima</option>
                            <option value={'Ditolak'}>Ditolak</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Gambar Kegiatan</p>
                        <input required type="file" name='featuredImage' onChange={handleChangeFeaturedImage} className="file-input file-input-bordered"/>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog" className='flex gap-2'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Batal</button>
                        <button onClick={handleSubmitUpdate} type='submit' className="btn btn-primary">Simpan</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  )
}
