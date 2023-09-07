import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, useAnimation } from 'framer-motion';

export default function Blog() {
  const { t } = useTranslation('home/slider');
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
      const offset = 3000;

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
      controls.start({ opacity: 1, y: 0, transition: { duration: 3 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 3 } });
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
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="my-20 lg:mx-28 mx-5">
        <div className="grid lg:grid-cols-2">
          <div>
            <h1 className="text-secondary-text text-3xl font-bold">
              <span className="text-base-blue">Blog</span> Terbaru
            </h1>
            <hr className="w-[3rem] bg-base-blue h-1 my-3" />
          </div>

          <div>
            <h1 className="text-secondary-text text-3xl font-bold">
              <span className="text-base-blue">Berita</span> Terbaru
            </h1>
            <hr className="w-[3rem] bg-base-blue h-1 my-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
