import React from 'react';

export default function Tracking() {
  return (
    <>
      <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">
            LACAK KIRIMAN DAN DOKUMEN ANDA
          </h3>
          <h1 className="font-bold  lg:text-5xl text-4xl">Cek Resi</h1>
        </div>
      </div>

      <div className="mt-20 lg:mx-28 mx-0 bg-red-500">
        <div className="">
          <label htmlFor="Nomor Resi">
            <input type="text" placeholder="Masukan nomer resi anda" />
          </label>
          <label htmlFor="Tanggal (Opsional)">
            <input type="date" placeholder="dd/mm/yyy" />
          </label>
        </div>
      </div>
    </>
  );
}
