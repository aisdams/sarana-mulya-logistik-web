import Link from 'next/link';
import React, { useState } from 'react';
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
import avatar2 from 'public/img/avaters/avatar2.png';
import avatar3 from 'public/img/avaters/avatar3.png';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  type BlogCategory = {
    title: string;
    desc?: string;
    link?: string;
    children?: BlogCategory[];
    image?: StaticImageData;
    category?: string;
    name?: string;
    avatar?: StaticImageData;
    categoryTitle?: string;
  };

  const category: BlogCategory[] = [
    {
      title: 'All',
      link: '/blog',
      children: [
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut',
          image: imgBlog,
          category: 'all',
          name: 'Akita Razel',
          avatar: avatar,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
          name: 'Justin Timb',
          avatar: avatar3,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog3,
          category: 'all',
          name: 'Lola Renata',
          avatar: avatar,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog4,
          category: 'all',
          name: 'Medea Alter',
          avatar: avatar3,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog5,
          category: 'all',
          name: 'Zeber Uncle',
          avatar: avatar3,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog6,
          category: 'all',
          name: 'Violetta',
          avatar: avatar,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog7,
          category: 'all',
          name: 'Luci Amelthea',
          avatar: avatar,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog8,
          category: 'all',
          name: 'Three Krap',
          avatar: avatar2,
        },
        {
          title:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog9,
          category: 'all',
          name: 'Crazy Stone',
          avatar: avatar3,
        },
      ],
    },
    {
      title: 'Politik',
      link: '/blog/politic',
      children: [
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem2',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
          categoryTitle: '#Entertainment #Teknologi #Otomotif',
        },
        {
          title: 'Test Lorem3',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog3,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem4',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem5',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
      ],
    },
    {
      title: 'Entertainment',
      link: '/blog/entertainment',
      children: [
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog2,
          category: 'all',
          categoryTitle: '#Entertainment #Teknologi #Otomotif',
        },
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog3,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
        {
          title: 'Test Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog,
          category: 'all',
          categoryTitle: '#Pendidikan #Politik #Bisnis',
        },
      ],
    },
    {
      title: 'Bisnis',
      link: '/blog/bisnis',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog4,
        },
      ],
    },
    {
      title: 'Teknologi',
      link: '/blog/teknologi',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog5,
        },
      ],
    },
    {
      title: 'Pendidikan',
      link: '/blog/pendidikan',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog6,
        },
      ],
    },
    {
      title: 'Otomotif',
      link: '/blog/otomotif',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog7,
        },
      ],
    },
    {
      title: 'Pemasaran',
      link: '/blog/pemasaran',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
          image: imgBlog8,
        },
      ],
    },
    {
      title: 'Keuangan',
      link: '/blog/keuangan',
      children: [
        {
          title: 'Text Lorem',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A laudantium autem ut perspiciatis error? Consectetur eligendi corporis delectus blanditiis sequi.',
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

      <div className="lg:mx-24 mx-5 mb-20 lg:flex grid lg:justify-between">
        <div className="grid !relative">
          <button
            className="border border-secondary-text flex items-center gap-5 pl-2 rounded-sm w-max"
            onClick={() => setIsOpen(!isOpen)}
          >
            Populer <MdKeyboardArrowDown />
          </button>
          {isOpen && (
            <div className="absolute top-6 z-20 px-5 py-3 bg-white right-2 shadow-[2px_0px_20px_0px_rgba(0,0,0,0.3)]">
              <Link href="http://localhost:3000/information/category-blog/Politik">
                <p className="mb-3">Politik</p>
              </Link>
              <Link href="http://localhost:3000/information/category-blog/Entertainment">
                <p className="mb-3">Entertainment</p>
              </Link>
              <Link href="http://localhost:3000/information/category-blog/Bisnis">
                <p className="mb-3">Bisnis C</p>
              </Link>
              <Link href="http://localhost:3000/information/category-blog/Teknologi">
                <p className="mb-3">Teknologi C</p>
              </Link>
            </div>
          )}
        </div>
        <div className="flex gap-5 items-center overflow-x-scroll lg:my-0 my-5">
          {category.map((listcate, idx) => (
            <div key={idx}>
              <div>
                {listcate.link ? (
                  <Link href={`/information/category-blog/${listcate.title}`}>
                    {listcate.title}
                  </Link>
                ) : (
                  listcate.title
                )}
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
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-24 mx-5"
          key={idxList}
        >
          {listTwo.title === 'All' &&
            listTwo.children?.map((childTwo, idxTwo) => (
              <div
                className="bg-white rounded-xl shadow-md p-4 grid"
                key={idxTwo}
              >
                <Image
                  src={childTwo.image || '/placeholder.png'}
                  alt=""
                  className="rounded-xl w-full h-full"
                />

                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={childTwo.avatar || '/avatar.png'}
                      alt=""
                      className="rounded-full w-10 h-10"
                    />
                    <h1 className="text-lg text-secondary-text">
                      {childTwo.name}
                    </h1>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-3 group">
                        <BsFillHeartFill className="group-hover:text-red-500" />
                        <span className="text-sm">66</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <BsFillEyeFill />
                      <span className="text-sm">2.2k</span>
                    </div>
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
