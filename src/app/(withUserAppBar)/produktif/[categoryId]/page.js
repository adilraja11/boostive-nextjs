import { HeroProduktif } from "@/components/produktif-content/HeroProduktif";
import { ProduktifCard } from "@/components/reusable/ProduktifCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <HeroProduktif />
      <section className="z-10 mt-[-350px] sm:mt-[-310px] md:mt-[-150px] mx-4 sm:mx-6  md:mx-12 mb-6">
        <div className="grid grid-cols-2 max-[500px]:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
          {/* Add New Produktif */}
          <div className='card bg-base-100 shadow-xl border-solid border-t-0 border-x-0 border-2 border-gray-200'>
            <figure className='mx-4 my-8 h-36'>
              <Image
                width={48}
                height={48}
                src={'/category-icon/add-cat-icon.png'}></Image>
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>Tambah Produktif Baru</h2>
              <p className='mb-0'>Usulkan produktif baru untuk kategori Belum Terkategori</p>
              <span className='bg-red-100 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-full'>Belum Dikategorikan</span>
              <div className='divider'></div>
              <div className='flex flex-wrap'>
                  <Link href={'/formulir-kontribusi'} className='flex'>
                  <p className='mr-2'>Usulkan</p>
                  <Image
                      width={24}
                      height={24}
                      src={'/category-icon/usulkan-icon.png'}></Image>
                  </Link>
              </div>
            </div>
          </div>
          {/* List Produktif by Category */}
          <ProduktifCard />
          <ProduktifCard />
          <ProduktifCard />
          <ProduktifCard />
          <ProduktifCard />
        </div>
      </section>
    </div>
  );
}
