'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFilter, BsFillEyeFill, BsFillHeartFill } from 'react-icons/bs';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Blog {
  id: string;
  title: string;
  thumbnailSrc: string;
  createdAt: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const res = await fetch('https://api.cms.neelo.id/api/posts');
  const data = await res.json();
  const page = query.page ? parseInt(query.page as string) : 1;
  const perPage = 6;
  const offset = (page - 1) * perPage;

  const blogs: Blog[] = data.data.map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    thumbnailSrc: `https://api.cms.neelo.id/${blog.thumbnailSrc}`,
    slug: blog.slug,
    createdAt: blog.createdAt,
  }));

  const totalCount = blogs.length;

  return {
    props: {
      blogs: blogs.slice(offset, offset + perPage),
      totalCount,
      currentPage: page,
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Blog({
  blogs,
  totalCount,
  currentPage,
}: {
  blogs: Blog[];
  totalCount: number;
  currentPage: number;
}) {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / 6);

  const navigateToBlogDetail = (slug: string) => {
    router.push(`/information/blog/blog-details/${slug}`);
  };
  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'en-US',
      options
    );
    return formattedDate;
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <Link
                href={`http://localhost:3000/information/blog/?page=${number}`}
                className={`${
                  number === currentPage
                    ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                    : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                } leading-tight py-2 px-3 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {number}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  };

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

        <div className="my-20 grid grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-[25rem] shadow-2xl pb-10 rounded-tl-xl rounded-tr-xl overflow-hidden"
            >
              <Image
                src={blog.thumbnailSrc}
                alt=""
                width={600}
                height={400}
                className="object-cover w-full h-56 mb-10"
              />
              <div className="grid pl-5">
                <h3 className="font-light">{formatDate(blog.createdAt)}</h3>
                <div
                  className="font-bold text-base-blue mt-5 text-xl tracking-wider cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToBlogDetail(blog.slug);
                  }}
                >
                  {blog.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">{renderPagination()}</div>
      </div>
    </>
  );
}
