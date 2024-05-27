import { PengajuanKontribusi } from "@/components/PengajuanKontribusi";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Pengajuan Kontribusi</h1>
      <PengajuanKontribusi />
    </div>
  );
}
