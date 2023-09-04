'use client';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { i18n, useTranslation } from 'next-i18next';
import LogoSML from 'public/img/icon2.png';
import Image from 'next/image';
import Flag from 'public/img/lang/ind.png';
import FlagEng from 'public/img/lang/us.png';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { BsCaretDownFill } from 'react-icons/bs';
motion;

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const router = useRouter();
  const { t } = useTranslation('navbar');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [flagToggle, setFlagToggle] = useState<boolean>(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] =
    useState<boolean>(false); // Tambah state untuk dropdown bahasa

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
  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleLanguageDropdownToggle = () => {
    setLanguageDropdownOpen((prevState) => !prevState); // Toggle dropdown bahasa
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
        <h3>{router?.locale === 'en' ? 'IND' : 'ENG'}</h3>
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
    <div
      className={`w-full absolute top-0 hidden lg:grid transition-all z ${
        isScrolled
          ? 'bg-white top-0 sticky text-base-blue shadow-[-5px_10px_30px_0px_rgba(0,0,0,0.5)]'
          : 'bg-transparent text-white'
      } z-10`}
    >
      <div className="flex justify-between items-center gap-3 mx-20 px-3 py-3">
        <div className="LogoSection">
          <Image
            src={LogoSML}
            alt=""
            width={150}
            height={150}
            className={`${isScrolled ? 'filter-none' : 'brightness-[100]'}`}
          />
        </div>
        <div className="navbarnya flex gap-10 font-bold text-[14px] cursor-pointer">
          {NavbarData.map((navbar, idx) => (
            <div
              key={idx}
              className="relative group flex items-center gap-2"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`/${router.locale}${navbar.link}`}>
                <h1>{t(navbar.title)}</h1>
              </a>
              {navbar.children && (
                <div className="icon">
                  <BiSolidDownArrow className="text-[9px]" />
                </div>
              )}
              {navbar.children && activeMenu === idx && (
                <ul className="absolute top-full text-[13px] gap-y-5 py-7 grid -right-20 rounded-sm bg-white w-[12rem] p-3 shadow-[-5px_10px_10px_0px_rgba(0,0,0,0.4)]">
                  {navbar.children.map((child, childIdx) => (
                    <li key={childIdx}>
                      <a
                        href={`/${router.locale}${child.link}`}
                        className={`hover:text-base-blue font-medium ${
                          isScrolled ? 'text-base-blue' : 'text-secondary-text'
                        } z-10`}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-3 cursor-pointer relative items-center">
            <Image
              src={router?.locale === 'en' ? FlagEng : Flag}
              alt=""
              width={40}
            />
            {/* <LanguageToggle /> */}
            <h3 onClick={handleLanguageDropdownToggle}>
              {router?.locale === 'en' ? 'Eng' : 'IDN'}
            </h3>
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

          <Link href="https://sml.ops.odisys.id/auth" legacyBehavior>
            <a className="login border-2 border-blue-300 py-2 px-3 text-base font-semibold">
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
