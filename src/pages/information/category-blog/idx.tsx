import Image from 'next/image';
import React from 'react';
import imgBlog2 from 'public/img/2.png';
import imgBlog3 from 'public/img/2-3.png';
import imgBlog4 from 'public/img/3.png';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

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

export default function Idx() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">CATEGORY BLOG</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">BLOG</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mx-24">
        <div className="grid">
          <Image src={imgBlog2} alt="" className="rounded-xl" />
          <h2 className="font-bold mt-3">Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi
            nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?
          </p>

          <div className="flex gap-5 justify-between text-gray-paragraph text-sm mt-3">
            <div className="flex">#Pendidikan #Bisnis #Entertainment</div>
            <button>
              <Link href="/">View See Detail</Link>
            </button>
          </div>
        </div>

        <div className="grid">
          <Image src={imgBlog3} alt="" className="rounded-xl" />
          <h2 className="font-bold mt-3">Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi
            nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?
          </p>

          <div className="flex gap-5 justify-between text-gray-paragraph text-sm mt-3">
            <div className="flex">#Pendidikan #Bisnis #Entertainment</div>
            <button>
              <Link href="/">View See Detail</Link>
            </button>
          </div>
        </div>

        <div className="grid">
          <Image src={imgBlog4} alt="" className="rounded-xl" />
          <h2 className="font-bold mt-3">Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi
            nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?
          </p>

          <div className="flex gap-5 justify-between text-gray-paragraph text-sm mt-3">
            <div className="flex">#Pendidikan #Bisnis #Entertainment</div>
            <button>
              <Link href="/">View See Detail</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
