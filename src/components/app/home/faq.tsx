'use client';
import React, { useEffect, useState } from 'react';
import Faqcom from '../faq/faqcom';
import { useTranslation } from 'next-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FAQ() {
  const { t } = useTranslation('home/faq');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="mt-20 mb-32 text-center lg:mx-28 mx-auto"
      data-aos="fade-up"
      data-aos-delay="1200"
    >
      <h1 className="font-extrabold text-secondary-text text-5xl tracking-widest mb-5">
        FAQ
      </h1>
      <h3 className="text-secondary-text text-lg">{t('heading.title')}</h3>

      <div className="mt-10">
        <Faqcom />
      </div>
    </div>
  );
}
