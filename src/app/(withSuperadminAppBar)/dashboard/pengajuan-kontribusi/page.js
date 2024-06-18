import { PengajuanKontribusi } from "@/components/PengajuanKontribusi";
import { API_URL } from "@/config/apiUrl";

async function getRequestData() {
  const requestData = await fetch(`${API_URL}/api/kontribusi`, {
    cache: 'no-cache'
  });

  const {data} = await requestData.json();
  return data;
}

export default async function Home() {
  const requestData = await getRequestData();
  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Pengajuan Data Kontribusi</h1>
      <PengajuanKontribusi requestData={requestData} />
    </div>
  );
}
