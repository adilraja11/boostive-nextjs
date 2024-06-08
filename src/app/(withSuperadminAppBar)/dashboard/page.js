import { Dashboard } from "@/components/Dashboard";
import { API_URL } from "@/config/apiUrl";

async function getDataProduktif() {
  const requestData = await fetch(`${API_URL}/api/produktif`, {
    cache: 'no-store'
  });

  const {data} = await requestData.json();
  return data;
}

async function getRequestData() {
  const requestData = await fetch(`${API_URL}/api/kontribusi`, {
    cache: 'no-store'
});

  const {data} = await requestData.json();
  return data;
}

export default async function Home() {
  const produktifData = await getDataProduktif();
  const requestData = await getRequestData();

  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <Dashboard kontribusiMasuk={requestData} dataProduktif={produktifData} />
    </div>
  );
}
