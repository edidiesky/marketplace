
"use client"
import { Billingindex, Links, PaymentIndex } from "@/components/checkout";
import { useState } from "react";
export default function Root() {
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className="BillingWrapperCenter">
        <Links index={index} setIndex={setIndex} />
        {index === 0 && <Billingindex />}
        {index === 1 && <PaymentIndex />}
      </div>
    </>
  );
}
