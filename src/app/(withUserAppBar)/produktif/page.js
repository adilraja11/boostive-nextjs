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

async function getPopularResource() {
  const resources = await fetch(`${API_URL}/api/produktif`, {
    cache: 'no-store'
  });

  const {data} = await resources.json();
  return data;
}

export default async function Home() {
  const categoryData = await getCategories();
  const popularData = await getPopularResource();

  return (
    <Produktif categoryData={categoryData} popularData={popularData} />
  );
}
