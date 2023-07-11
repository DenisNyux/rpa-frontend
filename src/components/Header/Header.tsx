import React from "react";
import Image from "next/image";

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
              href: "/president",
              submenu: null,
            },
            {
              id: "0-0-1",
              label: "Вице-президенты",
              name: "vise-president",
              href: "/vise-president",
              submenu: null,
            },
            {
              id: "0-0-2",
              label: "Совет супервизоров",
              name: "supervisors-сommittee",
              href: "/supervisors-сommittee",
              submenu: null,
            },
            {
              id: "0-0-3",
              label: "Этический комитет",
              name: "ethical-committee",
              href: "/ethical-committee",
              submenu: null,
            },
            {
              id: "0-0-4",
              label: "Ревизионная комиссия",
              name: "revision-group",
              href: "/revision-group",
              submenu: null,
            },
            {
              id: "0-0-5",
              label: "Координационный совет",
              name: "revision-group",
              href: "/revision-group",
              submenu: null,
            },
            {
              id: "0-0-6",
              label: "Супервизоры",
              name: "supervisors",
              href: "/supervisors",
              submenu: null,
            },
          ],
        },
        {
          id: "0-1",
          label: "Журнал",
          name: "journal",
          href: "/journal",
          submenu: null,
        },
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
      href: "/members",
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
          href: "/specialist-supervision",
          submenu: null,
        },
        {
          id: "2-1",
          label: '"Психическое здоровье сегодня"',
          name: "psychological-health",
          href: "/psychological-health",
          submenu: null,
        },
        {
          id: "2-2",
          label: 'Ежемесячные встречи РО',
          name: "monthly-meetings",
          href: "/monthly-meetings",
          submenu: null,
        },
        {
          id: "2-3",
          label: 'Конференции',
          name: "conferences",
          href: "/conferences",
          submenu: null,
        },
        {
          id: "2-4",
          label: 'Сертифицированные программы',
          name: "approved-programs",
          href: "/approved-programs",
          submenu: null,
        }
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
    {
      id: "7",
      label: "Супервизии",
      name: "supervisions",
      href: "/supervisions",
      submenu: null,
    },
    {
      id: "8",
      label: "Секции",
      name: "sections",
      href: "/sections",
      submenu: null,
    },
  ];

  return (
    <div className="flex p-6 w-full border-b-[1px] border-black	">
      <div className="flex gap-5 w-1/2 border-r-[1px] border-black pr-6">
        <div className="w-1/3 relative">
        <Image
          src="/rpa-logo.svg"
          fill = {true}
          alt="rpa-logo"
          className="w-auto h-auto"
        />
        </div>
        <div className="flex flex-col gap-4">
          <h1>Российская психотерапевтическая ассоциация</h1>
          <span className="subheader">
            Объединяем профессионалов в области психического здоровья
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6 w-1/2 ">
        <div className="flex justify-between">
          <div className={styles.social__text}>
            <p className={styles.social__text__title}>Телефон</p>
            <a href="tel:+78129990403" className={styles.social__text__value}>
              +7 (812) 999-04-03
            </a>
          </div>
          <div className={styles.social__text}>
            <p className={styles.social__text__title}>По вопросам вступления</p>
            <a
              href="mailto:rpamember@gmail.com"
              className={styles.social__text__value}
            >
              rpamember@gmail.com
            </a>
          </div>
          <div className={styles.social__text}>
            <p className={styles.social__text__title}>E-mail</p>
            <a
              href="mailto:rpaofficespb@gmail.com"
              className={styles.social__text__value}
            >
              rpaofficespb@gmail.com
            </a>
          </div>
          <div className="flex justify-between pl-5 gap-5 border-l-[1px] border-black">
            <a href="https://vk.com/vkrpa" className="clickable__animation">
              <Image src="/VK-link.svg" width={48} height={48} alt="vk"></Image>
            </a>
            <a href="https://vk.com/vkrpa" className="clickable__animation">
              <Image src="/TG-link.svg" width={48} height={48} alt="vk"></Image>
            </a>
          </div>
        </div>
        <nav className="pt-7">
          <ul className="flex flex-wrap gap-5">
            {navbarItems.map((item, index) => {
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
