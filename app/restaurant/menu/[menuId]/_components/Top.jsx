"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCart, BiMinus, BiPlus, BiCheck } from "react-icons/bi";

export default function Top() {
  return (
    <div>
      {/* cart Alert */}
      <div className="w-90 mb-4 auto min-h-24 p-12 flex px-8 items-center justify-between border border-[rgba(0,0,0,.4)]">
        <div className="flex items-center text-3xl text-grey font-sans">
          <BiCheck fontSize={"30px"} />
          Kung Pao Chicken” has been added to your cart.
        </div>

        <div className="flex items-center justify-end gap-2">
          <Link
            href={"/restaurant/cart/"}
            className="flex text-3xl font-sans items-center justify-end gap-1"
          >
            <BiCart fontSize={"30px"} />
            View cart
          </Link>
        </div>
      </div>
      <div className="w-100 mt-20 topWrapper flex">
        <div className="topleft flex-1">
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/01/menu262x-600x687.jpg"
            className="w-100 h-100"
          />
        </div>
        <div className="topright flex-1">
          <div className="flex HeroRightC column gap-4 auto">
            <div className="font-mono h1 text-white">California Wraps</div>
            <h4 className="fs-18 family2 text-light text-white">
              Tristique tempus condimentum diam donec. Condimentum ullamcorper
              sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam
              scelerisque netus viverra dui pretium pulvinar. Commodo morbi
              amet.
            </h4>
            <div className="w-100 flex items-center gap-2">
              <div className="w-[200px] cursor-pointer flex items-center h-20 border border-[#Fff]">
                <span className="h-100 flex-[.4] text-4xl flex justify-center items-center text-white">
                  <BiPlus />
                </span>

                <span className="h-100 text-4xl justify-center flex border-r border-l border-[#Fff] items-center flex-1 text-white">
                  1
                </span>
                <span className="h-100 flex-[.4] flex justify-center items-center text-4xl text-white">
                  <BiMinus />
                </span>
              </div>
              <button
                className="btn text-dark btn-2 family1 uppercase text-white text-light fs-14 py-1"
                style={{ padding: "1.8rem" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
