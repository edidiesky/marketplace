import Head from "next/head";
import { Inter } from "next/font/google";
import HomeIndex from "./_components";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  return (
    <div className="relative">
      <Navbar />
      <HomeIndex />
    </div>
  );
}
