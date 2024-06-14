import { DataProduktif } from "@/components/DataProduktif";
import { API_URL } from "@/config/apiUrl";

async function getDataProduktif() {
  const requestData = await fetch(`${API_URL}/api/produktif`, {
    cache: 'no-store'
  });

  const {data} = await requestData.json();
  return data;
}

export default async function Home() {
  const produktifData = await getDataProduktif();

  return (
    <div className="flex flex-col w-full max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Data Produktif</h1>
        <button className="btn btn-primary max-w-xs">Add Data Produktif</button>
      </div>
      <DataProduktif produktifData={produktifData} />
    </div>
  );
}
