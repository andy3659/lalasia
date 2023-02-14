import React from "react";
import Image from "next/image";
function Section_3() {
  const teamMembers = [
    {
      image: "/pages/about-us/about-us-team-1.png",
      name: "Jesse Depp",
      position: "Founder & CEO",
    },
    {
      image: "/pages/about-us/about-us-team-2.png",
      name: "Margareth Carter",
      position: "COO",
    },
    {
      image: "/pages/about-us/about-us-team-3.png",
      name: "Andrew Taggart",
      position: "Developer",
    },
    {
      image: "/pages/about-us/about-us-team-4.png",
      name: "Grace Marie",
      position: "Manager",
    },
    {
      image: "/pages/about-us/about-us-team-5.png",
      name: "Jesse Depp",
      position: "Senior Designer",
    },
    {
      image: "/pages/about-us/about-us-team-6.png",
      name: "Jesse Depp",
      position: "Marketer",
    },
  ];
  return (
    <div className="mx-6 mt-[64px] lg:mx-[100px] lg:mt-[180px]">
      <div className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
        Our Team
      </div>
      <div className="mt-2 flex flex-col justify-between lg:mt-[14px] lg:flex-row">
        <div className="max-w-[250px] text-2xl font-bold leading-[130%] md:max-w-max lg:max-w-[548px] lg:text-[44px]">
          Meet our leading and strong team
        </div>
        <div className="mt-[20px] text-sm font-medium leading-[180%] text-paragraph lg:mt-0 lg:max-w-[420px] lg:text-lg xl:max-w-[505px]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
      <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[50px] lg:grid-cols-3 lg:gap-[30px]">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col">
            <div className="relative aspect-[197/180] w-full">
              <Image src={member.image} layout="fill" />
            </div>
            <div className="mt-[14px] text-sm font-bold leading-[130%] lg:mt-[26px] lg:text-[26px]">
              {member.name}
            </div>
            <div className="mt-[6px] text-xs font-medium leading-[180%] text-paragraph lg:text-lg">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_3;
