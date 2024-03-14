"use client";

import Card from "@/components/common/Card";
import { menudata } from "@/data/menu";
import React from "react";

export default function Related() {
  return (
    <div>
      <div className="flex w-100 column gap-2 flex-1">
        <div className="font-mono fs-26 uppercase text-light text-dark">
          Related products
        </div>
        <div className="wrapper w-100">
          {menudata.slice(0, 3).map((x, index) => {
            return <Card key={index} x={x} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
