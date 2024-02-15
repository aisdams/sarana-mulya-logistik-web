import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFilter, BsFillEyeFill, BsFillHeartFill } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Blog() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">
            BLOG SEPUTAR SARANA MULYA LOGISTIK
          </h3>
          <h1 className="font-bold lg:text-5xl text-3xl">Blog</h1>
        </div>
      </div>
      <div className="grid w-[min(90%,1280px)] mx-auto">
        <h1 className="uppercase font-bold text-4xl text-[#2b2b2b]">Tags</h1>

        <div className="my-20">
          <div className="w-[25rem] shadow-2xl pb-10">
            <div className="shape bg-gray-400 w-full h-56 rounded-md mb-10"></div>
            <div className="grid pl-5">
              <h3 className="font-light">September 21, 2022 at 10:00:54</h3>
              <Link href="/information/blog/blog-details">
                {' '}
                <h1 className="font-bold text-base-blue mt-5 text-xl tracking-wider">
                  Penting! 3 Kesalahan Kirim Barang Berukuran Besar dan Banyak
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
