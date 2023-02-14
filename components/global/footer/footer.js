import React from "react";
import Logo from "../navbar/logo";
function Footer() {
  return (
    <div className="mx-6 mt-[50px] flex flex-col border-t-[1.5px] border-[#ECE4DE] py-6 lg:mx-[100px] lg:mt-[180px] lg:flex-row lg:py-[80px]">
      <div className="flex-1">
        <div>
          <Logo />
        </div>
        <div className="mt-5 text-lg font-medium leading-[180%] text-paragraph lg:mt-9 lg:text-[#000000]">
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </div>
      </div>
      <div className="mt-[30px] flex-1 lg:mt-0">
        <div className="flex">
          <div className="flex flex-1 flex-col items-start gap-3 lg:items-end lg:text-right">
            <div className="text-base font-bold leading-[130%] lg:text-xl">
              Product
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              New Arrival
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Best Selling
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Home Decor
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Kitchen set
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 lg:items-end lg:text-right">
            <div className="text-base font-bold leading-[130%] lg:text-xl">
              Services
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Catalog
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Blog
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              FaQ
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Pricing
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3 lg:items-end lg:text-right">
            <div className="text-base font-bold leading-[130%] lg:text-xl">
              Follow Us
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Facebook
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Instagram
            </div>
            <div className="text-sm font-medium leading-[180%] text-paragraph lg:text-lg lg:text-[#000000]">
              Twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
