import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Blog() {
  const { t } = useTranslation('home/slider');
  return (
    <div className="my-20">
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
  );
}
