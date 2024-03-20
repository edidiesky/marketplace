"use client";
import React from "react";
import List from "./list";
import Banner from "@/components/common/Banner";

export default function Menu() {
  return (
    <div className="flex column gap-6">
      <Banner />
      <List />
    </div>
  );
}
