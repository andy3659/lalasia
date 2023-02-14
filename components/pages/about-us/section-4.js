import React from "react";
import Image from "next/image";
function Section_4() {
  return (
    <div className="mt-[100px] flex flex-col items-start justify-between px-6 lg:mt-[180px] lg:flex-row lg:items-center lg:px-[100px]">
      <div className="max-w-[394px] text-2xl font-bold leading-[130%] lg:text-[44px]">
        Are you interested work with us?
      </div>
      <div className="mt-4 flex cursor-pointer flex-row items-center bg-primary py-[15px] px-[30px] text-sm font-bold leading-[130%] text-screen lg:mt-0 lg:text-lg">
        Learn More
        <div className="relative ml-[18px] h-[25px] w-[25px]">
          <Image
            src="/pages/index/arrow-right.svg"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}

export default Section_4;
