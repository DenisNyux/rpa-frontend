import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface NavbarItemType {
  id: string;
  name: string;
  label: string;
  href: string;
  submenu: NavbarItemType[] | null;
}

export function NavbarItem({ id, name, label, href, submenu }: NavbarItemType){
  return (
    <div className="clickable__animation md:w-full md:flex md:items-center md:justify-center">
      {submenu ? (
        <li key={id}>
            <Link href={href} className="flex gap-1">
              <h4>{label}</h4>
              <Image
                src="/submenu-arr.svg"
                width={20}
                height={10}
                alt="dropdown"
              ></Image>
            </Link>
        </li>
      ) : (
        <li key={id}>
          <Link href={href}>
            <h4>{label}</h4>
          </Link>
        </li>
      )}
    </div>
  );
}
