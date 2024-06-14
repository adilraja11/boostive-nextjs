import { FormKontribusiPage } from "@/components/form-kontribusi/FormKontribusiPage";
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
    <FormKontribusiPage categoryData={categoryData} />
  );
}
