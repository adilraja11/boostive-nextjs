import { Homepage } from "@/components/Homepage";
import { UserAppbar } from "@/components/reusable/UserAppbar";
import { Footer } from "@/components/reusable/Footer";

export default function Home() {
  return (
    <div>
      <UserAppbar />
      <Homepage />
      <Footer />
    </div>
  );
}
