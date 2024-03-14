"use client";
import React from "react";
import About from "./About";
import Critics from "./Critics";
import Experience from "./Experience";
import News from "./News";
import SingleTakout from './SingleTakout'
import TakeoutList from './TakeoutList'
import TakeoutMenu from './TakeoutMenu'
import Hero from "./Hero";
import Footer from "@/components/common/Footer";
import Copyright from "@/components/common/Copyright";

export default function HomeIndex() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Critics />
      <News />
      <TakeoutMenu />
      <TakeoutList />
      <SingleTakout />
      <Footer/>
      <Copyright/>
    </div>
  );
}
