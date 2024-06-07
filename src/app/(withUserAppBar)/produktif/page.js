import { Produktif } from "@/components/Produktif";
import { API_URL } from "@/config/apiUrl";
import { cookies } from "next/headers";

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
    <Produktif categoryData={categoryData} />
  );
}
