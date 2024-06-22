'use client'

import Image from "next/image";
import toast from 'react-hot-toast'
import { API_URL } from "@/config/apiUrl";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";

export const UpdateDataProduktif = ({resourceDetail, categoryData}) => {
    const router = useRouter();

    const [featuredImage, setFeaturedImage] = useState(resourceDetail.featuredImage); // store the file object
    const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
    const [categoryId, setCategoryId] = useState(resourceDetail.categoryId);
    const [title, setTitle] = useState(resourceDetail.title);
    const [linkUrl, setLinkUrl] = useState(resourceDetail.linkUrl);
    const [description, setDescription] = useState(resourceDetail.description);

    const imageUrl = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fresources%2F';

    function createFeaturedImagePreview(file) {
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setFeaturedImagePreview(objectUrl);
            setFeaturedImage(file);
        }
    }

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryId || !title || !linkUrl || !description) {
            toast.error('All field must be filled');
            return;
        }

        const formData = new FormData();

        formData.append("featuredImage", featuredImage); 
        formData.append("categoryId", categoryId);
        formData.append("title", title);
        formData.append("linkUrl", linkUrl);
        formData.append("description", description);

        try {
            const response = await fetch(`${API_URL}/api/produktif/${resourceDetail.id}`, {
                method: "PATCH",
                body: formData
            });
    
            if (response.status === 401 || response.status === 404 || response.status === 500) {
                const { errorMessage } = await response.json();
                toast.error(errorMessage);
                return;
            }
    
            const {message} = await response.json();
            toast.success(message);

            router.push("/dashboard/data-produktif");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='bg-white shadow-sm shadow-gray-500 rounded-lg px-10 py-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
            <p>Nama Kontributor</p>
            <input aria-label="Nama Kontributor" type="text" value={resourceDetail.contributorName} disabled />
        </div>
        <div className='flex flex-col gap-2'>
            <p>Email Kontributor</p>
            <input aria-label="Email Kontributor" type="text" value={resourceDetail.contributorEmail} disabled />
        </div>
        <div className="divider"></div>
        <div className="relative w-[150px]">
            {featuredImagePreview ? <Image alt={`Pratinjau Gambar Kegiatan Terbaru`} width={326} height={326} src={featuredImagePreview}></Image> : <Image alt={`Gambar Kegiatan Semula`} width={326} height={326} src={`${imageUrl}${featuredImage}`}></Image>}
            <div className='absolute bottom-0 right-0'>
                <button aria-label="Unggah Gambar Kegiatan Baru" onClick={()=>document.getElementById('upload_image_modal').showModal()} className='btn btn-circle btn-neutral'>
                <FontAwesomeIcon className='w-6 text-white' icon={faCamera}/>
                </button>
                <dialog id="upload_image_modal" className="modal">
                    <div className="modal-box">
                        <input
                            aria-label="File"
                            type="file"
                            className="file-input file-input-bordered w-full"
                            onChange={(e) => createFeaturedImagePreview(e.target.files[0])} />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
      </div>
      <div className="flex flex-col gap-2">
          <label>Kategori</label>
          <select aria-label="Pilih kategori kegiatan" className="border-2 rounded-lg px-3 py-2" value={categoryId} onChange={handleChangeCategory}>
            <option disabled selected value="Pilih Kategori">Pilih Kategori</option>
            {categoryData.map((data) => {
                return <option key={data.id} value={data.id}>{data.name}</option>
            })}
          </select>
      </div>
      <div className="flex flex-col gap-2">
          <label for="nama-kegiatan">Nama Kegiatan</label>
          <input id="nama-kegiatan" type='text' placeholder='Masukkan nama' value={title} onChange={handleChangeTitle}></input>
      </div>
      <div className="flex flex-col gap-2">
          <label for="tautan">Tautan</label>
          <input id="tautan" type='text' placeholder='https://example.com' value={linkUrl} onChange={handleChangeLinkUrl}></input>
      </div>
      <div className="flex flex-col gap-2">
          <label for="deskripsi">Deskripsi</label>
          <textarea id="deskripsi" className="border-2 rounded-lg px-3 py-2" rows={'3'} value={description} onChange={handleChangeDescription}></textarea>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary font-bold text-base">Simpan Perubahan</button>
    </div>
  )
}
