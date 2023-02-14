import React from "react";
import Image from "next/image";
function Section_1() {
  const cardContents = [
    {
      icon: "/pages/index/card-icon-1.svg",
      title: "Many Choices",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    },
    {
      icon: "/pages/index/card-icon-2.svg",
      title: "Fast and On Time",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    },
    {
      icon: "/pages/index/card-icon-3.svg",
      title: "Affordable Price",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    },
  ];
  return (
    <section className="mt-[100px] px-6 lg:mt-[180px] lg:px-[100px]">
      <span className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
        Benefits
      </span>
      <div className="mt-[14px] flex flex-col lg:flex-row lg:justify-between lg:gap-[300px]">
        <div className="text-2xl font-bold leading-[130%] lg:flex-1 lg:text-[44px]">
          Benefits when using <br className="lg:hidden" /> our services
        </div>
        <div className="pt-2 text-sm font-medium leading-[180%] text-paragraph lg:flex-1 lg:text-lg">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
      <div className="mt-[50px] flex flex-col gap-[25px] lg:flex-row">
        {cardContents.map((card, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-start bg-screen p-4 shadow-[0px_4px_100px_rgba(175,173,181,0.1)] lg:p-[26px]"
          >
            <div className="h-11 w-11 lg:h-[62px] lg:w-[62px]">
              <Image src={card.icon} width="100%" height="100%" />
            </div>
            <div className="mt-[14px] text-base font-bold leading-[130%] lg:mt-6 lg:text-2xl">
              {card.title}
            </div>
            <div className="mt-[6px] text-sm font-medium leading-[180%] text-paragraph lg:mt-5 lg:text-lg">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section_1;
