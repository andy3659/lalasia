import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="mt-[50px] flex flex-col items-center justify-center lg:mt-[100px]">
      <div className="relative text-center text-[26px] font-bold leading-[130%] lg:w-[724px] lg:text-[64px]">
        Discover Furniture With High Quality Wood
        <div className="absolute bottom-3 right-1 flex h-6 w-6 lg:bottom-[37px] lg:right-[13px] lg:h-[51px] lg:w-[51px]">
          <Image src="/pages/index/stars.svg" width={"100%"} height={"100%"} />
        </div>
      </div>
      <div className="leading[180%] relative mt-5 px-6 text-center text-sm font-medium text-paragraph lg:mt-[30px] lg:w-[796px] lg:text-lg">
        <div className="absolute left-[45px] bottom-[80px] flex h-[83px] w-[83px] lg:-left-[160px] lg:-bottom-[80px] lg:h-[260px] lg:w-[260px]">
          <Image
            src="/pages/index/arrow-spiral.svg"
            width={"100%"}
            height={"100%"}
          />
        </div>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi,
        <br className="hidden lg:block" /> adipiscing mauris non. Purus
        parturient viverra nunc, tortor sit laoreet. Quam tincidunt
        <br className="hidden lg:block" /> aliquam adipiscing tempor.
      </div>
      <div className="relative mt-[30px] w-full px-6 lg:mt-[92px]  lg:h-[480px] lg:px-[100px]">
        <div className="flex w-full items-center justify-between gap-[15px] bg-screen p-2 shadow-[0px_4px_80px_rgba(175,173,181,0.2)] lg:absolute lg:left-1/2 lg:w-[65%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-[15px]">
          <div className="bg-[url('/pages/index/search.svg')] bg-contain p-3 lg:h-8 lg:w-8" />
          <input
            type="text"
            placeholder="Search property"
            name="search"
            id="search"
            className="w-0 grow text-sm font-medium outline-0 lg:text-lg"
          />
          <button className="bg-primary px-[5%] py-[10px] text-lg font-bold leading-[130%] text-screen lg:px-[46px] lg:py-[15px]">
            Search
          </button>
        </div>
        <div className="relative -z-10 mt-[30px] h-[160px] lg:mt-0 lg:h-full lg:w-full">
          <Image
            src="/pages/index/Rectangle2.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
