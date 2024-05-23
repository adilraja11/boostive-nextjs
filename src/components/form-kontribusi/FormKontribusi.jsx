import React from 'react'

export const FormKontribusi = () => {
  return (
    <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <label>Nama Anda</label>
            <input placeholder="Masukkan Nama Anda"></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Email</label>
            <input placeholder="name@gmail.com"></input>
        </div>
        <h1 className="font-semibold">Data Produktif</h1>
        <div className="flex flex-col gap-2">
            <label>Kategori</label>
            <select className="border-2 rounded-lg px-3 py-2">
                <option disabled selected>Pilih Kategori</option>
                <option>TK</option>
                <option>SD</option>
                <option>SMP</option>
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label>Nama Kegiatan</label>
            <input placeholder="Masukkan Nama Kegiatan"></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Tautan</label>
            <input placeholder="https://example.com/"></input>
        </div>
        <div className="flex flex-col gap-2">
            <label>Deskripsi</label>
            <textarea className="border-2 rounded-lg px-3 py-2" placeholder="Masukkkan Deskripsi" rows={'5'}></textarea>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold">8 + 8</h1>
            <input placeholder="Hasil dari 8 + 8"></input>
        </div>
        <button className="btn btn-primary font-bold text-base">Kirim</button>
    </form>
  )
}
