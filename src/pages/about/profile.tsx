import React from 'react';
import Image from 'next/image';
import ImageSide from '../../../public/img/feature-bg.png';
import ImageGrad from '../../../public/img/gradient/sdm.png';
import ImageGrad2 from '../../../public/img/gradient/culture.png';
import ImageGrad3 from '../../../public/img/gradient/location.png';
import ImageGrad4 from '../../../public/img/gradient/facilities.png';
import ImageGrad5 from '../../../public/img/gradient/itsystem.png';
import ImageGrad6 from '../../../public/img/gradient/prices.png';

const SectionsFive = [
  {
    title: 'Visi & Misi',
    titleTwo: 'Visi',
    titleThere: 'Misi',
    visiContent:
      'Visi kami adalah menjadi salah satu perusahaan jasa pengiriman domestik terbaik yang berkomitmen terhadap pengembangan sumber daya manusia, kuantitas jaringan dan sistem operasional yang andal.',
    children: [
      {
        misiOne:
          'Berkomitmen untuk memberikan pelayanan terbaik terhadap pelanggan.',
        misiTwo: 'B Meningkatkan performa perusahaan secara berkesinambungan.',
        misiThree:
          'Menjadi solusi atas kebutuhan jasa pengiriman domestik area.',
        misiFour:
          'Berperan aktif dalam meningkatkan pengetahuan dan keterampilan logistik.',
      },
    ],
  },
  {
    title: 'Nilai',
    children: [
      {
        title: 'Berkomitmen Tinggi',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.',
      },
      {
        title: 'Ramah',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.        ',
      },
      {
        title: 'Berkelas',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.',
      },
    ],
  },
  {
    title: 'Tim',
    children: [
      {
        title: 'Tim Marketing',
        desc: 'Tim penjualan kami selalu siap membantu klien menemukan layanan dan produk yang tepat untuk meningkatkan kualitas pekerjaan mereka dan meningkatkan efisiensi alur kerja.',
      },
      {
        title: 'Tim Customer Service',
        desc: 'Tim customer service kami memastikan pengiriman dilakukan secara efisien dan aman. Selain itu, kami hadir untuk membantu pelanggan dalam memahami fitur dan fungsi layanan yang dibutuhkan.',
      },
      {
        title: 'Tim Kami',
        desc: 'Tim kami akan membantu Anda untuk lebih memahami layanan, produk, dan sistem kami. Penting bagi kami bahwa klien kami dapat memastikan bahwa semua layanan yang kami tawarkan bernilai tambah untuk bisnis mereka.',
      },
    ],
  },
  {
    title: 'Kelebihan',
    children: [
      {
        title: 'SDM',
        icon: ImageGrad,
        desc: 'Memiliki sumber daya manusia tingkat manajerial dan operasional yang berpengalaman dan komitmen yang tinggi serta sangat memahami bisnis logistik dan kargo sehingga dapat memberikan solusi terbaik atas kebutuhan pelanggan.',
      },
      {
        title: 'Budaya Perusahaan',
        icon: ImageGrad2,
        desc: 'Budaya perusahaan yang kuat, terutama dalam service culture dan customer focus dengan nilai utama "Customer Come First".',
      },
      {
        title: 'Operasional Area',
        icon: ImageGrad3,
        desc: 'Memiliki 34 cabang yang berada di seluruh provinsi di Indonesia dengan coverage area 514 kabupaten/kota baik dalam layanan ekspres maupun reguler.',
      },
      {
        title: 'Fasilitas Layanan',
        icon: ImageGrad4,
        desc: 'Penyediaan fasilitas Proof of Delivery (POD), asuransi, packing dan wrapping, pengurusan dokumen Free Trade Zone (FTZ) sampai pada keperluan forklift dan crane untuk memenuhi kebutuhan pelanggan.',
      },
      {
        title: 'Sistem IT',
        icon: ImageGrad5,
        desc: 'Menggunakan sistem yang berbasis IT untuk mendukung layanan yang prima bagi pelanggan yang terus dikembangkan baik di pusat maupun di cabang.',
      },
      {
        title: 'Harga',
        icon: ImageGrad6,
        desc: 'Harga yang kompetitif dengan standar layanan dan solusi layanan terbaik bagi semua pelanggan.',
      },
    ],
  },
];

export default function Profile() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="z-10  transform translate-y-1/2 text-white">
          <h3 className="tracking-[6px] mb-3">INFORMASI SEPUTAR PERUSAHAAN</h3>
          <h1 className="font-bold text-5xl">Tentang Kami</h1>
        </div>
      </div>

      <div className="mt-20 mx-28">
        <div className="bg-base-blue w-full h-[190px] mt-24 text-white">
          <div className="flex justify-between mx-20 py-14">
            <div className="">
              <h3 className="text-sm">DAPATKAN RESPON CEPAT DARI TIM KAMI</h3>
              <h1 className="text-3xl font-semibold mt-2">
                JANGAN RAGU MENGHUBUNGI KAMI
              </h1>
            </div>

            <div className="button">
              <button className="text-base-blue bg-white px-8 py-5">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 ml-28">
        <h1 className="font-bold text-secondary-text text-4xl -mb-10">
          PT. Sarana Mulya Logistik
        </h1>
        <div className="grid grid-cols-2 gap-10 relative items-center">
          <div className=" text-justify">
            <h3>
              Didirikan pada tahun 2018, PT. SARANA MULYA LOGISTIK merupakan
              perusahaan jasa pengiriman yang menyediakan jasa express (Sameday,
              ONS, Express Standard, Port to Port), regular (Reguler standart
              dan Kubikasi), container (20ft maupun 40ft), trucking (Blind Van,
              CDE, CDD, Fuso Tronton, Cold Chain, WingBox) dan exim. Mulai dari
              niat yang sederhana, Pt. Sarana Mulya Logistik ingin berkontribusi
              pada Supply Chain di Indonesia. Dan pada saat ini PT. Sarana Mulya
              Logistik juga ingin berkontribusi pada pemerataan pelayanan
              kesehatan di Indonesia. Maka dari itu PT. Sarana Mulya Logistik
              adalah jasa pengiriman yang berfokus pada pengiriman alat
              kesehatan, farmasi, dan kosmetik.
            </h3>
            <h3 className="mt-3">
              Bagian dari kesuksesan kami berasal dari moto kami You Trust Is
              Our Mission. Moto ini telah menjadi DNA dalam kehidupan
              sehari-hari untuk memberikan pelayanan yang terbaik dan
              bertanggung jawab kepada semua pelanggan. Kepuasan pelanggan
              sangat penting bagi kami, oleh karena itu kami berkomitmen untuk
              selalu memberikan standar pelayanan terbaik dan memberikan solusi
              yang tepat untuk kebutuhan pelanggan.
            </h3>
            <h3 className="mt-3">
              Melalui operasi logistik yang efisien, kami telah melayani klien
              dari berbagai industri di seluruh wilayah utama Indonesia. Salah
              satu pertumbuhan strategis utama kami adalah membuka lebih banyak
              kantor perwakilan di bagian lain Indonesia.
            </h3>
          </div>

          <div className="">
            <Image src={ImageSide} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
