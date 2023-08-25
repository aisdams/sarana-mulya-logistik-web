import React from 'react';

const products = [
  {
    children: [
      {
        title: 'Reguler Standard',
        desc: 'Layanan ini adalah pengiriman dengan moda darat untuk area destinasi jawa, bali, NTB dan Sumatera dan moda laut untuk area destinasi kalimantan, NTT, Batam dan semua bagian indonesia timur.',
      },
      {
        title: 'Reguler Kubikasi',
        desc: 'Layanan ini adalah pengiriman reguler dengan menghitung biaya berdasarkan volume barang berdasarkan kubikasi untuk kebutuhan ekspedisi. Perhitungan kubikasi (CBM/Cubic Meters) berdasarkan rumus: (Panjang x Lebar x Tinggi)/1000000 = kubikasi (m3) Volume untuk pengiriman via darat & laut yang menggunakan perhitungan kubikasi (m3).',
      },
    ],
    childrenTwo: [
      {
        title:
          'Leadtime layanan Reguler sangat bervariatif sesuai destinasi tujuan, dan PT. Sarana Mulya Logistik fokus memberikan lead time yang terbaik dengan harga yang kompetitif.',
      },
      {
        title:
          'Layanan Reguler yang PT. Sarana Mulya Logistik berikan include bukti serah terima barang atau POD (Proof of delivery) kembali dengan waktu standar pengembalian POD antar 10 s/d 25 hari (kecuali ada request khusus untuk percepatan).',
      },
      {
        title:
          'Dalam layanan ini PT. Sarana Mulya Logistik juga menyediakan layanan pengurusan dokumen DO/SJ (Surat Jalan) pelanggan dan FTZ (Free Trade Zone).',
      },
      {
        title: `Sekaligus melayani FTL (Full Trucking Load) baik CDE (colt diesel engkel) kapasitas 2 Ton, CDD (colt diesel double) kapasitas 4 ton, Fuso kapasitas 8 ton, tronton/wing box kapasitas 15 ton dan FCL (Full Container Load) baik container 20" kapasitas 20 ton maupun Container 40" kapasitas 35 ton`,
      },
      {
        title:
          'Untuk pengiriman melalui udara, ukuran pintu pesawat diambil secara umum adalah 300 cm x 90 cm x 85 cm (P x L x T)',
      },
    ],
  },
];

export default function Reguler() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DETAIL LAYANAN</h3>
          <h1 className="font-bold text-5xl">Reguler</h1>
        </div>
      </div>

      <div className="mx-28 text-[#666666]">
        <h3 className="mb-5">
          <span className="font-bold">Produk</span> dari layanan Reguler, antara
          lain :
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
              layanan Reguler PT. Sarana Mulya Logistik yang meliputi :
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
