import React from 'react';
import Service1 from '../../../../public/img/service/express-1.png';
import Service2 from '../../../../public/img/service/reguler-1.png';
import Service3 from '../../../../public/img/service/trucking-1.png';
import Service4 from '../../../../public/img/service/container-1.png';
import Service5 from '../../../../public/img/service/exim-1.png';
import Service6 from '../../../../public/img/service/linkexpress-1.png';
import Image from 'next/image';
import Link from 'next/link';

const Services = [
  {
    Image: Service1,
    title: 'Express',
    link: '/',
  },
  {
    Image: Service2,
    title: 'Reguler',
    link: '/',
  },
  {
    Image: Service3,
    title: 'Trucking',
    link: '/',
  },
  {
    Image: Service4,
    title: 'Container',
    link: '/',
  },
  {
    Image: Service5,
    title: 'Export Import',
    link: '/',
  },
  {
    Image: Service6,
    title: 'Linkexpress',
    link: '/',
  },
];

export default function OurService() {
  return (
    <div className="my-20">
      <h1 className="text-secondary-text text-3xl font-bold">
        <span className="text-base-blue">Layanan</span> Kami
      </h1>
      <hr className="w-[3rem] bg-base-blue h-1 my-3" />

      <div className="grid grid-cols-3 gap-5">
        {Services.map((service, idx) => (
          <div
            className="hover:shadow-[0px_10px_0px_0px_rgba(43,167,192,0.75)] mb-10 rounded-lg ease-out duration-300 hover:-translate-y-3"
            key={idx}
          >
            <Image src={service.Image} alt="" />
            <Link href={service.link}>
              <h1 className="font-bold text-2xl mt-10 ml-5 pb-24">
                {service.title}
              </h1>
            </Link>
          </div>
        ))}
      </div>

      <button className="bg-base-blue rounded-full py-2 px-3 text-center mx-auto items-center grid text-white">
        Selengkapnya
      </button>
    </div>
  );
}
