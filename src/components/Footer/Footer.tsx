import React from "react";
import Image from "next/image";

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
        <span className="flex gap-2">
        <a className="text-[#5e050d]">Лицензия</a>
        <a className="text-[#5e050d]">Политика конфиденциальности</a>
        </span>

    </div>
  );
}

export default Footer;
