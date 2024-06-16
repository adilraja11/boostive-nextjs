import { UpdateDataProduktif } from "@/components/data-produktif/UpdateDataProduktif";
import { API_URL } from "@/config/apiUrl";

async function getResourceDetail(resourceId) {
  const response = await fetch(`${API_URL}/api/produktif/${resourceId}`, {
    cache: 'no-cache'
  });

  const {data} = await response.json();
  return data;
}

async function getCategories() {
  const categories = await fetch(`${API_URL}/api/categories`, {
    cache: 'no-store'
  });

  const {data} = await categories.json();
  return data;
}

export default async function Home({params}) {
  const resourceDetail = await getResourceDetail(params.resourceId);
  const categoryData = await getCategories();
  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Edit Produktif</h1>
      <UpdateDataProduktif resourceDetail={resourceDetail} categoryData={categoryData} />
    </div>
  );
}
