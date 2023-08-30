'use client';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { i18n, useTranslation } from 'next-i18next';
import LogoSML from 'public/img/icon2.png';
import Image from 'next/image';
import NavbarData from '@/data/NavbarData';
import Flag from 'public/img/lang/ind.png';
import FlagEng from 'public/img/lang/us.png';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const router = useRouter();
  const { t } = useTranslation('navbar');
  const { t: tHome, i18n: i18nHome } = useTranslation('home');
  const { t: tAbout, i18n: i18nAbout } = useTranslation('about');
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [flagToggle, setFlagToggle] = useState<boolean>(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] =
    useState<boolean>(false); // Tambah state untuk dropdown bahasa

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleLanguageDropdownToggle = () => {
    setLanguageDropdownOpen((prevState) => !prevState); // Toggle dropdown bahasa
  };

  const handleFlagToggle = () => {
    handleLanguageDropdownToggle(); // Close the dropdown when toggling flag
    const newLocale = router?.locale === 'id' ? 'en' : 'id';
    if (i18n) {
      i18n.changeLanguage(newLocale); // Change the language without altering default locale
    }
  };

  return (
    <div
      className={`w-full absolute top-0 hidden lg:grid ${
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
              <a href={navbar.link}>
                <h1>{navbar.title} </h1>
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
                        href={child.link}
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
          <div
            className="flex gap-3 cursor-pointer relative items-center"
            onClick={handleLanguageDropdownToggle}
          >
            <Image
              src={router?.locale === 'id' ? Flag : FlagEng}
              alt=""
              width={40}
            />
            <p className="font-bold">{flagToggle ? 'ID' : 'EN'}</p>
            <BiSolidDownArrow className="text-[9px]" />
            {languageDropdownOpen && (
              <ul className="absolute top-full text-[13px] gap-y-2 py-2 grid right-0 mt-2 rounded-sm w-[6rem] p-3 shadow-[-5px_10px_10px_0px_rgba(0,0,0,0.4)] bg-white text-black">
                <li>
                  <button
                    className="hover:text-base-blue font-medium flex gap-3 items-center"
                    onClick={handleFlagToggle}
                  >
                    <Image
                      src={router?.locale === 'en' ? Flag : FlagEng} // Switch the flag image
                      alt=""
                      width={40}
                    />
                    {flagToggle ? 'EN' : 'ID'}
                  </button>
                </li>
                {/* You can add more language options here */}
              </ul>
            )}
          </div>

          <button className="login border-2 border-blue-300 py-2 px-3 text-base font-semibold">
            <Link href="https://sml.ops.odisys.id/auth">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
