import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Value() {
  const { t } = useTranslation('fivesec/value');
  const values = [
    {
      title: 'Nilai',
      children: [
        {
          title: t('children.title'),
          desc: t('children.desc'),
        },
        {
          title: t('children.title2'),
          desc: t('children.desc2'),
        },
        {
          title: t('children.title3'),
          desc: t('children.desc3'),
        },
      ],
    },
  ];

  let number = 1;
  return (
    <div>
      {values.map((value, idx) => (
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 text-center mx-44 my-20"
          key={idx}
        >
          {value.children.map((child, childIdx) => (
            <div
              key={childIdx}
              className="hover:bg-[#2ba7c0] hover:rounded-lg pt-10 py-14 h-[32rem] hover:text-white"
            >
              <div className="bg-blue-50/60 rounded-full w-32 h-32 mx-auto grid text-center items-center">
                <div className="bg-blue-400/25 rounded-full w-16 h-16 mx-auto grid text-center items-center">
                  <div className="text-5xl font-light">{number++}</div>
                </div>
              </div>
              <h2 className="font-semibold text-2xl my-8">{child.title}</h2>
              <p className="px-5">{child.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
