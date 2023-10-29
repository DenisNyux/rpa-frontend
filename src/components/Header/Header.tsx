'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown/Dropdown";

import styles from "./Header.module.css";

import { NavbarItemType, NavbarItem } from "./NavbarItem/NavbarItem";

function Header() {
  const navbarItems: NavbarItemType[] = [
    {
      id: "0",
      label: "Об РПА",
      name: "about-rpa",
      href: "/about-rpa",
      submenu: [
        {
          id: "0-0",
          label: "Структура",
          name: "structure",
          href: "/structure",
          submenu: [
            {
              id: "0-0-0",
              label: "Президент",
              name: "president",
              href: "/structure/president",
              submenu: null,
            },
            {
              id: "0-0-1",
              label: "Вице-президенты",
              name: "vise-president",
              href: "/structure/vise-president",
              submenu: null,
            },
            {
              id: "0-0-2",
              label: "Совет супервизоров",
              name: "supervisors-сommittee",
              href: "/structure/supervisors-committee",
              submenu: null,
            },
            {
              id: "0-0-3",
              label: "Этический комитет",
              name: "ethical-committee",
              href: "/structure/ethical-committee",
              submenu: null,
            },
            {
              id: "0-0-4",
              label: "Ревизионная комиссия",
              name: "revision-group",
              href: "/structure/revision-group",
              submenu: null,
            },
            {
              id: "0-0-5",
              label: "Координационный совет",
              name: "coordination-group",
              href: "/structure/coordination-group",
              submenu: null,
            },
            {
              id: "0-0-6",
              label: "Супервизоры",
              name: "supervisors",
              href: "/structure/supervisors",
              submenu: null,
            },
          ],
        },
        // {
        //   id: "0-1",
        //   label: "Журнал",
        //   name: "journal",
        //   href: "/journal",
        //   submenu: null,
        // },
        {
          id: "0-2",
          label: "Устав",
          name: "codex",
          href: "/codex",
          submenu: null,
        },
      ],
    },
    {
      id: "1",
      label: "Члены РПА",
      name: "members",
      href: "/departments",
      submenu: null,
    },
    {
      id: "2",
      label: "Мероприятия",
      name: "events",
      href: "/events",
      submenu: [
        {
          id: "2-0",
          label: "Супервизия для специалистов",
          name: "specialist-supervision",
          href: "/events/superviziya-dlya-speczialistov",
          submenu: null,
        },
        {
          id: "2-1",
          label: '"Психическое здоровье сегодня"',
          name: "psychological-health",
          href: "/events/psihicheskoe-zdorove-segodnya",
          submenu: null,
        },
        {
          id: "2-2",
          label: "Ежемесячные встречи РО",
          name: "monthly-meetings",
          href: "/events/ezhemesyachnye-vstrechi-ro-rpa",
          submenu: null,
        },
        // {
        //   id: "2-3",
        //   label: "Конференции",
        //   name: "conferences",
        //   href: "/conferences",
        //   submenu: null,
        // },
        {
          id: "2-4",
          label: "Сертифицированные программы",
          name: "approved-programs",
          href: "/events/sertificzirovannye-programmy",
          submenu: null,
        },
      ],
    },
    {
      id: "3",
      label: "Документы",
      name: "documents",
      href: "/documents",
      submenu: null,
    },
    {
      id: "4",
      label: "Новости",
      name: "news",
      href: "/news",
      submenu: null,
    },
    {
      id: "5",
      label: "Вступить в РПА",
      name: "join",
      href: "/join",
      submenu: null,
    },
    {
      id: "6",
      label: "Членский взнос",
      name: "payment",
      href: "/payment",
      submenu: null,
    },
    // {
    //   id: "7",
    //   label: "Супервизии",
    //   name: "supervisions",
    //   href: "/supervisions",
    //   submenu: null,
    // },
    {
      id: "8",
      label: "Секции",
      name: "sections",
      href: "/sections",
      submenu: null,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex p-6 w-full border-b-[1px] border-black	lg:flex-col">
      <div className="flex gap-5 w-1/2 border-r-[1px] border-black pr-6 lg:w-full lg:border-r-0 lg:pr-0 md:flex-col md:items-center">
        <div className="xl:w-1/3 lg:w-1/12 md:flex md:items-center">
          <Link href="/">
            <Image
              src="/rpa-logo.svg"
              alt="rpa-logo"
              height={300}
              width={300}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 lg:justify-center">
          <h1 className="md:text-center xs:text-3xl">
            Российская психотерапевтическая ассоциация
          </h1>
          <span className="subheader md:text-center xs:text-xl">
            Объединяем профессионалов в области психического здоровья
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6 w-1/2 lg:w-full lg:flex-row-reverse lg:p-0 lg:pt-4 lg:gap-4 md:flex-col ">
        <div className="flex justify-between lg:w-5/12 lg:grid lg:grid-cols-7 lg:gap-2 lg:grid-rows-2 md:w-full md:grid-cols-7 md:grid-rows-1 md:gap-2 sm:grid-cols-6 ">
          <div
            className={`${styles.social__text} lg:col-span-3 lg:row-start-1 lg:col-start-1 md:col-span-2 sm:col-span-2`}
          >
            <p className={styles.social__text__title}>Телефон</p>
            <a href="tel:+78129990403" className={styles.social__text__value}>
              +7 (921) 999-04-03
            </a>
          </div>
          <div
            className={`${styles.social__text} lg:col-span-3 lg:row-start-1 md:col-span-2 sm:col-span-2`}
          >
            <p className={styles.social__text__title}>По вопросам вступления</p>
            <a
              href="mailto:rpamember@gmail.com"
              className={styles.social__text__value}
            >
              rpamember@gmail.com
            </a>
          </div>
          <div
            className={`${styles.social__text} lg:row-start-2 lg:col-start-1 md:col-span-2 md:row-start-1 sm:col-span-2 `}
          >
            <p className={styles.social__text__title}>E-mail</p>
            <a
              href="mailto:rpaofficespb@gmail.com"
              className={styles.social__text__value}
            >
              rpaofficespb@gmail.com
            </a>
          </div>
          <div className="flex justify-between items-center pl-5 gap-5 border-l-[1px] border-black lg:flex-col lg:justify-center lg:pl-0 lg:row-span-2 md:row-span-1 md:col-span-1 md:flex-row md:border-l-0 sm:hidden">
            <a
              href="https://vk.com/vkrpa"
              className="clickable__animation xl:w-2/3 lg:w-1/2 md:1/3"
            >
              <Image src="/VK-link.svg" width={48} height={48} alt="vk"></Image>
            </a>
            <a
              href="https://vk.com/vkrpa"
              className="clickable__animation xl:w-2/3 lg:w-1/2 md:1/3"
            >
              <Image src="/TG-link.svg" width={48} height={48} alt="vk"></Image>
            </a>
          </div>
        </div>
        <nav className="pt-7 lg:w-7/12 lg:pt-0 lg:flex lg:items-center md:w-full md:flex md:flex-col md:justify-center">
          <button className="hidden md:flex md:p-5 md:gap-3 md:items-center md:justify-between" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <h4>Меню</h4>
            <Image
              src="/burger-menu.svg"
              alt="burger"
              width={16}
              height={16}
            ></Image>
          </button>
          <ul className={`flex flex-wrap gap-5 md:items-center md:w-full md:gap-7 transition-all md:flex-col ${isMobileMenuOpen ? 'md:overflow-auto md:h-auto md:opacity-100 md:visible' : 'md:invisible md:overflow-hidden md:h-0 md:opacity-0'}`}>
            {navbarItems.map((item, index) => {
              if (item.submenu) {
                return (
                  <Dropdown dropdownItems={item.submenu} key={index}>
                    <NavbarItem
                      id={item.id}
                      name={item.name}
                      href={item.href}
                      label={item.label}
                      submenu={item.submenu}
                    />
                  </Dropdown>
                );
              }
              return (
                <NavbarItem
                  id={item.id}
                  name={item.name}
                  href={item.href}
                  label={item.label}
                  submenu={item.submenu}
                  key={index}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
