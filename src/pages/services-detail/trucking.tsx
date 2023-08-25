import React from 'react';

const products = [
  {
    children: [
      {
        title: 'Blind Van',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi mobil blind van.',
      },
      {
        title: 'CDE',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk CDE sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 2 ton, dengan ukuran Box : 340 x 180 x 190 cm. Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
      {
        title: 'CDD',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk CDD sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 4 ton, dengan ukuran Box : 435 x 200 x 200 cm (17 cbm). Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
      {
        title: 'CDD Cold Chain',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk CDD Cold Chain sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 4 ton. Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
      {
        title: 'Fuso',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk Fuso sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 8 ton, dengan ukuran Box : 650 x 220 x 240 cm (30 cbm). Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
      {
        title: 'Fuso Cold Chain',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk Fuso Cold Chain sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 9 ton. Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
      {
        title: 'Wingbox',
        desc: 'Layanan ini adalah pengiriman menggunakan transportasi truk wingbox sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 15 ton, dengan ukuran Box : 720 x 250 x 250 cm (45 cbm). Dengan cakupan destinasi ke pulau Sumatra (selain bangka belitung, batam, dan tanjung pinang), Jawa, serta Nusa Tenggara Barat.',
      },
    ],
    childrenTwo: [
      {
        title:
          'Leadtime layanan trucking sangat bervariatif sesuai destinasi tujuan, dan PT. Sarana Mulya Logistik fokus memberikan lead time yang terbaik dengan harga yang kompetitif.',
      },
      {
        title:
          'Layanan trucking yang PT. Sarana Mulya Logistik berikan include bukti serah terima barang atau POD (Proof of delivery) kembali dengan waktu standar pengembalian POD antar 7 s/d 14 hari (kecuali ada request khusus untuk percepatan).',
      },
      {
        title:
          'Sekaligus melayani FTL (Full Trucking Load) dan FCL (Less Trucking Load).',
      },
    ],
  },
];

export default function trucking() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DETAIL LAYANAN</h3>
          <h1 className="font-bold text-5xl">Trucking</h1>
        </div>
      </div>

      <div className="mx-28 text-[#666666]">
        <h3 className="mb-5">
          <span className="font-bold">Produk</span> dari layanan Trucking,
          antara lain :
        </h3>
        {products.map((product, idx) => (
          <>
            <div className="" key={idx}>
              {product.children?.map((childPro, childIdx) => (
                <ul key={childIdx} className="!list-disc pl-8">
                  <li>{childPro.title}</li>
                  <p>{childPro.desc}</p>
                </ul>
              ))}
            </div>

            <h3 className="mt-5">
              Terdapat <span className="font-bold">beberapa hal</span> terkait
              layanan Trucking PT. Sarana Mulya Logistik yang meliputi :
            </h3>
            {product.childrenTwo?.map((childTwoPro, childTwoIdx) => (
              <ul key={childTwoIdx} className="!list-disc pl-8">
                <li>{childTwoPro.title}</li>
              </ul>
            ))}
          </>
        ))}
      </div>
    </>
  );
}
