import React, { useEffect, useState } from 'react';
import Service1 from 'public/img/service/express-1.png';
import Service2 from 'public/img/service/reguler-1.png';
import Service3 from 'public/img/service/trucking-1.png';
import Service4 from 'public/img/service/container-1.png';
import Service5 from 'public/img/service/exim-1.png';
import Service6 from 'public/img/service/linkexpress-1.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion, useAnimation } from 'framer-motion';

export default function OurService() {
  const { t } = useTranslation('home/our-services');
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const Services = [
    {
      Image: Service1,
      title: 'Express',
      link: '/services-detail/express',
    },
    {
      Image: Service2,
      title: 'Reguler',
      link: '/services-detail/reguler',
    },
    {
      Image: Service3,
      title: 'Trucking',
      link: '/services-detail/trucking',
    },
    {
      Image: Service4,
      title: 'Container',
      link: '/services-detail/container',
    },
    {
      Image: Service5,
      title: 'Export Import',
      link: '/services-detail/exim',
    },
    {
      Image: Service6,
      title: 'Linkexpress',
      link: '/services-detail/linkex',
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 1700;

      if (!isLoading) {
        if (window.scrollY > offset) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 2 } });
    }
  }, [controls, isVisible]);

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="my-20 mx-5">
        <h1 className="text-secondary-text text-3xl font-bold">
          <span className="text-base-blue">{t('heading.title')}</span>{' '}
          {t('heading.title2')}
        </h1>
        <hr className="w-[3rem] bg-base-blue h-1 my-3" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
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

        <Link href="http://localhost:3000/services">
          <button className="bg-base-blue rounded-full py-2 px-3 text-center mx-auto items-center grid text-white">
            {t('button.title')}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
