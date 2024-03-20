"use client";
import Card from "@/components/common/Card";
import Image from "next/image";
import TableCards from "@/components/common/TableCard";
import { Table } from "@/components/common/TableStyles";
import { menudata } from "@/data/menu";
import React from "react";
import styled from "styled-components";
import ShippingInformation from "./shippingInformation";

export default function List() {
  return (
    <ListContent style={{ padding: "6rem 0" }}>
      <div className="w-90 auto wrapper items-start">
        <div className="w-100 flex flex-col gap-4">
          <div className="w-100 flex flex-col gap-4">
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th className="font-mono font-normal text-5xl">
                        Product
                      </th>
                      <th className="font-mono font-normal text-5xl">Price</th>
                      <th className="font-mono font-normal text-5xl">
                        Quantity
                      </th>
                      <th className="font-mono font-normal text-5xl">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {menudata.slice(0, 1)?.map((x) => {
                      return <TableCards x={x} key={x?._id} />;
                    })}
                  </tbody>
                </table>
              </div>
            </Table>
          </div>
          <ShippingInformation />
        </div>
        <div className="w-100 min-h-[30rem] flex flex-col p-8 relative gap-4">
          <div className="absolute h-100 w-100 bg-[#000] z-[15] opacity-[.7]"></div>
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/04/slider72x-scaled.jpg"
            className="w-100 h-100 absolute object-cover z-10"
          />
          <div className="w-100 p-8 h-100 z-20">
            <div className="w-90 py-2 auto flex flex-col gap-24">
              {/* cart total */}
              <h3 className="text-5xl font-mono text-white">
                Cart total : 1 item
              </h3>
              {/* subtotal */}
              <div className="w-100 flex items-center justify-between">
                <h4 className="text-3xl font-mono text-white">Subtotal</h4>
                <h4 className="text-3xl font-sans text-white">$300</h4>
              </div>

              <div className="w-100 flex items-center justify-between">
                <h4 className="text-3xl font-mono text-white">Subtotal</h4>
                <h4 className="text-3xl text-end font-sans text-white">
                  Flat rate:
                  <br />
                  $39.00
                  <br />
                  Shipping to <br /> Nigeria
                </h4>
              </div>

              {/* // total */}
              <div className="w-100 flex items-center justify-between">
                <h4 className="text-3xl font-mono text-white">Subtotal</h4>
                <h4 className="text-3xl font-sans text-white">$300</h4>
              </div>

              <div className="p-8 text-2xl text-center hover:bg-[#fff] hover:text-[#BDA16B] cursor-pointer font-work uppercase bg-[#BDA16B] font-normal text-white">
                proceed to checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </ListContent>
  );
}

const ListContent = styled.div`
  width: 100%;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-gap: 5rem;
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }
`;
