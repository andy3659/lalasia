import Link from "next/link";
import React from "react";

function MenuItem({ title, url }) {
  return (
    <li className="group text-title text-lg font-medium my-3">
      <Link href={url}>
        <a>{title}</a>
      </Link>
      <div className="w-full h-0.5 scale-x-0 bg-primary group-hover:scale-100 origin-left transition-transform ease-out rounded-full duration-300" />
    </li>
  );
}

export default MenuItem;
