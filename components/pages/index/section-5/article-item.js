import React from "react";
import Image from "next/image";
import Link from "next/link";
function ArticleItem({ data, i }) {
  return (
    <Link href="#">
      <a className="flex">
        <div className="relative min-h-[110px] min-w-[110px] lg:min-h-[260px] lg:min-w-[260px]">
          <Image
            src={data.image}
            layout="fill"
            objectFit="cover"
            priority={i == 1}
          />
        </div>
        <div className="ml-[26px] flex flex-col justify-center">
          <div className="text-xs font-bold leading-[180%] text-paragraph lg:text-lg lg:font-medium">
            {data.category}
          </div>
          <div className="mt-1 text-base font-bold leading-[130%] lg:mt-[21px] lg:text-2xl">
            {data.title}
          </div>
          <div className="hidden max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium leading-[180%] text-paragraph lg:mt-[14px] lg:block">
            {data.desc}
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex">
              <div className="relative h-[18px] w-[18px] overflow-hidden rounded-full lg:h-7 lg:w-7">
                <Image src={data.avatar} layout="fill" />
              </div>
              <div className="ml-[10px] text-xs font-bold leading-[130%] lg:text-sm">
                {"By " + data.name}
              </div>
            </div>
            <div className="hidden text-sm font-medium leading-[180%] text-paragraph lg:block">
              {data.date}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ArticleItem;
