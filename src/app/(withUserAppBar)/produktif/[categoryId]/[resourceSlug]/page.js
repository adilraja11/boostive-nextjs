import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-20 px-6 pb-12 md:px-12">
      <div className="flex flex-col gap-4 place-items-center mx-auto">
        <div className="bg-red-100 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-full">Kategori SD</div>
        <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">Vex Challenges</h1>
        <span className="h-1.5 w-96 bg-red-800 rounded-full lg:w-1/3"></span>
        <Image
          width={326}
          height={326}
          src={'/default.png'}
          className="object-cover md:object-scale-down xl:max-w-6xl"
        ></Image>
        <div className="xl:max-w-6xl">
          <h1 className="text-lg font-semibold">Deskripsi</h1>
          <p className="text-justify">VEX Challenges adalah game online baru di mana Anda harus menggunakan keahlian dan refleks Anda untuk menyelesaikan serangkaian tantangan. Gim ini dimainkan dalam serangkaian level, masing-masing dengan tantangan unik. Anda harus mencapai garis finis dalam waktu yang ditentukan untuk menyelesaikan suatu level. Anda juga bisa mendapatkan poin bonus dengan mengumpulkan bintang di jalan.</p>

          <h1 className="text-lg font-semibold mt-4">Link Kegiatan :</h1>
          <a
            href="https://scholar.google.com/"
            target="_blank"
          >google.com</a>
        </div>
      </div>
    </section>
  );
}
