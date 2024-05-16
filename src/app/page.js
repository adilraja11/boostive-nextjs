import { Homepage } from "@/components/Homepage";
import { Appbar } from "@/components/reusable/Appbar";
import { Footer } from "@/components/reusable/Footer";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Homepage />
      <Footer />
    </div>
  );
}
