import Head from "next/head";
import { Inter } from "next/font/google";
import Homeindex from "@/components/home/Home";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import Menu from "@/components/our-takeout-menu/our-takeout-menu";
import { Billingindex, Links, PaymentIndex } from "@/components/checkout";

const inter = Inter({ subsets: ["latin"] });

export default function Root() {
    const [index, setIndex] = useState(1);
    return (
        <>
            <Head>
                <title>Checkout - Restaurant</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="BillingWrapperCenter">
                <Links index={index} setIndex={setIndex} />
                {index === 0 && <Billingindex />}
                {index === 1 && <PaymentIndex />}
            </div>
            <Menu />

        </>
    );
}