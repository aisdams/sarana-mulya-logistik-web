import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import dangerousIm from 'public/img/terms/dangerous/001-explosion.png';
import dangerousIm2 from 'public/img/terms/dangerous/001-gas-tank.png';
import dangerousIm3 from 'public/img/terms/dangerous/002-toxic-1.png';
import dangerousIm4 from 'public/img/terms/dangerous/003-gas-cylinder.png';
import dangerousIm5 from 'public/img/terms/dangerous/003-flask.png';
import dangerousIm6 from 'public/img/terms/dangerous/001-toxic.png';
import dangerousIm7 from 'public/img/terms/dangerous/003-radiation.png';
import dangerousIm8 from 'public/img/terms/dangerous/001-corrosive.png';
import dangerousIm9 from 'public/img/terms/dangerous/002-warning.png';
import banImage from 'public/img/terms/ban/003-lungs.png';
import banImage2 from 'public/img/terms/ban/supplies.png';
import banImage3 from 'public/img/terms/ban/animal.png';
import banImage4 from 'public/img/terms/ban/002-drugs.png';
import banImage5 from 'public/img/terms/ban/age-limit.png';
import banImage6 from 'public/img/terms/ban/skull-and-bones.png';
import Image from 'next/image';
import Faqcom from '@/components/app/faq/faqcom';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'information/terms',
        'home/faq',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

interface Child {
  title: string;
  [key: string]: any;
}

export default function Terms() {
  const { t } = useTranslation('information/terms');
  const sideBars: Child[] = [
    {
      title: 'FAQ',
      children: [
        {
          title: 'FAQ',
          pages: <Faqcom />,
        },
      ],
    },
    {
      title: t('titleSideLeft.title'),
      children: [
        {
          title: t('titleSideLeft.title2'),
          children: [
            {
              image: dangerousIm,
              title: t('sideLeftOne.title'),
              desc: t('sideLeftOne.desc'),
            },
            {
              image: dangerousIm2,
              title: t('sideLeftOne.title2'),
              desc: t('sideLeftOne.desc2'),
            },
            {
              image: dangerousIm3,
              title: t('sideLeftOne.title3'),
              desc: t('sideLeftOne.desc3'),
            },
            {
              image: dangerousIm4,
              title: t('sideLeftOne.title4'),
              desc: t('sideLeftOne.desc4'),
            },
            {
              image: dangerousIm5,
              title: t('sideLeftOne.title5'),
              desc: t('sideLeftOne.desc5'),
            },
            {
              image: dangerousIm6,
              title: t('sideLeftOne.title6'),
              desc: t('sideLeftOne.desc6'),
            },
            {
              image: dangerousIm7,
              title: t('sideLeftOne.title7'),
              desc: t('sideLeftOne.desc7'),
            },
            {
              image: dangerousIm8,
              title: t('sideLeftOne.title8'),
              desc: t('sideLeftOne.desc8'),
            },
            {
              image: dangerousIm9,
              title: t('sideLeftOne.title9'),
              desc: t('sideLeftOne.desc9'),
            },
          ],
        },
        {
          title: t('titleSideLeft.title3'),
          children: [
            {
              image: banImage,
              title: t('sideLeftTwo.title'),
            },
            {
              image: banImage2,
              title: t('sideLeftTwo.title2'),
            },
            {
              image: banImage3,
              title: t('sideLeftTwo.title3'),
            },
            {
              image: banImage4,
              title: t('sideLeftTwo.title4'),
            },
            {
              image: banImage5,
              title: t('sideLeftTwo.title5'),
            },
            {
              image: banImage6,
              title: t('sideLeftTwo.title6'),
            },
          ],
        },
      ],
    },
  ];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">{t('hero.desc')}</h1>
        </div>
      </div>

      <div className="lg:mx-28 mb-20 mt-10 mx-1">
        {sideBars.map((sidebar, idx) => (
          <div className="lg:flex md:grid mx-0" key={idx}>
            <div className="sideLeft lg:w-1/3 w-full p-4">
              <h1 className="font-bold">{sidebar.title}</h1>
              <div className="ml-4">
                {sidebar.children.map((category: any, categoryIdx: number) => (
                  <div
                    key={categoryIdx}
                    onClick={() => handleCategoryClick(category.title)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h2>{category.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="sideRight lg:w-2/3 w-full lg:px-4">
              {sidebar.children.map((category: any) => {
                if (category.title === activeCategory) {
                  return (
                    <div key={category.title}>
                      {/* <h2>{category.title}</h2> */}
                      {category.pages
                        ? category.pages
                        : category.children.map(
                            (child: any, childIdx: number) => (
                              <div
                                key={childIdx}
                                className="lg:flex gap-5 mb-5 items-center text-center lg:mt-0 mt-10 px-2 grid mx-auto"
                              >
                                {child.image && (
                                  <Image
                                    src={child.image}
                                    alt={child.title}
                                    width={30}
                                    height={30}
                                    className="mx-auto"
                                  />
                                )}
                                <div className="block">
                                  <h3 className="text-[#2b2b2b]">
                                    {child.title}
                                    <br />
                                    <span className="text-[#706866]">
                                      {child.desc}
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            )
                          )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
