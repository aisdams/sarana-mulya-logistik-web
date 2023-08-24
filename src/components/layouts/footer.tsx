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

import Street from '../../../public/img/animate/street.png';
import Animate from '../../../public/img/animate/building4.png';
import Animate2 from '../../../public/img/animate/building5.png';
import Animate3 from '../../../public/img/animate/building1.png';
import Animate4 from '../../../public/img/animate/building2.png';
import Animate5 from '../../../public/img/animate/building3.png';
import ParkAnim from '../../../public/img/animate/park.png';
import Truck from '../../../public/img/animate/truck2.png';
import Image from 'next/image';

const Footers = [
  {
    title: 'Tentang Kami',
    content: `Sarana Mulya Logistik adalah jasa pengiriman yang berfokus pada pengiriman alat kesehatan, farmasi, dan kosmetik. Dengan menjunjung tinggi motto kami “Your Trust is Our Mision” yang menjadi DNA dalam kehidupan sehari-hari kami.`,
  },
  {
    title: 'Jam Kerja',
    icon: <MdOutlineArrowForwardIos />,
    children: [
      {
        title: `Senin - Jum'at: 09:00 - 17:00`,
      },
      {
        title: `Sabtu: 09:00 - 14:00`,
      },
      {
        title: `Minggu: Tutup`,
      },
    ],
  },
  {
    title: 'Msdia Sosial',
    icon: <MdOutlineArrowForwardIos />,
    children: [
      {
        icons: <BsFacebook />,
        title: 'Facebook',
      },
      {
        icons: <BsYoutube />,
        title: 'Youtube',
      },
      {
        icons: <BsInstagram />,
        title: 'Instagram',
      },
      {
        icons: <BsWhatsapp />,
        title: 'Whatsapp',
      },
      {
        icons: <BsTiktok />,
        title: 'Tiktok',
      },
    ],
  },
  {
    title: 'Kontak',
    paragrafOne: `Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR18 - 19 Kota
    Bekasi, Jawa Barat 17435`,
    paragrafTwo: `info@saranamulyalogisticscorp.com`,
    paragrafThree: `+62 21 22815019`,
  },
];

export default function Footer() {
  const router = useRouter();
  const [shouldRenderOurMission, setShouldRenderOurMission] = useState(true);

  useEffect(() => {
    if (router.pathname.includes('/contact')) {
      setShouldRenderOurMission(false);
    } else {
      setShouldRenderOurMission(true);
    }
  }, [router.pathname]);

  return (
    <>
      {shouldRenderOurMission && <OurMission />}
      <div className="bg-[#081c25] py-20 text-white">
        <div className="grid grid-cols-4 mx-28 gap-5 mb-28">
          {Footers.map((footer, index) => (
            <div className={footer.title} key={index}>
              <h1 className="text-white text-xl">{footer.title}</h1>
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
                    }[]
                  ).map((child, childIndex) => (
                    <div className="flex items-center gap-3" key={childIndex}>
                      <div className="text-xs">
                        {footer.icon && footer.icon}
                      </div>
                      {child.icons}
                      <p>{child.title}</p>
                    </div>
                  ))}
                </div>
              )}

              {footer.paragrafOne && (
                <div className="text-white mt-5">
                  <p>{footer.paragrafOne}</p>
                  <p>{footer.paragrafTwo}</p>
                  <p>{footer.paragrafThree}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between z-1 px-10 gap-5">
          <div className="flex">
            <Image src={Animate} alt="" className="w-32" />
            <Image src={Animate2} alt="" className="w-32" />
          </div>
          <Image src={ParkAnim} alt="" className="w-32" />
          <div className="flex">
            <Image src={Animate3} alt="" className="w-32" />
            <Image src={Animate4} alt="" className="w-32" />
            <Image src={Animate5} alt="" className="w-32" />
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
