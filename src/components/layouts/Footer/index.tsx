import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsWhatsapp,
  BsTiktok,
} from 'react-icons/bs';

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
    <div className="bg-[#081c25] py-20">
      <div className="grid grid-cols-4 mx-28 gap-5">
        <div className="About">
          <h1 className="text-white text-xl">Tentang Kami</h1>
          <hr className="bg-base-blue w-3 h-1 mt-2" />

          <p className="text-gray-text mt-5">
            Sarana Mulya Logistik adalah jasa pengiriman yang berfokus pada
            pengiriman alat kesehatan, farmasi, dan kosmetik. Dengan menjunjung
            tinggi motto kami “Your Trust is Our Mision” yang menjadi DNA dalam
            kehidupan sehari-hari kami.
          </p>
        </div>

        <div className="time text-white">
          <h1 className="text-xl">Jam Kerja</h1>
          <hr className="bg-base-blue w-3 h-1 mt-2" />

          <div className="mt-5">
            <div className="flex items-center gap-2">
              <MdOutlineArrowForwardIos className="text-xs" />
              <p>Senin - Jumat: 09:00 - 17:00</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineArrowForwardIos className="text-xs" />
              <p>Senin - Jumat: 09:00 - 17:00</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineArrowForwardIos className="text-xs" />
              <p>Senin - Jumat: 09:00 - 17:00</p>
            </div>
          </div>
        </div>

        <div className="Medsos">
          <h1 className="text-white text-xl">Msdia Sosial</h1>
          <hr className="bg-base-blue w-3 h-1 mt-2" />

          <div className="mt-5 text-white">
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineArrowForwardIos className="text-xs" />
              <BsFacebook />
              <p>Facebook</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineArrowForwardIos className="text-xs" />
              <BsYoutube />
              <p>Youtube</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineArrowForwardIos className="text-xs" />
              <BsInstagram />
              <p>Insagram</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineArrowForwardIos className="text-xs" />
              <BsWhatsapp />
              <p>Whatsaoo</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdOutlineArrowForwardIos className="text-xs" />
              <BsTiktok />
              <p>Tiktok</p>
            </div>
          </div>
        </div>

        <div className="Contact">
          <h1 className="text-white text-xl">Kontak</h1>
          <hr className="bg-base-blue w-3 h-1 mt-2" />

          <div className="text-white mt-5">
            <p>
              Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR18 - 19 Kota
              Bekasi, Jawa Barat 17435
            </p>
            <p>info@saranamulyalogisticscorp.com</p>
            <p>+62 21 22815019</p>
          </div>
        </div>
      </div>
    </div>
  );
}
