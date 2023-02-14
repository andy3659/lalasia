import React from "react";
import Link from "next/link";
import Image from "next/image";
function Section_2() {
  return (
    <div className="mx-6 mt-[180px] lg:mx-[100px]">
      <div className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
        Portofolio
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="max-w-[491px] flex-[5] text-2xl font-bold leading-[130%] lg:text-[32px] xl:text-[44px]">
          Amazing project we&rsquo;ve done before
        </div>
        <div className="flex max-w-[505px] flex-col lg:max-w-[400px] xl:max-w-[505px]">
          <div className="flex-[5] text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.
          </div>
          <Link href="#">
            <a className="mt-5 text-sm font-bold leading-[130%] text-primary lg:text-lg">
              View Portofolio
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-[43px] grid grid-cols-1 gap-[30px] lg:mt-[50px] lg:grid-cols-12 lg:grid-rows-2">
        <div className="relative aspect-[4/5] lg:col-start-1 lg:col-end-6 lg:row-span-2 lg:aspect-auto lg:h-[632px]">
          <Image
            src={"/pages/services/services-portofolio-1.png"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#151411]/0 via-title/20 to-title/50 p-5 lg:p-[30px]">
            <div className="text-sm font-bold leading-[130%] text-screen lg:text-[26px]">
              Siska Kohl&rsquo;s Bedroom
            </div>
            <div className="mt-[6px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[180%] text-screen opacity-70 lg:text-lg">
              We start renovating her bedroom with minimalist concept and using
              combination white and wooden material
            </div>
            <Link href="#">
              <a className="mt-[6px] self-start text-xs font-medium leading-[180%] text-screen lg:mt-[14px] lg:text-lg">
                See Detail
              </a>
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full lg:col-start-6 lg:col-end-13 lg:aspect-auto">
          <Image
            src={"/pages/services/services-portofolio-2.png"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#151411]/0 via-title/20 to-title/50 p-5 lg:p-[30px]">
            <div className="text-sm font-bold leading-[130%] text-screen lg:text-[26px]">
              Jeruk Veldevana Living Room Design
            </div>
            <div className="mt-[6px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[180%] text-screen opacity-70 lg:text-lg">
              We start renovating her bedroom with minimalist concept and using
              combination white and wooden material
            </div>
            <Link href="#">
              <a className="mt-[6px] self-start text-xs font-medium leading-[180%] text-screen lg:mt-[14px] lg:text-lg">
                See Detail
              </a>
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] lg:col-start-6 lg:col-end-13 lg:aspect-auto">
          <Image
            src={"/pages/services/services-portofolio-3.png"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#151411]/0 via-title/20 to-title/50 p-5 lg:p-[30px]">
            <div className="text-sm font-bold leading-[130%] text-screen lg:text-[26px]">
              Cozy Co-working space
            </div>
            <div className="mt-[6px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium leading-[180%] text-screen opacity-70 lg:text-lg">
              We start renovating her bedroom with minimalist concept and using
              combination white and wooden material
            </div>
            <Link href="#">
              <a className="mt-[6px] self-start text-xs font-medium leading-[180%] text-screen lg:mt-[14px] lg:text-lg">
                See Detail
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
