import React from 'react';

export default function Track() {
  return (
    <div className="grid grid-cols-2 my-20">
      <h1 className="text-base-blue font-extrabold text-[2.7rem] leading-none">
        LACAK <br /> KIRIMAN ANDA
      </h1>

      <div>
        <div className="flex gap-5 mb-4">
          <button>Lacak Status POD</button>
          <button className="px-10 py-4 text-white bg-blue-400 rounded-md">
            Lacak Status POD
          </button>
        </div>
        <div className="flex gap-5">
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
