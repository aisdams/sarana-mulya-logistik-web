'use client';
import React, { useState } from 'react';
import LogoSML from '../../../../public/img/icon.png';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import NavbarData from '@/data/NavbarData';
import Flag from '../../../../public/img/lang/ind.png';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // Define the type here

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center gap-3 mx-20 px-5 py-3">
        <div className="LogoSection">
          <Image src={LogoSML} alt="" width={100} />
        </div>
        <div className="navbarnya flex gap-10 font-semibold text-[14px] cursor-pointer">
          {NavbarData.map((navbar, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{navbar.title}</span>
              {navbar.children && activeMenu === idx && (
                <ul className="absolute top-full text-[13px] gap-y-3 my-5 text-base-blue grid -right-20 bg-white w-[12rem] p-3 shadow-[1px_4px_41px_0px_rgba(0,0,0,0.75)]">
                  {navbar.children.map((child, childIdx) => (
                    <li key={childIdx}>
                      <a href={child.link}>{child.title}</a>
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
