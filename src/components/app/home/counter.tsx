import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaHeadphones, FaGlobe, FaUsers, FaTruck } from 'react-icons/fa';
import { PiGarage } from 'react-icons/pi';
import { animations, motion, useAnimation } from 'framer-motion';

export default function Counter() {
  const { t } = useTranslation('home/counter');
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const Counters = [
    {
      icon: <FaGlobe />,
      title: '514 +',
      paragraf: t('card.title'),
    },
    {
      icon: <PiGarage />,
      title: '36',
      paragraf: t('card.title2'),
    },
    {
      icon: <FaUsers />,
      title: '600 +',
      paragraf: t('card.title3'),
    },
    {
      icon: <FaTruck />,
      title: '20000 +',
      paragraf: t('card.title4'),
    },
  ];

  const [countedTitles, setCountedTitles] = useState(
    Counters.map((counter) => 0)
  );

  useEffect(() => {
    const delay = 50;
    const step = 1;

    const interval = setInterval(() => {
      let updatedCountedTitles = [...countedTitles];
      let allTitlesCounted = true;

      Counters.forEach((counter, idx) => {
        const targetCount = parseInt(counter.title, 10);
        if (countedTitles[idx] < targetCount) {
          updatedCountedTitles[idx] = Math.min(
            countedTitles[idx] + step,
            targetCount
          );
          allTitlesCounted = false;
        }
      });

      if (allTitlesCounted) {
        clearInterval(interval);
      }

      setCountedTitles(updatedCountedTitles);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [countedTitles]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 3300;

      if (!isLoading) {
        if (window.scrollY > offset) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 1 } });
    }
  }, [controls, isVisible]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="my-20">
        <h5 className="text-base-blue">{t('text.header')}</h5>
        <div className="grid lg:grid-cols-2">
          <div>
            <h1 className="font-bold lg:text-3xl text-2xl my-5 text-secondary-text">
              {t('text.title')}
            </h1>
            <p className="text-secondary-text text-sm">{t('text.title2')}</p>

            <div className="flex gap-5 items-center">
              <div className="bg-white p-3 shadow-[2px_10px_10px_0px_rgba(0,0,0,0.2)]">
                <FaHeadphones className="text-3xl text-base-blue" />
              </div>
              <div className="mt-10">
                <h3 className="font-bold text-sm mb-5">
                  {t('text.titlePhone')}
                </h3>
                <div className="text-base-blue text-[14px]">
                  <h3>Phone : 021 - 2281 - 5019</h3>
                  <h3>WhatsApp : 0858 - 1055 - 8522</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 px-10 lg:mt-0 mt-10 md:gap-10">
            {Counters.map((counter, idx) => (
              <div className="text-base-blue" key={idx}>
                <div className="text-3xl"> {counter.icon}</div>
                <h1 className="font-bold text-[2rem] md:mt-3">
                  {countedTitles[idx]}
                </h1>
                <p>{counter.paragraf}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
