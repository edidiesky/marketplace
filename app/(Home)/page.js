import Head from "next/head";
import { Inter } from "next/font/google";
import HomeIndex from "./_components";

const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  return (
    <>
      <HomeIndex />
    </>
  );
}
