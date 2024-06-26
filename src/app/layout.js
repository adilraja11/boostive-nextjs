import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Provider } from "@/components/provider";

const poppins = Poppins({  
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  style: ['italic', 'normal'],
  display: 'swap',
});

export const metadata = {
  title: "Boostive App",
  description: "Akses semua tools produktif dengan mudah yang dapat meningkatkan kreatifitasmu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
