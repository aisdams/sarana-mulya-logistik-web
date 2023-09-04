import { GetServerSideProps } from 'next';
import React from 'react';
import { LiaMapSolid, LiaClock } from 'react-icons/lia';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'contact',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};
export default function Contact() {
  const { t } = useTranslation('contact');
  const Contacts = [
    {
      icon: <LiaMapSolid />,
      title: t('sideRight.title'),
      desc: t('sideRight.desc'),
    },
    {
      icon: <LiaClock />,
      title: t('sideRight.titleTwo'),
      desc: [
        t('sideRight.descOne'),
        t('sideRight.descTwo'),
        t('sideRight.descThree'),
      ],
    },
    {
      icon: <RiContactsBook2Fill />,
      title: t('sideRight.titleThree'),
      desc: [t('sideRight.email'), , t('sideRight.phone')],
    },
  ];
  return (
    <>
      <motion.div>
        <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
          <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
            <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
            <h1 className="font-bold  lg:text-5xl text-4xl">
              {t('hero.subtitle')}
            </h1>
          </div>
        </div>
        <div className="my-28 lg:mx-24 mx-3">
          <div className="grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="">
              <h1 className="font-bold lg:text-3xl text-2xl text-secondary-text">
                {t('titlecec')}
              </h1>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="border border-gray-text rounded-sm px-5 py-3"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="border border-gray-text rounded-sm px-5 py-3"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="phone"
                    id=""
                    className="border border-gray-text rounded-sm px-5 py-3"
                    placeholder="Phone"
                  />
                  <input
                    type="email"
                    name="subject"
                    id=""
                    className="border border-gray-text rounded-sm px-5 py-3"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message"
                  id=""
                  className="border border-gray-text rounded-sm px-5 h-40 py-2 w-full mt-5"
                  placeholder="Message"
                ></textarea>
                <button className="rounded-full py-3 px-8 bg-base-blue text-white">
                  Kirim
                </button>
              </div>
            </div>

            <div className="grid mt-5">
              {Contacts.map((contact, idx) => (
                <div className="lg:flex grid mb-10 gap-5" key={idx}>
                  <div className="text-base-blue text-4xl">{contact.icon}</div>
                  <div>
                    <h1 className="font-semibold text-xl mb-2 text-secondary-text">
                      {contact.title}
                    </h1>
                    <p className="text-brown-gray">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-navy w-full h-[250px] mx-auto  grid text-center items-center place-content-center">
          <div className="flex gap-5">
            <FaMapMarkerAlt className="text-base-blue text-5xl" />
            <h1 className="text-white text-4xl">{t('location')}</h1>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pt%20Sarana%20Mulya%20Logistik%20Citra%20Grand%20Cibubur%20CBD%20Jl%20Citra%20Grand%20Cibubur%20II%20Blok%20AR%2018%20&amp;%2019,%20Kota%20Bks,%20Jawa%20Barat%2017435+(Sarana%20Mulya%20Logistik)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
