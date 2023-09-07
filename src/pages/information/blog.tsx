import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFilter, BsFillEyeFill, BsFillHeartFill } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import imgBlog from 'public/img/1.png';
import imgBlog2 from 'public/img/2.png';
import imgBlog3 from 'public/img/2-3.png';
import imgBlog4 from 'public/img/3.png';
import imgBlog5 from 'public/img/bg00.png';
import imgBlog6 from 'public/img/bg01.png';
import imgBlog7 from 'public/img/78.png';
import imgBlog8 from 'public/img/cta-bg2.jpg';
import imgBlog9 from 'public/img/cta-bg.png';
import Image, { StaticImageData } from 'next/image';
import avatar from 'public/img/avaters/avatar1.png';

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
  const category = [
    {
      title: 'All',
      link: '/blog',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
        },
        {
          title: 'Entertainment',
          link: '/blog/entertainment',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog3,
              category: 'all',
            },
          ],
        },
        {
          title: 'Bisnis',
          link: '/blog/bisnis',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog4,
              category: 'all',
            },
          ],
        },
        {
          title: 'Teknologi',
          link: '/blog/teknologi',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog5,
              category: 'all',
            },
          ],
        },
        {
          title: 'Pendidikan',
          link: '/blog/pendidikan',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog6,
              category: 'all',
            },
          ],
        },
      ],
    },
    {
      title: 'Politik',
      link: '/blog/bolitic',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
        },
        {
          title: 'Entertainment',
          link: '/blog/entertainment',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog3,
              category: 'all',
            },
          ],
        },
        {
          title: 'Bisnis',
          link: '/blog/bisnis',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog4,
              category: 'all',
            },
          ],
        },
        {
          title: 'Teknologi',
          link: '/blog/teknologi',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog5,
              category: 'all',
            },
          ],
        },
        {
          title: 'Pendidikan',
          link: '/blog/pendidikan',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog6,
              category: 'all',
            },
          ],
        },
      ],
    },
    {
      title: 'Entertainment',
      link: '/blog/entertainment',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
        },
        {
          title: 'Entertainment',
          link: '/blog/entertainment',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog3,
              category: 'all',
            },
          ],
        },
        {
          title: 'Bisnis',
          link: '/blog/bisnis',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog4,
              category: 'all',
            },
          ],
        },
        {
          title: 'Teknologi',
          link: '/blog/teknologi',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog5,
              category: 'all',
            },
          ],
        },
        {
          title: 'Pendidikan',
          link: '/blog/pendidikan',
          children: [
            {
              title:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
              image: imgBlog6,
              category: 'all',
            },
          ],
        },
      ],
    },
    {
      title: 'Bisnis',
      link: '/blog/bisnis',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog4,
        },
      ],
    },
    {
      title: 'Teknologi',
      link: '/blog/teknologi',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog5,
        },
      ],
    },
    {
      title: 'Pendidikan',
      link: '/blog/pendidikan',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog6,
        },
      ],
    },
    {
      title: 'Otomotif',
      link: '/blog/otomotif',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog7,
        },
      ],
    },
    {
      title: 'Pemasaran',
      link: '/blog/pemasaran',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog8,
        },
      ],
    },
    {
      title: 'Keuangan',
      link: '/blog/keuangan',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog9,
        },
      ],
    },
  ];
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

      <div className="mx-24 mb-20 flex justify-between ">
        <div className="border border-secondary-text flex items-center gap-5 pl-2 rounded-sm">
          Populer <MdKeyboardArrowDown />
        </div>
        <div className="flex gap-5 items-center">
          {category.map((listcate, idx) => (
            <div key={idx}>
              <div>
                <Link href={listcate.link}>{listcate.title}</Link>
              </div>
            </div>
          ))}
          <MdKeyboardArrowRight />
        </div>

        <div className="flex gap-3">
          <BsFilter /> Filters
        </div>
      </div>

      {category.map((listTwo, idxList) => (
        <div className="grid grid-cols-3 gap-5 mx-24" key={idxList}>
          {listTwo.children.map((childTwo, idxTwo) => (
            <div className="grid" key={idxTwo}>
              <Image src={imgBlog} alt="" className="rounded-xl" />

              <div className="flex justify-between mt-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={avatar}
                    alt=""
                    className="rounded-full w-10 h-10"
                  />
                  <h1>Ahmad tatang</h1>
                </div>
                <div className="flex items-center gap-3">
                  <BsFillHeartFill />
                  66
                </div>
                <div className="flex items-center gap-3">
                  <BsFillEyeFill />
                  2.2k
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className=""></div>
    </>
  );
}
