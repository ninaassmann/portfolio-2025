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
      className="relative"
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}>
      <Link
        href={link}
        className="rounded-md hover:bg-slate-300 px-4 py-2 cursor-pointer duration-100 ease flex gap-2 items-center">
        {title}
        {subMenu && (
          <ChevronDown
            strokeWidth={2}
            size={20}
            className="group-hover:rotate-180"
          />
        )}
      </Link>
      {subMenu && isSubMenuOpen && (
        <ul className="absolute p-0.5 w-full right-0">
          {subMenu.map((subItem) => (
            <li
              key={subItem.link}
              className="min-w-full rounded-md bg-white shadow p-2 hover:bg-slate-300 border-slate-700 border-1 ">
              <Link href={subItem.link}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
