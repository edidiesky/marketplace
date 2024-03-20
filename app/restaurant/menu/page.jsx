import Footer from "@/components/common/Footer";
import Menu from "./_components/our-takeout-menu";
import Navbar from "@/components/common/Navbar";
export default function Root() {
  return (
    <div className="relative">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}
