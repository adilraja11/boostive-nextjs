import Image from "next/image";
import { API_URL } from "@/config/apiUrl";

async function getResourceDetail(resourceSlug) {
  const response = await fetch(`${API_URL}/api/produktif/slugify/${resourceSlug}`, {
    cache: 'no-store'
  });

  const {data} = await response.json();
  return data;
}

export default async function Home({params}) {
  const resourceDetail = await getResourceDetail(params.resourceSlug);
  const imageUrl = 'https://pub-798a103be026442c82d91a50a5a41f0b.r2.dev/boostive-nextjs%2Fresources%2F';

  return (
    <section className="mt-20 px-6 pb-12 md:px-12">
      <div className="flex flex-col gap-4 place-items-center mx-auto">
        <div style={{backgroundColor: resourceDetail.category.backgroundColor}} className="text-md font-medium mr-2 px-2.5 py-0.5 rounded-full">Kategori {resourceDetail.category.name}</div>
        <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">{resourceDetail.title}</h1>
        <span style={{backgroundColor: resourceDetail.category.backgroundColor}} className="h-1.5 w-96 rounded-full lg:w-1/3"></span>
        <Image
          alt={`Gambar Kegiatan ${resourceDetail.title}`}
          width={326}
          height={326}
          src={`${imageUrl}${resourceDetail.featuredImage}`}
          className="object-cover md:object-scale-down xl:max-w-6xl"
        ></Image>
        <div className="xl:max-w-6xl">
          <h1 className="text-lg font-semibold">Deskripsi</h1>
          <p className="text-justify">{resourceDetail.description}</p>

          <h1 className="text-lg font-semibold mt-4">Link Kegiatan :</h1>
          <a
            href={`${resourceDetail.linkUrl}`}
            target="_blank"
          >{resourceDetail.linkUrl}</a>
        </div>
      </div>
    </section>
  );
}
