import { GetServerSideProps } from 'next';
import ServiceIm from 'public/img/service/express-1.png';
import ServiceIm2 from 'public/img/service/reguler-1.png';
import ServiceIm3 from 'public/img/service/container-1.png';
import ServiceIm4 from 'public/img/service/trucking-1.png';
import ServiceIm5 from 'public/img/service/exim-1.png';
import ServiceIm6 from 'public/img/service/linkexpress-1.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'services',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};
export default function Services() {
  const { t } = useTranslation('services');

  const RenService = [
    {
      image: ServiceIm,
      title: 'Express',
      link: '/services-detail/express',
      desc: t('card.desc'),
    },
    {
      image: ServiceIm2,
      title: 'Reguler',
      link: '/services-detail/reguler',
      desc: t('card.desc2'),
    },
    {
      image: ServiceIm3,
      title: 'Container',
      link: '/services-detail/container',
      desc: t('card.desc3'),
    },
    {
      image: ServiceIm4,
      title: 'Trucking',
      link: '/services-detail/trucking',
      desc: t('card.desc4'),
    },
    {
      image: ServiceIm5,
      title: 'EXIM (EXPORT IMPORT)',
      link: '/services-detail/exim',
      desc: t('card.desc5'),
    },
    {
      image: ServiceIm6,
      title: 'LINKEXPRESS',
      link: '/services-detail/linkex',
      desc: t('card.desc6'),
    },
  ];

  return (
    <>
      <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold  lg:text-5xl text-4xl">
            {t('hero.subtitle')}
          </h1>
        </div>
      </div>

      <div className="my-28 lg:mx-24 mx-5 mb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {RenService.map((service, idx) => (
            <div className="text-justify pb-8 overflow-hidden group" key={idx}>
              <div className="relative overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="duration-300"
                >
                  <Image src={service.image} alt="" />
                </motion.button>
              </div>
              <Link href={service.link}>
                <h3 className="text-xl my-3 group-hover:text-base-blue hover:border-b-2 border-base-blue w-max">
                  {service.title}
                </h3>
              </Link>
              <p className="text-brown-gray">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
