"use client";
import Card from "@/components/common/Card";
import TableCards from "@/components/common/TableCard";
import { Table } from "@/components/common/TableStyles";
import { menudata } from "@/data/menu";
import React from "react";
import styled from "styled-components";

export default function List() {
  return (
    <ListContent style={{ padding: "6rem 0" }}>
      <div className="w-90 auto wrapper">
        <div className="w-100 flex flex-col gap-4">
          <Table>
            <div className="TableContainer">
              <table className="tableWrapper">
                <thead>
                  <tr>
                    <th className="font-mono font-normal text-5xl">Product</th>
                    <th className="font-mono font-normal text-5xl">Price</th>
                    <th className="font-mono font-normal text-5xl">Quantity</th>
                    <th className="font-mono font-normal text-5xl">Subtotal</th>
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
        <div className="w-100 flex flex-col p-8 bg-[#000] p gap-4"></div>
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
