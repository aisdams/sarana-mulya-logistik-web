import React, { useState } from 'react';
import TeamOne from 'public/img/tim/tim1.jpg';
import TeamTwo from 'public/img/tim/tim2.jpg';
import TeamThree from 'public/img/tim/tim3.jpg';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';

export default function Team() {
  const { t } = useTranslation('fivesec/team');
  const teams = [
    {
      title: 'Tim',
      children: [
        {
          image: TeamOne,
          title: t('children.title'),
          desc: t('children.desc'),
        },
        {
          image: TeamTwo,
          title: t('children.title2'),
          desc: t('children.desc2'),
        },
        {
          image: TeamThree,
          title: t('children.title3'),
          desc: t('children.desc3'),
        },
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    teams[0].children[0].image
  );

  const handleTitleClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  return (
    <div className="lg:mx-28 mx-0 items-center my-20 relative">
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
              <div className="lg:absolute lg:right-0 lg:top-0 mt-10">
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
