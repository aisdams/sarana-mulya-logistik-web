import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextImage from 'next/image';

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

interface BlogDetails {
  thumbnailSrc: string;
  createdAt: string;
  title: string;
  content: string;
}

export default function Index() {
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://api.cms.neelo.id/api/posts/${slug}`
        );
        if (response.ok) {
          const data = await response.json();
          setBlogDetails(data.data);
        } else {
          throw new Error('Failed to fetch blog details');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  if (!blogDetails) {
    return (
      <div>
        {' '}
        <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
          <div className="absolute top-1/2 left-0 right-0 text-white">
            <h3 className="tracking-[6px] mb-3">READ THE DETAILS</h3>
            <h1 className="font-bold lg:text-5xl text-3xl">SML!</h1>
          </div>
        </div>
        <div>Doesn{`'`}t Have Details BLOG......</div>
      </div>
    );
  }

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

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">READ THE DETAILS</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">SML!</h1>
        </div>
      </div>

      <article className="mx-auto justify-center items-center grid place-content-center w-[min(55%,1280px)] text-[#7070a1] my-24 prose prose-lg">
        <img
          src={`https://api.cms.neelo.id/${blogDetails.thumbnailSrc}`}
          alt=""
          className="w-full h-auto"
        />
        <div className="flex gap-5 mt-5">
          <div className="flex items-center gap-2">
            <FaUser /> Admin
          </div>
          <div className="flex items-center gap-2">
            <MdDateRange /> {formatDate(blogDetails.createdAt)}
          </div>
        </div>

        <h1 className="font-medium mt-5 text-3xl text-black">
          {blogDetails.title}
        </h1>
        <div
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: blogDetails.content }}
        ></div>
      </article>
    </>
  );
}
