"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const navbarList = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "History",
    path: "",
  },
  {
    title: "Team",
    path: "",
  },
  {
    title: "Menu",
    path: "",
  },
  {
    title: "Takeout",
    path: "",
  },
  {
    title: "Reservation",
    path: "",
  },
];
export default function Navbar() {
  return (
    <NavbarContainer className="flex item-center">
      <div className="w-90 px-16 auto family2 flex justify-between gap-3 item-center">
        <div className="flex item-center gap-2">
          <img
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2021/04/logo-svg.svg"
            alt=""
          />
        </div>
        <div className="w-100 flex item-center justify-end gap-4 lg:gap-16">
          {navbarList?.map((x, index) => {
            return (
              <Link
                key={index}
                className="font-work text-3xl text-grey uppercase"
                href={x.path}
              >
                {x.title}
              </Link>
            );
          })}
        </div>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4000;
`;
