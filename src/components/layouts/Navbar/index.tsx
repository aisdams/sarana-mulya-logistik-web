'use client';
import React, { useState } from 'react';
import LogoSML from '../../../../public/img/icon2.png';
import Image from 'next/image';
import NavbarData from '@/data/NavbarData';
import Flag from '../../../../public/img/lang/ind.png';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
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
              className="relative group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={navbar.link}>
                <h1>{navbar.title} </h1>
              </a>
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
          <div className="">
            <Image src={Flag} alt="" width={40} />
          </div>
          <div className="login border-2 border-blue-300 py-2 px-3 text-base font-semibold">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
