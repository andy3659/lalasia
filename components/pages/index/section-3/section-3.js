import React from "react";
import Image from "next/image";
function Section_3() {
  return (
    <div className="mt-[100px] px-6 lg:mt-[180px] lg:px-[100px]">
      <div className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
        Our Product
      </div>
      <div className="mt-2 grid auto-rows-auto grid-cols-1 gap-x-[50px] lg:mt-[14px] lg:grid-cols-2">
        <div className="lg:row-span-2 lg:row-start-1">
          <div className=" text-2xl font-bold leading-[130%] lg:mt-[14px] lg:text-[44px]">
            Crafted by talented and high quality material
          </div>
          <div className="mt-4 text-sm font-medium leading-[180%] text-paragraph lg:mt-[50px] lg:text-lg">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </div>
          <a className="mt-[30px] inline-block w-full cursor-pointer bg-primary py-[15px] text-center text-lg font-bold leading-[130%] text-screen lg:mt-[50px] lg:w-auto lg:px-9">
            Learn More
          </a>
        </div>
        <div className="mt-[30px] flex justify-center gap-[20px] pt-2 md:gap-[55px] lg:mt-0 lg:justify-end lg:gap-[50px] lg:pb-[57px]">
          <div>
            <div className="text-[22px] font-bold leading-[130%] md:text-[32px] lg:text-[44px]">
              20+
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-[22px] font-bold leading-[130%] md:text-[32px] lg:text-[44px]">
              483
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
              Happy Client
            </div>
          </div>
          <div>
            <div className="text-[22px] font-bold leading-[130%] md:text-[32px] lg:text-[44px]">
              150+
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
              Project Finished
            </div>
          </div>
        </div>
        <div className="relative mt-[50px] min-h-[200px] md:min-h-[calc(100vw*53/100)] lg:row-start-3 lg:min-h-[260px]">
          <Image
            src="/pages/index/section3-image1.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative mt-5 min-h-[200px] md:min-h-[calc(100vw*53/100)] lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-0 lg:min-h-0">
          <Image
            src="/pages/index/section3-image2.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_3;
