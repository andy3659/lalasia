import React from "react";
import Image from "next/image";
function Section_2() {
  return (
    <div className="mx-6 mt-[100px] lg:mx-[100px] lg:mt-[180px]">
      <div className="text-center text-sm font-bold leading-[130%] text-secondary lg:text-left lg:text-lg">
        Our Mission
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:items-baseline">
        <div className="flex flex-1 flex-col">
          <div className="mt-[8px] text-2xl font-bold leading-[130%] lg:text-[44px] xl:mt-[14px]">
            Our team dedicated to help find smart home product
          </div>
          <div className="mt-[30px] flex max-w-[498px] justify-between gap-5 self-center lg:mt-[50px] lg:gap-[50px] xl:self-start">
            <div className="flex flex-col text-center">
              <div className="text-2xl font-bold leading-[130p%] lg:text-[44px]">
                20+
              </div>
              <div className="mt-1 text-sm font-medium leading-[180%] text-paragraph lg:mt-[10px] lg:text-lg">
                Years Experience
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl font-bold leading-[130p%] lg:text-[44px]">
                483
              </div>
              <div className="mt-1 text-sm font-medium leading-[180%] text-paragraph lg:mt-[10px] lg:text-lg">
                Happy Client
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl font-bold leading-[130p%] lg:text-[44px]">
                150+
              </div>
              <div className="mt-1 text-sm font-medium leading-[180%] text-paragraph lg:mt-[10px] lg:text-lg">
                Project Finished
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex flex-1 flex-col gap-[20px] lg:mt-[60px] lg:gap-[30px] xl:mt-0">
          <div className="flex gap-[25px]">
            <div className="relative h-11 w-11 flex-shrink-0 lg:h-[62px] lg:w-[62px]">
              <Image
                src={"/pages/about-us/about-us-mission-icon-1.svg"}
                layout="fill"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold leading-[130%] lg:text-[26px]">
                24/7 Supports
              </div>
              <div className="mt-4 text-sm font-medium leading-[180%] text-paragraph lg:text-lg xl:max-w-[507px]">
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.
              </div>
            </div>
          </div>
          <div className="flex gap-[25px]">
            <div className="relative h-11 w-11 flex-shrink-0 lg:h-[62px] lg:w-[62px]">
              <Image
                src={"/pages/about-us/about-us-mission-icon-2.svg"}
                layout="fill"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold leading-[130%] lg:text-[26px]">
                Free Consultation
              </div>
              <div className="mt-4 text-sm font-medium leading-[180%] text-paragraph lg:text-lg xl:max-w-[507px]">
                A free consultation is a one-on-one interaction or conversation
                given freely to share one's thoughts and discuss possible
              </div>
            </div>
          </div>
          <div className="flex gap-[25px]">
            <div className="relative h-11 w-11 flex-shrink-0 lg:h-[62px] lg:w-[62px]">
              <Image
                src={"/pages/about-us/about-us-mission-icon-3.svg"}
                layout="fill"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold leading-[130%] lg:text-[26px]">
                Overall Guarantee
              </div>
              <div className="mt-4 text-sm font-medium leading-[180%] text-paragraph lg:text-lg xl:max-w-[507px]">
                The comprehensive guarantee is required for import, warehousing,
                transit, processing and specific use.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
