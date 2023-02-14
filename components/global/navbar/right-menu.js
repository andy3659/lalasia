import React from "react";
import Link from "next/link";
import Image from "next/image";

function RightMenu() {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link href="#">
        <a href="">
          <Image src="/global/navbar/bag.svg" width={30} height={30} />
        </a>
      </Link>
      <Link href="#">
        <a href="">
          <Image src="/global/navbar/user.svg" width={30} height={30} />
        </a>
      </Link>
    </div>
  );
}

export default RightMenu;
