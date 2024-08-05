"use client";
import { FC, useState } from "react";
import Image from "next/image";

export type AccordionProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

import styles from "./Accordion.module.css";
const Accordion: FC<AccordionProps> = ({ children, title, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accContainer} ${className}`}>
      <div className={styles.accHeader}>
        {title && <h4 className="font-bold">{title}</h4>}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={"/down-arrow.png"}
            width={24}
            height={24}
            alt="arrow"
            className={
              isOpen
                ? "transition-transform rotate-180"
                : "transition-transform"
            }
          />
        </button>
      </div>

      <div
        className={`transition-all gap-2 flex flex-col ${
          isOpen ? "h-full opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
