"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Route {
  title: string;
  link: string;
}

export default function NavItem({
  link,
  title,
  subMenu,
}: {
  link: string;
  title: string;
  subMenu?: Route[];
}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  return (
    <li
      className="group relative py-5 bg-zinc-50"
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
      onFocus={() => setIsSubMenuOpen(true)}>
      <Link
        href={link}
        className="rounded-md group-hover:bg-slate-300 focus-within:outline-1 px-4 py-2 cursor-pointer duration-100 ease flex gap-2 items-center">
        {title}
        {subMenu && (
          <ChevronDown
            strokeWidth={2}
            size={20}
            className="group-hover:rotate-180"
          />
        )}
      </Link>
      {subMenu && (
        <ul
          className={`${
            isSubMenuOpen ? "mt-0" : "-mt-50"
          } top-20 absolute p-0.5 min-w-max right-0 duration-400 delay-150 ease-in-out -z-10`}>
          {subMenu.map((subItem) => (
            <li
              key={subItem.link}
              className="min-w-full bg-zinc-50 shadow p-2 hover:bg-slate-300">
              <Link href={subItem.link}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
