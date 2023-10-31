import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full border-t-[1px] border-black flex flex-col justify-center items-center gap-3 p-10 ">
      <div className=" flex gap-2">
        <a href="https://vk.com/vkrpa" className="clickable__animation">
          <Image src="/VK-link.svg" width={36} height={36} alt="vk"></Image>
        </a>
        <a href="https://vk.com/vkrpa" className="clickable__animation">
          <Image src="/TG-link.svg" width={36} height={36} alt="vk"></Image>
        </a>
      </div>
      <span>Российская психотерапевтическая ассоциация, {new Date().getFullYear()}</span>
        <span className="flex gap-2 pb-10">
        <Link href={'/codex'} className="text-[#5e050d]">Устав</Link>
        {/* <a className="text-[#5e050d]">Политика конфиденциальности</a> */}
        <Link href={'/oferta'} className="text-[#5e050d]">Договор публичной оферты</Link>
        </span>

    </div>
  );
}

export default Footer;
