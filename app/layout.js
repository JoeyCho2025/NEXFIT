import { Lato } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Link from "next/link";
import "@/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-notoSans",
  display: "swap",
});

export const metadata = {
  title: "NEXFIT",
  description: "NEXFIT官網",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${notoSans.variable}`}>
        <Navbar />
        <main className="flex">
          <Sidebar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
