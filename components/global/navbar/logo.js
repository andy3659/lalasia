import React from "react";
import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <a className="relative flex h-[32px] w-[99px] items-center lg:h-[30px] lg:w-[100px]">
        <Image
          src="/global/navbar/logo.svg"
          width={"100%"}
          height={"100%"}
        ></Image>
      </a>
    </Link>
  );
}

export default Logo;
