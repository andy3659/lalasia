import React from "react";
import Image from "next/image";
function Section_1() {
  const servicesList = [
    {
      index: 1,
      title: "Furniture",
      desc: "At the ultimate smart home, you're met with technology before you even step through the front door. ",
    },
    {
      index: 2,
      title: "Home Decoration",
      desc: "Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings.",
    },
    {
      index: 3,
      title: "Kitchen Cabinet",
      desc: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. ",
    },
    {
      index: 4,
      title: "Interior Design",
      desc: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. ",
    },
    {
      index: 5,
      title: "Exterior Design",
      desc: "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.",
    },
    {
      index: 6,
      title: "Custom Furniture",
      desc: "With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs.",
    },
  ];
  return (
    <div className="mx-6 mt-[50px] flex flex-col items-center lg:mx-[100px] lg:mt-[100px]">
      <div className="max-w-[505px] flex-col">
        <div className="text-center text-[26px] font-bold leading-[130%] lg:text-[64px]">
          Services
        </div>
        <div className="text-center text-sm font-medium leading-[180%] text-paragraph lg:text-lg">
          The product crafted by talented crafter and using high quality
          material with love inside
        </div>
      </div>
      <div className="relative mt-[55px] w-full before:block before:h-0 before:w-0 before:pb-[calc(100%*0.44)] before:content-[''] lg:mt-[50px]">
        <Image
          src={"/pages/services/hero-image.png"}
          layout="fill"
          priority={true}
        />
      </div>
      <hr className="mt-[50px] hidden w-full border-[2px] border-solid border-[#f3f3f3] lg:block" />
      <div className="mt-[100px] grid grid-cols-1 gap-[30px] lg:mt-[50px] lg:grid-cols-3 lg:grid-rows-2">
        {servicesList.map((service, i) => (
          <div key={i}>
            <div className="text-[32px] font-bold leading-[130%] text-primary lg:text-[64px]">
              {"0" + service.index}
            </div>
            <div className="mt-[26px] text-sm font-bold leading-[130%] lg:text-2xl">
              {service.title}
            </div>
            <div className="mt-[6px] text-xs font-medium leading-[180%] text-paragraph lg:text-lg">
              {service.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_1;
