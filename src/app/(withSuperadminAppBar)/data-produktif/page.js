import { DataProduktif } from "@/components/DataProduktif";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Data Produktif</h1>
        <button className="btn btn-primary max-w-xs">Add Data Produktif</button>
      </div>
      <DataProduktif />
    </div>
  );
}
