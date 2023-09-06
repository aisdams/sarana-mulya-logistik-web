import React, { useState } from 'react';
import Link from 'next/link';
import Flag from 'public/img/lang/ind.png';
import FlagEng from 'public/img/lang/us.png';
import Image from 'next/image';
import { BsPlus, BsDash, BsCaretDownFill } from 'react-icons/bs';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const router = useRouter();
  const { t } = useTranslation('navbar');
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const NavbarData = [
    {
      title: t('section.titleOne'),
      type: 'info',
      link: '/',
    },
    {
      title: t('section.titleTwoChild.titlePar'),
      icons: BsCaretDownFill,
      type: 'info',
      children: [
        {
          title: t('section.titleTwoChild.child.title'),
          type: 'info',
          link: '/about/profile',
        },
        {
          title: t('section.titleTwoChild.child.titleTwo'),
          type: 'info',
          link: '/about/client',
        },
        {
          title: t('section.titleTwoChild.child.titleThree'),
          type: 'info',
          link: '/about/branch',
        },
      ],
    },
    {
      title: t('section.titleThree'),
      type: 'info',
      link: '/services',
    },
    {
      title: t('section.titleFour'),
      type: 'info',
      link: '/tracking',
    },
    {
      title: t('section.titleFive.titlePar'),
      icons: BsCaretDownFill,
      type: 'info',
      children: [
        {
          title: t('section.titleFive.child.title'),
          type: 'info',
          link: '/information/blog',
        },
        {
          title: t('section.titleFive.child.titleTwo'),
          type: 'info',
          link: '/information/news',
        },
        {
          title: t('section.titleFive.child.titleThree'),
          type: 'info',
          link: '/information/terms',
        },
      ],
    },
    {
      title: t('section.titleSix'),
      type: 'info',
      link: '/contact',
    },
  ];

  const [flagToggle, setFlagToggle] = useState<boolean>(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] =
    useState<boolean>(false); // Tambah state untuk dropdown bahasa

  // Function to toggle the dropdown state
  const toggleDropdown = (idx: number) => {
    if (openDropdowns.includes(idx)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== idx));
    } else {
      setOpenDropdowns([...openDropdowns, idx]);
    }
  };

  const handleLanguageDropdownToggle = () => {
    setLanguageDropdownOpen((prevState) => !prevState);
  };

  const ChangeLanguage = () => {
    const currentLocale = router.locale;

    const toggleSwitchLanguage = () => {
      const newLocale = currentLocale === 'id' ? 'en' : 'id';
      router.push(router.pathname, `/${newLocale}${router.asPath}`, {
        locale: newLocale,
      });
    };

    return (
      <div
        className="flex items-center px-3 gap-3"
        onClick={toggleSwitchLanguage}
      >
        <Image
          src={router?.locale === 'en' ? Flag : FlagEng}
          alt=""
          width={40}
        />
        <h3 className="text-black">
          {router?.locale === 'en' ? 'IND' : 'ENG'}
        </h3>
      </div>
    );
  };

  const LanguageToggle = () => {
    const currentLocale = router.locale;

    const toggleLanguage = () => {
      const newLocale = currentLocale === 'id' ? 'en' : 'id';
      router.push(router.pathname, `/${newLocale}${router.asPath}`, {
        locale: newLocale,
      });
    };

    return (
      <button onClick={toggleLanguage}>
        {currentLocale === 'id' ? 'IND' : 'ENG'}
      </button>
    );
  };

  return (
    <div className="bg-sidebar-bg w-[90%] pb-8 z-10 absolute top-28 grid mx-auto items-center right-0 left-0 pl-8">
      {NavbarData.map((navbar, idx) => (
        <div
          className="uppercase text-white border-b-2 border-b-[#383838] py-2 w-full"
          key={idx}
        >
          {navbar.link ? (
            <Link href={navbar.link}>
              {navbar.title}
              {navbar.children && (
                <button
                  className="inline-block ml-2 text-[#383838] cursor-pointer"
                  onClick={() => toggleDropdown(idx)}
                >
                  {openDropdowns.includes(idx) ? (
                    <BsDash className="text-white text-3xl float-right" />
                  ) : (
                    <BsPlus className="text-white text-3xl float-right" />
                  )}
                </button>
              )}
            </Link>
          ) : (
            <h1 className="relative">
              {navbar.title}
              {navbar.children && (
                <button
                  className="inline-block ml-2 text-[#383838] cursor-pointer"
                  onClick={() => toggleDropdown(idx)}
                >
                  {openDropdowns.includes(idx) ? (
                    <BsDash className="text-white text-3xl absolute right-0 top-0 bg-[#383838]/80 w-14" />
                  ) : (
                    <BsPlus className="text-white text-3xl absolute right-0 top-0 bg-[#383838]/80 w-14" />
                  )}
                </button>
              )}
            </h1>
          )}

          {/* Dropdown for children */}
          {navbar.children && openDropdowns.includes(idx) && (
            <ul className="pl-4 mt-2 space-y-2">
              {navbar.children.map((child, childIdx) => (
                <li
                  key={childIdx}
                  className="border-b-2 border-b-[#383838] !w-full"
                >
                  {child.link ? (
                    <Link href={child.link} className="text-white">
                      {child.title}
                    </Link>
                  ) : (
                    <span className="text-white">{child.title}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="flex gap-5 items-center mt-5">
        <div className="flex gap-3 cursor-pointer relative items-center">
          <Image
            src={router?.locale === 'en' ? FlagEng : Flag}
            alt=""
            width={40}
          />
          {/* <LanguageToggle /> */}
          <h3 onClick={handleLanguageDropdownToggle} className="text-white">
            {router?.locale === 'en' ? 'Eng' : 'IDN'}
          </h3>
          <BiSolidDownArrow
            className="text-[9px]"
            onClick={handleLanguageDropdownToggle}
          />
          {languageDropdownOpen && (
            <ul className="absolute top-full text-[13px] gap-y-2 py-2 grid right-0 mt-2 rounded-sm w-max shadow-[-5px_10px_10px_0px_rgba(0,0,0,0.4)] bg-white text-black">
              <li>
                <button
                  className="hover:text-base-blue font-medium flex gap-3 items-center"
                  onClick={handleLanguageDropdownToggle}
                >
                  <ChangeLanguage />
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <Link href="https://sml.ops.odisys.id/auth" legacyBehavior>
        <a className="border border-[#383838] mt-3 text-white cursor-pointer py-2 pl-2 text-left w-max">
          Login
        </a>
      </Link>
    </div>
  );
}
