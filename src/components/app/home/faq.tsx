'use client';
import React, { useState } from 'react';
import Faqcom from '../faq/faqcom';

export default function FAQ() {
  return (
    <div className="mt-20 mb-32 mx-auto text-center">
      <h1 className="font-extrabold text-secondary-text text-5xl tracking-widest mb-5">
        FAQ
      </h1>
      <h3 className="text-secondary-text text-lg">
        Pertanyaan yang sering diajukan
      </h3>

      <div className="mt-10">
        <Faqcom />
      </div>
    </div>
  );
}
