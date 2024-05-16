import React from 'react'
import Image from 'next/image'

export const TipsSection = () => {
  return (
    <section className='w-full flex flex-col flex-wrap items-center gap-8 px-6 pb-12 md:px-12'>
        <h1 className='text-center text-2xl md:text-3xl font-bold text-red-800 tracking-tight mt-2 mb-4'>Tahukah Kamu Manfaat Menjadi Orang Yang Produktif ?</h1>
        <div className='max-w-6xl md:grid md:grid-cols-2 md:gap-5'>
            <div className='flex justify-center'>
                <Image src={'/beranda/tips-1.png'} width={300} height={300}></Image>
            </div>
            <div className='flex flex-col justify-center mt-6'>
                <h2 className='text-lg font-bold'>Pintar Mengatur Waktu</h2>
                <p className='mt-2 text-base font-normal text-justify'>Orang yang produktif cenderung mampu menyelesaikan pekerjaan tepat pada waktunya. Ini karena mereka konsisten menjaga fokusnya ketika melakukan sesuatu, sehingga tidak mudah terdistraksi. Maka tak heran, apabila orang yang produktif senantiasa lihai dalam mengelola waktu yang mereka miliki. Alhasil, tak akan ada lagi waktu yang terbuang begitu saja.</p>
            </div>
        </div>
        <div className='max-w-6xl md:grid md:grid-cols-2 md:gap-5'>
            <div className='flex flex-col justify-center mt-6'>
                <h2 className='text-lg font-bold'>Memperoleh lebih banyak kesempatan</h2>
                <p className='mt-2 text-base font-normal text-justify'>Ketika seseorang sudah terbiasa menjalani hidup yang produktif, biasanya dia bakal sering mendapatkan kesempatan lebih untuk mencoba banyak hal lain. Inilah alasan yang membuat hidup tidak akan pernah terasa membosankan, karena selalu ada saja pilihan yang menarik untuk dikerjakan. Lalu, jika beruntung, peluang tersebut bisa menjadi potensi baru yang mungkin akan sangat berguna untuk ke depannya.</p>
            </div>
            <div className='flex justify-center'>
                <Image src={'/beranda/tips-2.png'} width={300} height={300}></Image>
            </div>
        </div>
        <div className='max-w-6xl md:grid md:grid-cols-2 md:gap-5'>
            <div className='flex justify-center'>
                <Image src={'/beranda/tips-3.png'} width={300} height={300}></Image>
            </div>
            <div className='flex flex-col justify-center mt-6'>
                <h2 className='text-lg font-bold'>Terhindar dari stres</h2>
                <p className='mt-2 text-base font-normal text-justify'>Stres dapat dipicu oleh beberapa faktor, salah satunya adalah overthinking, atau berpikir secara berlebihan. Sementara itu, kebahagiaan dan rasa puas timbul dari pikiran kita yang terpusat. Itulah sebabnya orang yang produktif imun terhadap serangan pikiran negatif, karena mereka selalu mencurahkan fokus pada satu tugas sebelum beralih ke tugas berikutnya. Jadi, sebisa mungkin jangan pernah membiarkan diri kita ini menganggur, tanpa melakukan sesuatu yang berarti. Sebab, saat kita diam terlalu lama, berbagai kekhawatiran bisa tiba-tiba mengusik pikiran.</p>
            </div>
        </div>
        <div className='max-w-6xl md:grid md:grid-cols-2 md:gap-5'>
            <div className='flex flex-col justify-center mt-6'>
                <h2 className='text-lg font-bold'>Kemampuan meningkat secara signifikan</h2>
                <p className='mt-2 text-base font-normal text-justify'>Jika kita ingin semakin mahir dalam suatu bidang tertentu, maka kita perlu meningkatkan produktivitas diri kita. Lalu, melakukan hal itu secara berulang-ulang, terjadwal, dan kontinu, tanpa mengenal kata bosan. Dengan semua upaya tersebut, maka otomatis kemampuan kita akan mengalami perkembangan sesuai dengan yang diharapkan. Inilah untungnya menjadi orang yang selalu berusaha produktif.</p>
            </div>
            <div className='flex justify-center'>
                <Image src={'/beranda/tips-4.png'} width={300} height={300}></Image>
            </div>
        </div>
        <div className='max-w-6xl md:grid md:grid-cols-2 md:gap-5'>
            <div className='flex justify-center'>
                <Image src={'/beranda/tips-5.png'} width={300} height={300}></Image>
            </div>
            <div className='flex flex-col justify-center mt-6'>
                <h2 className='text-lg font-bold'>Waktu luang yang tersedia lebih banyak</h2>
                <p className='mt-2 text-base font-normal text-justify'>Orang yang benar-benar produktif tahu kapan waktunya untuk rehat dan menikmati waktu luang. Setelah mereka mampu mencapai target, mereka akan memanjakan diri dengan beristirahat sejenak atau melakukan aktivitas lain yang menyenangkan. Dan, untungnya lagi, waktu luang yang mereka miliki biasanya jauh lebih panjang, karena pekerjaan mereka yang sebelumnya telah diselesaikan jauh dari deadline.</p>
            </div>
        </div>
    </section>
  )
}
