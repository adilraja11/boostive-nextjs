import { Dashboard } from "@/components/Dashboard";
import { API_URL } from "@/config/apiUrl";
import { cookies } from "next/headers";
import * as jose from "jose";

export const dynamic = "force-dynamic";

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

  let isLoggedIn = false;
  const cookieStore = cookies();

  // Logic untuk cek token
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookieStore.get('token')?.value;

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    isLoggedIn = true;
  } catch (_) {
    isLoggedIn = false;
  }

  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <Dashboard kontribusiMasuk={requestData} dataProduktif={produktifData} />
    </div>
  );
}
