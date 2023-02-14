import React from "react";
import MenuItem from "./menu-item";
function Menu({ showMenu }) {
  const menuItems = [
    {
      title: "Product",
      url: "/product",
    },
    {
      title: "Services",
      url: "/services",
    },
    // {
    //   title: "Article",
    //   url: "#",
    // },
    {
      title: "About Us",
      url: "/about-us",
    },
  ];
  return (
    <div>
      <ul
        className={`absolute left-0 h-screen w-full gap-[60px] bg-screen p-6 pt-3 transition-all duration-300 lg:static lg:right-auto lg:left-auto lg:flex lg:h-auto lg:w-auto lg:p-0 lg:pt-0 lg:opacity-100 ${
          showMenu ? "top-[80px] left-0" : "top-[80px] left-[-100%]"
        }`}
      >
        {menuItems.map((menu) => (
          <MenuItem key={menu.title} title={menu.title} url={menu.url} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
