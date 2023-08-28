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
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DAPATKAN DUKUNGAN 24/7</h3>
          <h1 className="font-bold lg:text-5xl text-4xl">Hubungi kami</h1>
        </div>
      </div>

      <div className="my-28 lg:mx-24 mx-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
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

          <div className="block mt-5 lg:mt-0">
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

      <div style={{ width: '100%' }}>
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pt%20Sarana%20Mulya%20Logistik%20Citra%20Grand%20Cibubur%20CBD%20Jl%20Citra%20Grand%20Cibubur%20II%20Blok%20AR%2018%20&amp;%2019,%20Kota%20Bks,%20Jawa%20Barat%2017435+(Sarana%20Mulya%20Logistik)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
