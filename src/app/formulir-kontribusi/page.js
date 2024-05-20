import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100 py-4 grid justify-items-center">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        <Link href={'/'}>
          <FontAwesomeIcon className="h-6 w-6 mx-2" icon={faArrowLeftLong}/>
        </Link>
        <div className="bg-white rounded-lg border-2 mx-2 pb-4">
          <div className="flex flex-col items-center py-4">
            <h1 className="font-semibold text-3xl">Formulir Kontribusi</h1>
            <p>Bagikan tools bermanfaat kepada banyak orang.</p>
          </div>
          <div className="flex flex-col mx-4 gap-4">
            <div className="flex justify-between">
              <h1 className="font-semibold">Kontributor</h1>
              <h1 className="text-blue-600">Periksa Status Kontribusi</h1>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
