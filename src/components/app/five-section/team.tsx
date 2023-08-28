import React, { useState } from 'react';
import TeamOne from 'public/img/tim/tim1.jpg';
import TeamTwo from 'public/img/tim/tim2.jpg';
import TeamThree from 'public/img/tim/tim3.jpg';
import Image, { StaticImageData } from 'next/image';

const teams = [
  {
    title: 'Tim',
    children: [
      {
        image: TeamOne,
        title: 'Tim Marketing',
        desc: 'Tim penjualan kami selalu siap membantu klien menemukan layanan dan produk yang tepat untuk meningkatkan kualitas pekerjaan mereka dan meningkatkan efisiensi alur kerja.',
      },
      {
        image: TeamTwo,
        title: 'Tim Customer Service',
        desc: 'Tim customer service kami memastikan pengiriman dilakukan secara efisien dan aman. Selain itu, kami hadir untuk membantu pelanggan dalam memahami fitur dan fungsi layanan yang dibutuhkan.',
      },
      {
        image: TeamThree,
        title: 'Tim Kami',
        desc: 'Tim kami akan membantu Anda untuk lebih memahami layanan, produk, dan sistem kami. Penting bagi kami bahwa klien kami dapat memastikan bahwa semua layanan yang kami tawarkan bernilai tambah untuk bisnis mereka.',
      },
    ],
  },
];
export default function Team() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    teams[0].children[0].image // Atur gambar pertama sebagai nilai awal
  );

  const handleTitleClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  return (
    <div className="mx-28 items-center my-20 relative">
      {teams.map((team, idx) => (
        <div className="grid gap-10" key={idx}>
          {team.children.map((chil, childIdx) => (
            <div key={childIdx} className="grid lg:grid-cols-2 gap-5">
              <div
                className="relative shadow-[2px_0px_20px_0px_rgba(0,0,0,0.3)] h-max py-5 cursor-pointer "
                onClick={() => handleTitleClick(chil.image)}
              >
                <hr className="bg-base-blue h-36 w-[4px] absolute top-0 text-center my-auto" />
                <div className="mx-8">
                  <h1 className="text-base-blue text-center font-semibold text-xl mb-2">
                    {chil.title}
                  </h1>
                  <p className="text-gray-secondary text-[15px]">{chil.desc}</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 mt-10">
                {selectedImage === chil.image && (
                  <Image src={selectedImage} alt="" width={550} />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
