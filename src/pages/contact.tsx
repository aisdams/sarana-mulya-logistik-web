import { GetServerSideProps } from 'next';
import React from 'react';
import { LiaMapSolid, LiaClock } from 'react-icons/lia';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
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
      <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold  lg:text-5xl text-4xl">
            {t('hero.subtitle')}
          </h1>
        </div>
      </div>
      <div className="my-28 lg:mx-24">
        <div className="grid lg:grid-cols-2 lg:gap-8 lg:items-center mx-5">
          <div className="">
            <h1 className="font-bold lg:text-3xl text-2xl text-secondary-text">
              {t('titlecec')}
            </h1>
            <div className="mt-8">
              <div className="grid lg:grid-cols-2 gap-5 w-full">
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

          <div className="grid mt-10">
            {Contacts.map((contact, idx) => (
              <div className="lg:flex grid mb-10 gap-5" key={idx}>
                <div className="text-base-blue text-4xl">{contact.icon}</div>
                <div>
                  <h1 className="font-semibold text-xl mb-2 text-secondary-text">
                    {contact.title}
                  </h1>
                  {Array.isArray(contact.desc) ? (
                    contact.desc.map((descItem, descIdx) => (
                      <p key={descIdx} className="text-brown-gray">
                        {descItem}
                      </p>
                    ))
                  ) : (
                    // Jika desc bukan array, tampilkan langsung
                    <p className="text-brown-gray">{contact.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-navy w-full h-[250px] mx-auto  grid text-center items-center place-content-center">
        <div className="flex gap-5 lg:mx-0 mx-5">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0999430995835!2d106.92495551418419!3d-6.381099564191246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6994a6f5c560ff%3A0x98afbe4373b0317a!2sPT%20Sarana%20Mulya%20Logistik!5e0!3m2!1sid!2sid!4v1637824863378!5m2!1sid!2sid"
        ></iframe>
      </div>
    </>
  );
}
