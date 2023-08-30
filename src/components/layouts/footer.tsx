import React, { useEffect, useState } from 'react';
// import '@/styles/Animation.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useRouter } from 'next/router';
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsWhatsapp,
  BsTiktok,
} from 'react-icons/bs';
import OurMission from '@/components/app/home/our-mission';

import Street from 'public/img/animate/street.png';
import Animate from 'public/img/animate/building4.png';
import Animate2 from 'public/img/animate/building5.png';
import Animate3 from 'public/img/animate/building1.png';
import Animate4 from 'public/img/animate/building2.png';
import Animate5 from 'public/img/animate/building3.png';
import ParkAnim from 'public/img/animate/park.png';
import Truck from 'public/img/animate/truck2.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const router = useRouter();
  const { t } = useTranslation('footer');
  const [shouldRenderOurMission, setShouldRenderOurMission] = useState(true);

  useEffect(() => {
    if (router.pathname.includes('/contact')) {
      setShouldRenderOurMission(false);
    } else {
      setShouldRenderOurMission(true);
    }
  }, [router.pathname]);

  const Footers = [
    {
      title: t('navigation.nav1'),
      content: t('textNav1'),
    },
    {
      title: t('navigation.nav2'),
      icon: <MdOutlineArrowForwardIos />,
      children: [
        {
          title: t('textNav3.text'),
        },
        {
          title: t('textNav3.text2'),
        },
        {
          title: t('textNav3.text3'),
        },
      ],
    },
    {
      title: t('navigation.nav3'),
      icon: <MdOutlineArrowForwardIos />,
      children: [
        {
          icons: <BsFacebook />,
          title: 'Facebook',
          link: 'https://www.facebook.com/saranamulya.logistik.5',
        },
        {
          icons: <BsYoutube />,
          title: 'Youtube',
          link: 'https://www.youtube.com/channel/UCyYZSQ3vEEAlQ4oCRMexWkA/featured',
        },
        {
          icons: <BsInstagram />,
          title: 'Instagram',
          link: 'https://www.instagram.com/saranamulyalogistik/',
        },
        {
          icons: <BsWhatsapp />,
          title: 'Whatsapp',
          link: 'https://api.whatsapp.com/send?phone=6285810558522',
        },
        {
          icons: <BsTiktok />,
          title: 'Tiktok',
          link: 'https://www.tiktok.com/@saranamulyalogistik',
        },
      ],
    },
    {
      title: t('navigation.nav4'),
      paragrafOne: `Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR18 - 19 Kota
    Bekasi, Jawa Barat 17435`,
      paragrafTwo: `info@saranamulyalogisticscorp.com`,
      paragrafThree: `+62 21 22815019`,
    },
  ];
  return (
    <>
      {shouldRenderOurMission && <OurMission />}
      <div className="bg-[#081c25] py-20 text-white">
        <div className="grid lg:grid-cols-4 lg:mx-28 mx-2 gap-5 mb-28 relative">
          {Footers.map((footer, index) => (
            <div className={footer.title} key={index}>
              <h1 className="text-white text-2xl">{footer.title}</h1>
              <hr className="bg-base-blue w-5 h-[2px] mt-2" />

              {/* Render content based on footer type */}
              {footer.content && (
                <p className="text-gray-text mt-5">{footer.content}</p>
              )}

              {footer.children && (
                <div className="mt-5 text-gray-text">
                  {(
                    footer.children as {
                      icons: React.ReactElement;
                      title: string;
                      link: string;
                    }[]
                  ).map((child, childIndex) => (
                    <div key={childIndex}>
                      <a
                        href={child.link}
                        className="flex items-center gap-3 mb-3 hover:text-base-blue"
                      >
                        <div className="text-xs">
                          {footer.icon && footer.icon}
                        </div>
                        {child.icons}
                        <p>{child.title}</p>
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {footer.paragrafOne && (
                <div className="text-gray-text mt-5">
                  <p className="mb-3">{footer.paragrafOne}</p>
                  <p className="mb-3">{footer.paragrafTwo}</p>
                  <p>{footer.paragrafThree}</p>
                </div>
              )}
            </div>
          ))}

          <div className="bg-[#bbd5e0] rounded-full w-10 h-10 shadow-[0_0_10px_3px_#34ade69c] absolute lg:right-[20rem] right-8 top-1/2" />
        </div>

        <div className="flex justify-between z-1 lg:px-10 gap-5 xs:px-20">
          <div className="flex">
            <Image src={Animate} alt="" className="lg:w-32 w-10" />
            <Image src={Animate2} alt="" className="lg:w-32 w-10" />
          </div>
          <Image src={ParkAnim} alt="" className="lg:w-32 w-10" />
          <div className="flex">
            <Image src={Animate3} alt="" className="lg:w-32 w-10" />
            <Image src={Animate4} alt="" className="lg:w-32 w-10" />
            <Image src={Animate5} alt="" className="lg:w-32 w-10" />
          </div>
        </div>
        <div className="relative z-[0]">
          <div className="absolute w-full bg-[#aaa8a7] h-[40px] top-0">
            <div
              className="absolute w-full h-20 bg-[#7A7A86] top-2 shadow-[0_1px_16px_rgba(111, 35, 51, 0.4)_inset]"
              style={{ backgroundImage: `url(${Street.src})` }}
            ></div>

            <div className="absolute -top-3 car z-10 carImage">
              <Image src={Truck} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-blue w-full h-14 text-white py-2 pl-28">
        <h1 className="text-white">
          Copyrights © 2022 -{' '}
          <span className="text-base-blue">Sarana Mulya Logistik</span> All
          Rights Reserved.
        </h1>
      </div>
    </>
  );
}
