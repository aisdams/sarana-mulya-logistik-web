'use client';
import React, { useState } from 'react';
import Faqcom from '../faq/faqcom';
import { useTranslation } from 'next-i18next';

export default function FAQ() {
  const { t } = useTranslation('home/faq');
  return (
    <div className="mt-20 mb-32 mx-auto text-center">
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
