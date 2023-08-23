import React from 'react';
// import '@/styles/Animation.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsWhatsapp,
  BsTiktok,
} from 'react-icons/bs';
import OurMission from '@/components/app/home/our-mission';
import Animate from '../../../../public/img/animate/building1.png';
import Animate2 from '../../../../public/img/animate/building2.png';
import Animate3 from '../../../../public/img/animate/building3.png';
import Animate4 from '../../../../public/img/animate/building4.png';
import Animate5 from '../../../../public/img/animate/building5.png';
import Animate6 from '../../../../public/img/animate/park.png';
import Animate7 from '../../../../public/img/animate/truck2.png';
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
    iconK: <MdOutlineArrowForwardIos />,
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
  return (
    <>
      <OurMission />
      <div className="bg-[#081c25] py-20 text-white">
        <div className="grid grid-cols-4 mx-28 gap-5">
          {Footers.map((footer, index) => (
            <div className={footer.title} key={index}>
              <h1 className="text-white text-xl">{footer.title}</h1>
              <hr className="bg-base-blue w-5 h-[2px] mt-2" />

              {/* Render content based on footer type */}
              {footer.content && (
                <p className="text-gray-text mt-5">{footer.content}</p>
              )}

              {footer.children && (
                <div className="mt-5">
                  {(
                    footer.children as {
                      icons: React.ReactElement;
                      title: string;
                    }[]
                  ).map((child, childIndex) => (
                    <div className="flex items-center gap-2" key={childIndex}>
                      {footer.icon && footer.icon}
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

        {/* Animation Section */}
        {/* <div className="relative overflow-hidden w-full h-[400px]">
        <div className="animate-building absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-auto">
          <Image src={Animate} alt="" className="w-full h-auto" />
        </div>
        <div className="animate-building2 absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-auto">
          <Image src={Animate2} alt="" className="w-full h-auto" />
        </div> */}
        {/* Add other building images with different classes */}

        {/* <div className="animate-park absolute bottom-0 left-0 w-full h-auto">
          <Image src={Animate3} alt="" className="w-full h-auto" />
        </div>

        <div className="animate-park absolute bottom-0 left-0 w-full h-auto">
          <Image src={Animate4} alt="" className="w-full h-auto" />
        </div>

        <div className="animate-park absolute bottom-0 left-0 w-full h-auto">
          <Image src={Animate5} alt="" className="w-full h-auto" />
        </div>

        <div className="animate-truck absolute bottom-[10%] left-0 w-[200px] h-auto">
          <Image src={Animate7} alt="" className="w-full h-auto" />
        </div>
      </div> */}
      </div>
    </>
  );
}
