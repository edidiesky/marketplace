"use client";
import React from "react";
import styled from "styled-components";

export default function ShippingInformation() {
  return (
    <div className="w-90 auto py-2 flex flex-col gap-4">
      <h2 className="text-6xl font-mono font-normal">Shipping information</h2>
      <div className="w-100 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Germany"
          className="input text-3xl text-dark"
        />
        <div className="grid grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="State / Country"
            className="input text-3xl text-dark"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="input text-3xl text-dark"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="PostalCode / ZIP"
            className="input text-3xl text-dark"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="input text-3xl text-dark"
          />
        </div>
      </div>
    </div>
  );
}
