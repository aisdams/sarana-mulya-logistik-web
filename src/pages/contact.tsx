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

      <div className="map-container p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253775.74597162736!2d106.66186302420834!3d-6.362195744007535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993c4616e38b7%3A0x5b1a1e66a36546af!2sSarana%20Mulya%20Logistik%20(Head%20Office)!5e0!3m2!1sid!2sid!4v1692843986208!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          width="100%"
          height="400"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
