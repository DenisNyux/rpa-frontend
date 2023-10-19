"use client";

import React from "react";
import { useState } from "react";
import { NavbarItem } from "@/components/Header/NavbarItem/NavbarItem";

import { NavbarItemType } from "@/components/Header/NavbarItem/NavbarItem";

import styles from "./Dropdown.module.css";

type DropdownProps = {
  dropdownItems: NavbarItemType[];
  children: React.ReactNode;
  isInnerDropdown?: boolean;
};

function Dropdown({ dropdownItems, children, isInnerDropdown }: DropdownProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div>{children}</div>
      {isDropdownVisible && (
        <div
          className={`
          ${styles.dropdownWindow} 
          ${isDropdownVisible === true ? styles.active : ""} 
          ${isInnerDropdown ? styles.innerDropdown : ""}
          `}
        >
          {dropdownItems.map((item, index) => {
            if (item.submenu) {
              return (
                <div key={index}>
                  <Dropdown dropdownItems={item.submenu} isInnerDropdown={true}>
                    <NavbarItem
                      id={item.id}
                      name={item.name}
                      href={item.href}
                      label={item.label}
                      submenu={item.submenu}
                      key={index}
                    />
                  </Dropdown>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <NavbarItem
                    id={item.id}
                    name={item.name}
                    href={item.href}
                    label={item.label}
                    submenu={item.submenu}
                    key={index}
                  />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
