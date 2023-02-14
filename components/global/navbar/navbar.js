import React, { useState } from "react";
import Menu from "./menu/menu";
import Logo from "./logo";
import RightMenu from "./right-menu";
import Image from "next/image";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative z-10 max-w-[1440px] items-center justify-between border-b-2 border-solid border-[#f3f3f3] bg-screen px-6 py-5 lg:flex lg:h-[120px] lg:py-0 lg:px-[100px]">
      <div className="flex justify-between">
        <Logo />
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className="block h-[30px] w-[30px] lg:hidden"
        >
          <Image
            src="/pages/index/burger-menu.svg"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <Menu showMenu={showMenu} />
      <RightMenu />
    </div>
  );
}

export default NavBar;
