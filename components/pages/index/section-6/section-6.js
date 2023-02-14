import React from "react";
import Image from "next/image";
function Section_6() {
  return (
    <div className="mx-6 mt-[100px] flex flex-col items-start justify-between lg:mx-[100px] lg:mt-[180px] lg:flex-row lg:items-center">
      <div className="text-2xl font-bold leading-[130%] lg:max-w-md lg:text-[44px]">
        Join with me to get special discount
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

export default Section_6;
