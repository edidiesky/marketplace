"use client";
import React from "react";
import List from "./list";
import Banner from "@/components/common/Banner";
import Navbar from "@/components/common/Navbar";

export default function Menu() {
  return (
    <div className="flex column gap-6 relative">
      <Navbar/>
      <Banner type={'cart'} />
      <List />
    </div>
  );
}
