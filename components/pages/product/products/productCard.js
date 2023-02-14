import React from "react";
import Image from "next/image";
import Link from "next/link";
function ProductCard({ product, i }) {
  return (
    <Link key={i} href={"/product/" + product.name}>
      <a className="flex w-full flex-col">
        <div className="relative flex before:block before:h-0 before:w-0 before:pb-[calc(0.91*100%)] before:content-['']">
          <Image src={product.image} layout={"fill"} />
        </div>
        <div className="mt-[14px] text-xs font-bold leading-[130%] text-paragraph lg:mt-[26px] lg:text-lg">
          {product.category}
        </div>
        <div className="mt-[6px] text-sm font-bold leading-[130%] lg:mt-[14px] lg:text-[26px]">
          {product.name}
        </div>
        <div className="font-meidum mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-[180%] text-paragraph lg:mt-[6px] lg:text-lg">
          {product.desc}
        </div>
        <div className="mt-[14px] text-sm font-bold leading-[130%] lg:mt-[18px] lg:text-2xl">
          {"$ " + product.price}
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
