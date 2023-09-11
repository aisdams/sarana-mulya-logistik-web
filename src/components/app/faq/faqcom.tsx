import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faqcom() {
  const { t } = useTranslation('home/faq');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const FaqData: FaqItem[] = [
    {
      question: t('faq.question'),
      answer: t('faq.answer'),
    },
    {
      question: t('faq.questionTwo'),
      answer: t('faq.answerTwo'),
    },
    {
      question: t('faq.questionThree'),
      answer: t('faq.answerThree'),
    },
    {
      question: t('faq.questionFour'),
      answer: t('faq.answerFour'),
    },
  ];

  return (
    <div className="">
      {FaqData.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 my-3 cursor-pointer ${
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
