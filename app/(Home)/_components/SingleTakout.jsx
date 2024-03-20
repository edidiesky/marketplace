import React from "react";
import Image from "next/image";
export default function SingleTakout() {
  return (
    <div className="w-100 min-h-[120vh] py-32 flex items-center justify-start relative gap-4">
      {/* <div className="absolute h-100 w-100 bg-[#000] z-[15] opacity-[.7]"></div> */}
      <Image
        alt=""
        width={0}
        sizes="100vw"
        height={0}
        loading="lazy"
        src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/01/menu372x.jpg"
        className="w-100 h-100 absolute object-cover z-10"
      />
      <div className="w-100 h-100 z-20">
        <div className="w-85 auto">
          <div className="w-100 md:w-[500px] p-8 py-16 bg-[#000] h-100 z-20">
            <div className="flex w-100 p-16 flex-col gap-20 auto">
              <div className="flex items-start justify-between">
                <h1 className="font-mono text-white">BRAISED ABALONE</h1>
                <h4 className="fs-18 family1 uppercase text-light text-white">
                  $30
                </h4>
              </div>
              <div className="w-100">
                <div className="border w-40 border-[#fff]"></div>
              </div>
              <h4 className="fs-20 family2 text-light text-white">
                Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
                scelerisque nisi in urna nulla.
              </h4>
              <div className="w-100 text-start">
                <button className="btn text-dark btn-2 family1 uppercase text-white text-light fs-16 py-2">
                  View takeout Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
