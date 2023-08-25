import React from 'react';
import ProductIm from '../../../public/img/service/container1.png';
import ProductIm2 from '../../../public/img/service/container2.png';
import Image from 'next/image';

const products = [
  {
    children: [
      {
        title: 'Container 20 ft',
        desc: 'Layanan ini adalah pengiriman menggunakan container sepanjang 20 feet atau 6 x 2,4 m x 2,6 m (P x L x T) sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 20 ton. Dengan jumlah destinasi ke 29 kota di Indonesia, mulai dari pulau sumatera, kalimantan, sulawesi, maluku, papua, plus kota kupang.',
        image: ProductIm,
      },
      {
        title: 'Container 40 ft',
        desc: 'Layanan ini adalah pengiriman menggunakan container sepanjang 40 feet atau 12 m x 2,4 m, 2,9 m (P x L x T) sekaligus mampu mengantar paket/barang dengan maksimal berat sebesar 32 ton. Dengan jumlah destinasi ke 29 kota di Indonesia, mulai dari pulau sumatera, kalimantan, sulawesi, maluku, papua, plus kota kupang.',
        image: ProductIm2,
      },
    ],
    childrenTwo: [
      {
        title:
          'Leadtime layanan container sangat bervariatif sesuai destinasi tujuan, dan PT. Sarana Mulya Logistik fokus memberikan lead time yang terbaik dengan harga yang kompetitif.',
      },
      {
        title:
          'Layanan container yang PT. Sarana Mulya Logistik berikan include bukti serah terima barang atau POD (Proof of delivery) kembali dengan waktu standar pengembalian POD antar 7 s/d 14 hari (kecuali ada request khusus untuk percepatan).',
      },
      {
        title:
          'Dalam layanan ini PT. Sarana Mulya Logistik juga menyediakan layanan pengurusan dokumen DO/SJ (Surat Jalan) pelanggan dan FTZ (Free Trade Zone).',
      },
      {
        title:
          'Sekaligus melayani FTL (Full Container Load) dan FCL (Less Container Load).',
      },
    ],
  },
];

export default function Container() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DETAIL LAYANAN</h3>
          <h1 className="font-bold text-5xl">Container</h1>
        </div>
      </div>

      <div className="mx-28 text-[#666666]">
        <h3 className="mb-5">
          <span className="font-bold">Produk</span> dari layanan Container,
          antara lain :
        </h3>
        {products.map((product, idx) => (
          <>
            <div className="" key={idx}>
              {product.children?.map((childPro, childIdx) => (
                <ul key={childIdx} className="!list-disc pl-8">
                  <li>{childPro.title}</li>
                  <p>{childPro.desc}</p>
                  <Image src={childPro.image} alt="" />
                </ul>
              ))}
            </div>

            <h3 className="mt-5">
              Terdapat <span className="font-bold">beberapa hal</span> terkait
              layanan Container PT. Sarana Mulya Logistik yang meliputi :
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
