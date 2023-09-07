'use client';
import React, { useEffect, useState } from 'react';
import Faqcom from '../faq/faqcom';
import { useTranslation } from 'next-i18next';
import { motion, useAnimation } from 'framer-motion';

export default function FAQ() {
  const { t } = useTranslation('home/faq');
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 4000;

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
      controls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 2 } });
    }
  }, [controls, isVisible]);

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="mt-20 mb-32 text-center lg:mx-28 mx-auto">
        <h1 className="font-extrabold text-secondary-text text-5xl tracking-widest mb-5">
          FAQ
        </h1>
        <h3 className="text-secondary-text text-lg">{t('heading.title')}</h3>

        <div className="mt-10">
          <Faqcom />
        </div>
      </div>
    </motion.div>
  );
}
