import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
      <Footer />
    </>
  );
}
