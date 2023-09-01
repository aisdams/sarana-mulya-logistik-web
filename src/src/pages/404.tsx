import React from 'react';
import ImageErr from '../../public/img/avaters/error.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <div className="text-3xl mx-auto grid justify-center items-center text-center h-full w-full mb-20">
        <div className="mt-52">
          <Image src={ImageErr} alt="" />
          <Link href="/">
            <h1 className="text-base-blue font-semibold">Back To Home</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
