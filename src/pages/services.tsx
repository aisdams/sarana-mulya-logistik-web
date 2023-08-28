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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['services'])),
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
      desc: 'EXPRESS adalah layanan yang menawarkan jasa pengiriman atau paket door to door dengan waktu yang cepat, sebagian besar melalui jalur udara.',
    },
    {
      image: ServiceIm2,
      title: 'Reguler',
      link: '/services-detail/reguler',
      desc: 'REGULER adalah layanan yang menawarkan jasa pengiriman atau paket door-to-door dengan jalur darat dan laut yang berfokus pada biaya yang lebih efisien dengan tetap memberikan kepastian waktu pengiriman.',
    },
    {
      image: ServiceIm3,
      title: 'Container',
      link: '/services-detail/container',
      desc: 'CONTAINER adalah layanan yang menawarkan jasa pengiriman paket atau High Value Shipment secara Door-to-door dengan menyediakan Full Container Load atau Less Container Load yang disesuaikan dengan kebutuhan pelanggan.',
    },
    {
      image: ServiceIm4,
      title: 'Trucking',
      link: '/services-detail/trucking',
      desc: 'TRUCKING adalah layanan yang menawarkan jasa pengiriman paket atau High Value Shipment secara door-to-door dengan menyediakan Full Trucking Load atau Less Trucking Load yang disesuaikan dengan kebutuhan pelanggan.',
    },
    {
      image: ServiceIm5,
      title: 'EXIM (EXPORT IMPORT)',
      link: '/services-detail/exim',
      desc: 'EXIM (EXPORT IMPORT) adalah layanan yang menawarkan jasa pengiriman, baik export maupun import door to door container maupun kg-base, serta layanan custom clearance. Layanan ini hadir dengan dua pilihan, Air Freight dan Sea Freight.',
    },
    {
      image: ServiceIm6,
      title: 'LINKEXPRESS',
      link: '/services-detail/linkex',
      desc: 'LINKEXPRESS adalah layanan yang menawarkan jasa pengiriman e-commerce dengan standar layanan reguler dengan leadtime terbaik.',
    },
  ];

  return (
    <>
      <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">{t('hero.subtitle')}</h1>
        </div>
      </div>

      <div className="my-28 mx-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {RenService.map((service, idx) => (
            <div className="text-justify pb-8 overflow-hidden group" key={idx}>
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  className="transition-transform group-hover:scale-110 duration-300 transform-origin-center"
                />
              </div>
              <Link href={service.link}>
                <h3 className="text-2xl my-3 group-hover:text-base-blue hover:border-b-2 border-base-blue w-max">
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
