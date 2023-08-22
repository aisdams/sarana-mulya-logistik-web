import Image from 'next/image';
import React from 'react';
import LayananProduk from '../../../public/img/why/layanan-produk.png';
import PriceTag from '../../../public/img/why/price.png';
import Permission from '../../../public/img/why/permission.png';
import Tracking from '../../../public/img/why/tracking.png';
import UpdatedInformation from '../../../public/img/why/updated-information.png';
import Guaranteed from '../../../public/img/why/guaranteed.png';

const whys = [
  {
    image: LayananProduk,
    heading: 'LAYANAN DAN PRODUK LENGKAP',
    paragraf:
      'Telah bekerja sama dengan lebih dari 200 klien dan memiliki jenis layanan pengiriman yang lengkap, yaitu Express, Regular, Container, Trucking, Export & Import. Dan menyediakan layanan tambahan seperti asuransi pengiriman, Free Trade Zone (FTZ), packing, wrapping, forklift, dan crane.        ',
  },
  {
    image: PriceTag,
    heading: 'HARGA KOMPETITIF',
    paragraf:
      'Kami menawarkan harga yang sepadan dengan kualitas pelayanan yang kami berikan. Bahwa kami memiliki layanan dan produk yang lengkap, proses pengiriman yang aman mulai dari penjemputan hingga penerimaan barang, dan after sales service yang baik.',
  },
  {
    image: Permission,
    heading: 'PERIZINAN LENGKAP',
    paragraf:
      'Memiliki perizinan lengkap dalam menjangkau 514 Kabupaten/Kota untuk destinasi domestik seperti ISO 9001, ISO 45001, Asperindo, Kominfo, dan IUJPT. Kami telah bekerja sama dengan 42 agen regional di 34 Provinsi dan 8 kota besar.',
  },
  {
    image: Tracking,
    heading: '24/7 ONLINE TRACKING',
    paragraf:
      'Kami menyediakan fitur online tracking yang bisa digunakan kapan saja dan dimana saja untuk memudahkan pelanggan dalam mengetahui informasi pengiriman.',
  },
  {
    image: UpdatedInformation,
    heading: 'RESPONSIF & INFORMASI UPDATE',
    paragraf:
      'Kami selalu memberikan respon yang cepat dan informasi pengiriman yang update dan akurat kepada seluruh pelanggan kami. Sehingga pelanggan merasa puas menggunakan layanan Sarana Mulya Logistik.',
  },
  {
    image: Guaranteed,
    heading: 'JAMINAN KLAIM',
    paragraf:
      'Kami menyediakan dayanan tambahan, salah satunya adalar asuransi. Setiap pelanggan berhak menggunakan asuransi demi meningkatkan keamanan barang. Dan kami siap selalu menjamin dan bertanggung jawab terhadap barang pelanggan yang telah diasuransikan.',
  },
];

export default function Why() {
  return (
    <div className="my-24">
      <div className="text-center mb-14 block items-center">
        <h3 className="text-base-blue text-xl font-medium mb-3">Kenapa</h3>
        <h1 className="font-bold text-4xl text-secondary-text mb-20">
          Sarana Mulya Logistik
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {whys.map((Why, idx) => (
          <div className="flex gap-5" key={idx}>
            <div className="transform rotate-45 border border-base-blue rounded-md h-max p-3">
              <Image
                src={Why.image}
                alt=""
                className="h-full w-[300px] rounded-md !transform !rotate-0"
              />
            </div>

            <div className="">
              <h1 className="text-xl mb-3 font-semibold w-[80%]">
                {Why.heading}
              </h1>
              <p className="font-normal text-sm text-gray-600 text-justify w-[80%]">
                {Why.paragraf}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
