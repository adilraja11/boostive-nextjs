import { Profile } from "@/components/Profile";

export default async function Home() {
  return (
    <div className="flex flex-col w-full max-w-5xl">
      <h1 className="text-2xl font-semibold mb-4">Profil</h1>
      <Profile />
    </div>
  );
}
