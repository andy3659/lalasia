import React from "react";
import Image from "next/image";
function SliderItem({ data }) {
  return (
    <div className="lg:h-full lg:pb-[50px]">
      <div className="relative min-h-[200px] w-full lg:h-full lg:min-h-[400px]">
        <Image src={data.image} layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#151411]/0 to-[#151411]/30 p-[14px] lg:p-[26px]">
          <div className="text-xs font-bold leading-[180%] text-screen opacity-70 lg:text-lg lg:font-medium">
            {data.category}
          </div>
          <div className="text-base font-bold leading-[130%] text-screen lg:text-[26px]">
            {data.title}
          </div>
          <div className="max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-[180%] text-screen opacity-70 lg:text-lg">
            {data.desc}
          </div>
          <div className="cursor-pointer text-xs font-bold leading-[180%] text-screen lg:text-lg lg:font-medium">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
