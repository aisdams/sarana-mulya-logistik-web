import Image from 'next/image';
import React from 'react';
import imgBlog from 'public/img/1.png';
import imgBlog2 from 'public/img/2.png';
import imgBlog3 from 'public/img/2-3.png';
import imgBlog4 from 'public/img/3.png';
import imgBlog5 from 'public/img/bg00.png';
import imgBlog6 from 'public/img/bg01.png';
import imgBlog7 from 'public/img/78.png';
import imgBlog8 from 'public/img/cta-bg2.jpg';
import imgBlog9 from 'public/img/cta-bg.png';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

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
  const router = useRouter();
  const { idx } = router.query;

  const SubCategory = [
    {
      title: 'News Pendidikan',
      Image: imgBlog,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?',
      tag: '#Pendidikan #Bisnis #Entertainment',
    },
    {
      title: 'News Entertainment',
      Image: imgBlog2,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi',
      tag: '#Entertainment #Keuangan #Teknologi',
    },
    {
      title: 'News Bisnis',
      Image: imgBlog3,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?',
      tag: '#Bisnis #Politik #Pemasaran',
    },
    {
      title: 'News Pemasaran',
      Image: imgBlog4,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?',
      tag: '#Pemasaran #Bisnis #Entertainment',
    },
    {
      title: 'News Otomotif',
      Image: imgBlog5,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi',
      tag: '#Otomotif #Keuangan #Entertainment',
    },
    {
      title: 'News Politik',
      Image: imgBlog6,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi nobis facilis error sit suscipit quos sequi, cupiditate iusto esse?',
      tag: '#Politik #Bisnis #Pendidikan',
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3 uppercase">CATEGORY BLOG {idx}</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">BLOG</h1>
        </div>
      </div>

      <div className="">
        <button
          className="flex gap-3 items-center mb-10 lg:ml-20 ml-5"
          onClick={() => router.back()}
        >
          <IoChevronBackCircleOutline className="text-3xl" />
          <h1>Back</h1>
        </button>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mx-24 mx-5">
          {SubCategory.map((category, idx) => (
            <div className="grid" key={idx}>
              <Image src={category.Image} alt="" className="rounded-xl" />
              <h2 className="font-bold mt-3">{category.title}</h2>
              <p>{category.desc}</p>

              <div className="flex gap-5 justify-between text-gray-paragraph text-sm mt-3">
                <div className="flex">{category.tag}</div>
                <button>
                  <Link href="/">View See Detail</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
