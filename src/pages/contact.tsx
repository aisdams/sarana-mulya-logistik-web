// import InputText from '@/components/forms/input-text';
import React from 'react';
import { LiaMapSolid, LiaClock } from 'react-icons/lia';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contacts = [
  {
    icon: <LiaMapSolid />,
    title: 'Kantor pusat',
    desc: 'Citra Grand Cibubur CBD Jl. Citra Grand II Blok AR18 - 19 Kota Bekasi, Jawa Barat 17435',
  },
  {
    icon: <LiaClock />,
    title: 'Jam Kerja',
    desc: `Senin - Jum'at: 09:00 - 17:00
    Sabtu: 09:00 - 14:00
    Minggu: Closed`,
  },
  {
    icon: <RiContactsBook2Fill />,
    title: 'Contact',
    desc: `Email: info@saranamulyalogisticscorp.com
    Phone: +62 858-1055-8522`,
  },
];

export default function Contact() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DAPATKAN DUKUNGAN 24/7</h3>
          <h1 className="font-extrabold text-5xl">Hubungi kami</h1>
        </div>
      </div>

      <div className="my-28 mx-24">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="">
            <h1 className="font-bold text-3xl text-secondary-text">
              Apakah Anda memiliki pertanyaan?
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

          <div className="block">
            {Contacts.map((contact, idx) => (
              <div className="flex mb-10 gap-5" key={idx}>
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
          <h1 className="text-white text-4xl"> Temukan Lokasi Kami</h1>
        </div>
      </div>
    </>
  );
}
