'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_URL } from '@/config/apiUrl'
import toast from 'react-hot-toast'
import random from 'random'

export const FormKontribusi = ({categoryData}) => {
    const [contributorName, setContributorName] = useState('');
    const [contributorEmail, setContributorEmail] = useState('');
    const [categoryId, setCategoryId] = useState('Pilih Kategori');
    const [title, setTitle] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [description, setDescription] = useState('');
    const [captcha, setCaptcha] = useState('');

    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);

    useEffect(() => {
        setFirstNumber(random.int(1,9));
        setSecondNumber(random.int(1,9));
    }, []);

    const handleChangeName = (e) => {
        setContributorName(e.target.value);
    };
    
    const handleChangeEmail = (e) => {
        setContributorEmail(e.target.value);
    };
    
    const handleChangeCategory = (e) => {
        setCategoryId(e.target.value);
    };
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    
    const handleChangeLinkUrl = (e) => {
        setLinkUrl(e.target.value);
    };
    
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleChangeCaptcha = (e) => {
        setCaptcha(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contributorName || !contributorEmail || !categoryId || !title || !linkUrl || !description || !captcha) {
            toast.error('All field must be filled');
            return;
        }

        if (firstNumber + secondNumber !== parseInt(captcha)) {
            toast.error('Captcha must be corrected');
            return;
        }

        const formData = new FormData();
        formData.append("contributorName", contributorName);
        formData.append("contributorEmail", contributorEmail);
        formData.append("categoryId", categoryId);
        formData.append("title", title);
        formData.append("linkUrl", linkUrl);
        formData.append("description", description);

        const response = await fetch(`${API_URL}/api/kontribusi`, {
            method: "POST",
            body: formData
        });

        if (response.status === 401 || response.status === 404 || response.status === 500) {
            const { errorMessage } = await response.json();
            toast.error(errorMessage);
            return;
        }

        const {message} = await response.json();
        toast.success(message);

        setContributorName('');
        setContributorEmail('');
        setCategoryId('Pilih Kategori');
        setTitle('');
        setLinkUrl('');
        setDescription('');
        setCaptcha('');
    }
    
  return (
    <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <label>Nama Anda</label>
            <input type='text' placeholder="Masukkan Nama Anda" value={contributorName} onChange={handleChangeName}></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type='text' placeholder="name@gmail.com" value={contributorEmail} onChange={handleChangeEmail}></input>
        </div>
        <h1 className="font-semibold">Data Produktif</h1>
        <div className="flex flex-col gap-2">
            <label>Kategori</label>
            <select className="border-2 rounded-lg px-3 py-2" value={categoryId} onChange={handleChangeCategory}>
                <option disabled selected value="Pilih Kategori">Pilih Kategori</option>
                {categoryData.map((data) => {
                    return <option key={data.id} value={data.id}>{data.name}</option>
                })}
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label>Nama Kegiatan</label>
            <input type='text' placeholder="Masukkan Nama Kegiatan" value={title} onChange={handleChangeTitle}></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Tautan</label>
            <input type='text' placeholder="https://example.com/" value={linkUrl} onChange={handleChangeLinkUrl}></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Deskripsi</label>
            <textarea className="border-2 rounded-lg px-3 py-2" type='text' value={description} onChange={handleChangeDescription} placeholder="Masukkkan Deskripsi" rows={'5'}></textarea>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold">{firstNumber} + {secondNumber}</h1>
            <input placeholder={`Hasil dari ${firstNumber} + ${secondNumber}`} value={captcha} onChange={handleChangeCaptcha}></input>
        </div>
        <button className="btn btn-primary font-bold text-base" onClick={handleSubmit}>Kirim</button>
    </form>
  )
}
