import Banner from "@/components/common/Banner";
import Details from "./_components/Details";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
export default function Page({ params }) {
  return (
    <div className="relative">
      <Navbar />
      <Banner type={"type"} />
      {/* Cart Alert */}
      <Details menu={params.menuId} />
      <Footer />
    </div>
  );
}
