import Banner from "@/components/common/Banner";
import Details from "./_components/Details";
import Footer from "@/components/common/Footer";

export default function Page({ params }) {
  return (
    <>
      <Banner type={"type"} />
      <Details menu={params.menuId} />
      <Footer />
    </>
  );
}
