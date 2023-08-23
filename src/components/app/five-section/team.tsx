import React, { useState } from 'react';
import TeamOne from '../../../../public/img/tim/tim1.jpg';
import TeamTwo from '../../../../public/img/tim/tim2.jpg';
import TeamThree from '../../../../public/img/tim/tim3.jpg';
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
    <div className="mx-28 items-center">
      {teams.map((team, idx) => (
        <div className="grid gap-10" key={idx}>
          {team.children.map((chil, childIdx) => (
            <div key={childIdx} className="flex items-center">
              <div className="relative">
                <hr className="bg-base-blue h-28 w-[2px] absolute top-0 text-center my-auto" />
                <div className="ml-5">
                  <h1
                    onClick={() => handleTitleClick(chil.image)}
                    className="cursor-pointer"
                  >
                    {chil.title}
                  </h1>
                  <p>{chil.desc}</p>
                </div>
              </div>
              <div className="">
                {selectedImage === chil.image && (
                  <Image src={selectedImage} alt="" width={500} />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
