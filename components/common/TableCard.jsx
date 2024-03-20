import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { BiCart, BiMinus, BiPlus, BiCheck } from "react-icons/bi";

import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
// import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
// import { getProduct, getUser } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function TableCards({ x, type }) {
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");
  const handleDeleteProduct = () => {};
  const handleEditProduct = () => {};
  return (
    <>
      {/* <Delete /> */}
      <tr key={x?._id}>
        {/* <td>{x?._id}</td> */}
        <td className="text-3xl text-grey">
          <div className="flex items-center gap-2">
            <div className="w-[150px]">
              {x?.image && (
                <img src={x?.image} alt="images" className="h-100 w-100" />
              )}
            </div>
            <span className="text-3xl text-dark">{x?.title}</span>
          </div>
        </td>
        <td className="text-3xl text-grey">${x?.price}</td>
        <td className="text-3xl text-grey">
          <div className="w-[160px] cursor-pointer flex items-center h-20 border border-[rgba(0,0,0,.5)]">
            <span className="h-100 flex-[.4] text-2xl font-sans font-medium flex justify-center items-center text-dark">
              <BiPlus />
            </span>

            <span className="h-100 text-2xl font-sans font-medium justify-center flex border-r border-l border-[rgba(0,0,0,.5)] items-center flex-1 text-dark">
              1
            </span>
            <span className="h-100 flex-[.4] flex justify-center items-center text-2xl font-sans font-medium text-dark">
              <BiMinus />
            </span>
          </div>
        </td>
        <td className="text-3xl text-grey">${x?.countInStock || 240}</td>
        {/* <td className="text-3xl text-grey">{x?.countInStock}</td> */}
      </tr>
    </>
  );
}
