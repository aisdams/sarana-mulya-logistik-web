import React, { useState } from 'react';

export default function Track() {
  const [activeButton, setActiveButton] = useState<
    'lacakStatusPod' | 'lacakStatusResi'
  >('lacakStatusPod');

  const handleButtonClick = (
    buttonId: 'lacakStatusPod' | 'lacakStatusResi'
  ) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="grid lg:grid-cols-2 my-20">
      <h1 className="text-base-blue font-bold text-[2.7rem] leading-none mb-5 lg:mb-0">
        LACAK <br /> KIRIMAN ANDA
      </h1>

      <div>
        <div className="flex gap-5 mb-4">
          <button
            className={`px-10 py-4 ${
              activeButton === 'lacakStatusPod' ? 'text-white bg-blue-400' : ''
            }`}
            onClick={() => handleButtonClick('lacakStatusPod')}
          >
            Lacak Status POD
          </button>
          <button
            className={`px-10 py-4 ${
              activeButton === 'lacakStatusResi' ? 'text-white bg-blue-400' : ''
            }`}
            onClick={() => handleButtonClick('lacakStatusResi')}
          >
            Lacak Status Resi
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
  );
}
