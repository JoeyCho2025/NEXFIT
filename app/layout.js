import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Link from "next/link";

const lato = localFont({
  src: "../public/fonts/LatoRegular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});
const notoSans = localFont({
  src: "../public/fonts/NotoSansJP.ttf",
  variable: "--font-notoSans",
  weight: "100 900",
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
      </body>
    </html>
  );
}
