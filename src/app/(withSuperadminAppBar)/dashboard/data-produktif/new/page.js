import { AddDataProduktif } from "@/components/data-produktif/AddDataProduktif";
import { API_URL } from "@/config/apiUrl";

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/categories`, {
    cache: 'no-store'
  });

  const {data} = await categories.json();
  return data;
}

export default async function Home() {
  const categoryData = await getCategories();

  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Tambah Kontribusi</h1>
      <AddDataProduktif categoryData={categoryData}/>
    </div>
  );
}
