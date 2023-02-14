import React from "react";
import Image from "next/image";
function Section_1() {
  return (
    <div className="mx-6 mt-[50px] flex flex-col items-center justify-center lg:mx-[100px] lg:mt-[100px]">
      <div className="text-[26px] font-bold leading-[130%] lg:text-[64px]">
        About Us
      </div>
      <div className="mt-5 max-w-[600px] text-center text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </div>
      <div className="relative mt-[30px] aspect-[25/11] w-full lg:mt-[50px]">
        <Image src={"/pages/about-us/about-us-video.png"} layout="fill" />
      </div>
    </div>
  );
}

export default Section_1;
