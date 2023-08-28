import React, { useState } from 'react';
import NavbarData from '@/data/NavbarData';
import Link from 'next/link';
import Flag from '../../../../public/img/lang/ind.png';
import Image from 'next/image';
import { BsPlus, BsDash } from 'react-icons/bs';

export default function Sidebar() {
  // State to track the open/closed state of dropdowns
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]); // Use an array of numbers

  // Function to toggle the dropdown state
  const toggleDropdown = (idx: number) => {
    if (openDropdowns.includes(idx)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== idx));
    } else {
      setOpenDropdowns([...openDropdowns, idx]);
    }
  };

  return (
    <div className="bg-sidebar-bg w-2/3 pb-8 z-10 absolute top-40 grid mx-auto items-center right-0 left-0 pl-8">
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
                    <BsDash className="text-white text-3xl absolute right-0 top-0 bg-[#383838]/70 w-14" />
                  ) : (
                    <BsPlus className="text-white text-3xl absolute right-0 top-0 bg-[#383838]/70 w-14" />
                  )}
                </button>
              )}
            </h1>
          )}

          {/* Dropdown for children */}
          {navbar.children && openDropdowns.includes(idx) && (
            <ul className="ml-4 mt-2 space-y-2">
              {navbar.children.map((child, childIdx) => (
                <li key={childIdx}>
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

      <button className="border border-[#383838] mt-3 text-white cursor-pointer pr-[50%] py-2 pl-2 text-left">
        <Link href="">LOGIN</Link>
      </button>

      <div className="flex text-white items-center relative">
        <Image className="w-10 mt-5" src={Flag} alt="" />
        <h1 className="absolute left-14 top-1/2 text-lg">ID</h1>
      </div>
    </div>
  );
}
