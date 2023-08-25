import React from 'react';
import NavbarData from '@/data/NavbarData';
import Link from 'next/link';
import Flag from '../../../../public/img/lang/ind.png';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="block bg-sidebar-bg w-full pl-8 pb-8 z-10">
      {NavbarData.map((navbar, idx) => (
        <div className="uppercase text-white" key={idx}>
          <a href={navbar.link}>
            <h1 className="border-b-2 border-b-[#383838] py-2">
              {navbar.title}
            </h1>
          </a>
        </div>
      ))}

      <button className="border border-[#383838] mt-3 text-white cursor-pointer pr-[50%] py-2 pl-2 text-left">
        <Link href="/">LOGIN</Link>
      </button>

      <div className="flex text-white items-center relative">
        <Image className="w-10 mt-5" src={Flag} alt="" />
        <h1 className="absolute left-14 top-1/2 text-lg">ID</h1>
      </div>
    </div>
  );
}
