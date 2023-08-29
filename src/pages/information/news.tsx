import React from 'react';

export default function News() {
  return (
    <>
      <div>
        <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
          <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
            <h3 className="tracking-[6px] mb-3">BERITA TERBARU</h3>
            <h1 className="font-bold text-5xl">Berita</h1>
          </div>
        </div>
      </div>

      <div className="mx-10 mb-20">
        <h1 className="font-bold text-3xl">TAGS</h1>
      </div>
    </>
  );
}
