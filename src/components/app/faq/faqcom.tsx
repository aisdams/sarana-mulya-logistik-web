import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqData: FaqItem[] = [
  {
    question:
      'Apakah PT. Sarana Mulya Logistik memiliki perizinan yang lengkap ?',
    answer:
      'PT. Sarana Mulya Logistik sudah memiliki perizinan domestik yang lengkap seperti ISO 9001, ISO 45001, asperindo, kominfo, dan SIUJPT.',
  },
  {
    question: 'Berapa prosentase cover Asuransi PT. Sarana Mulya Logistik ?',
    answer:
      'PT. Sarana Mulya Logistik mengganti sesuai kerusakan/kehilangan hingga 99,001%.',
  },
  {
    question:
      'Apakah PT. Sarana Mulya Logistik memiliki pick up time dan delivery ?',
    answer:
      'PT. Sarana Mulya Logistik menyediakan pick up time and delivery pada office hour tepatnya pada jam 9:00 s/d 17:00 WIB atau dapat melakukan koordinasi dengan pihak internal (customize).',
  },
  {
    question: 'Berapa lama  Lead time POD Balik ?',
    answer:
      'Untuk coverage Kota +/-: 4 - 7 hari Untuk kota kabupaten +/-: 14 - 20 hari',
  },
];

export default function Faqcom() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="">
      {FaqData.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 my-3 cursor-pointer transition${
            activeIndex === index ? '' : 'bg-white text-secondary-text'
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div
            className={`flex justify-between items-center text-left lg:text-center ${
              activeIndex === index ? '' : ''
            }`}
          >
            <h4 className="text-xs lg:text-base font-semibold">
              {faq.question}
            </h4>
            <div className="text-gray-500">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-sm text-gray-700 text-left">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}