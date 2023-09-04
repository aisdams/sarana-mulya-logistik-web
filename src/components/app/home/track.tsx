import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export default function Track() {
  const [activeButton, setActiveButton] = useState<
    'lacakStatusPod' | 'lacakStatusResi'
  >('lacakStatusPod');

  const handleButtonClick = (
    buttonId: 'lacakStatusPod' | 'lacakStatusResi'
  ) => {
    setActiveButton(buttonId);
  };

  const { t } = useTranslation('home/track');

  return (
    <motion.div>
      <div className="grid lg:grid-cols-2 my-20 mx-5">
        <h1 className="text-base-blue font-bold lg:text-[2.7rem] leading-none mb-5 lg:mb-0 text-3xl">
          {t('heading.title')} <br /> {t('heading.titleTwo')}
        </h1>

        <div>
          <div className="flex gap-5 mb-4">
            <button
              className={`lg:px-10 px-5 lg:py-4 ${
                activeButton === 'lacakStatusResi'
                  ? 'text-white bg-blue-400'
                  : ''
              }`}
              onClick={() => handleButtonClick('lacakStatusResi')}
            >
              {t('button.title')}
            </button>
            <button
              className={`lg:px-10 px-5 lg:py-4 ${
                activeButton === 'lacakStatusPod'
                  ? 'text-white bg-blue-400'
                  : ''
              }`}
              onClick={() => handleButtonClick('lacakStatusPod')}
            >
              {t('button.titleTwo')}
            </button>
          </div>
          <div className="lg:flex lg:gap-5 grid">
            <input
              type="text"
              name=""
              id=""
              placeholder="Masukkan nomor resi anda..."
              className="border border-base-blue pl-3 py-1 rounded-sm w-full"
            />
            <button className="bg-base-blue py-1 px-7 text-white rounded-md">
              Cari
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
