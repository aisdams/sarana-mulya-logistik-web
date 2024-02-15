import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function BlogDetails() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">READ THE DETAILS</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">SML!</h1>
        </div>
      </div>

      <div className="mx-auto justify-center items-center grid place-content-center w-[min(85%,1280px)] text-[#7070a1]">
        <div className="w-full h-[30rem] bg-gray-300"></div>
        <div className="flex gap-5 mt-5">
          <div className="flex items-center gap-2">
            <FaUser /> Admin
          </div>
          <div className="flex items-center gap-2">
            <MdDateRange /> September 21, 2022
          </div>
        </div>

        <h1 className="font-medium mt-5 text-3xl">
          Penting! 3 Kesalahan Kirim Barang Berukuran Besar dan <br /> Banyak
        </h1>
        <h3 className="mt-3">
          Pengiriman barang dalam ukuran besar memang perlu perhatian khusus.
          Jika terjadi kesalahan, barang tidak akan aman sampai tujuan.
          Pengiriman barang yang aman menjadi salah satu kunci kepuasan
          pelanggan. Tidak hanya itu, pengemasan yang kurang baik memungkinkan
          pelanggan mengeluh barang kiriman rusak atau tidak sesuai.
        </h3>
        <h3 className="font-medium text-xl mt-3">
          Untuk menghindari hal tersebut, Anda perlu hindari kesalahan kirim
          barang berukuran besar dan banyak sebagai berikut:
        </h3>
        <div className="flex gap-5 mt-3">
          <h1>1.</h1>
          <h1>
            Kemas barang tidak sesuai. Kesalahan kirim barang ukuran besar dan
            jumlah banyak adalah tidak menggunakan kemasan yang tepat untuk
            membungkus barang. Hal ini bisa membuat barang Anda pecah, robek,
            atau rusak selama perjalanan. Untuk itu, tentukan kesesuain antara
            ukuran kotak dan barang. Jangan sampai membungkus barang ukuran
            kecil menggunakan bungkus yang berukuran besar karena akan
            menghabiskan ruangan. Jangan pula membungkus barang besar
            menggunakan kardus terlalu kecil atau pas-pasan. Karena Anda perlu
            menggunakan pelindung agar barang Anda tidak mengalami kerusakan di
            perjalanan, misalnya bubble wrap, honeycomb, plastik kolom udara dan
            lainnya. Kesalahan pada pengukuran barang. Kirim barang dalam ukuran
            besar dan jumlah yang banyak harus jelas. Apalagi barang ukuran
            besar terdapat perhitungan volume. Anda tidak bisa asal menebak
            berat dan harganya. Hal ini perlu Anda hindari agar tidak ada
            kesalahan. Ukur terlebih dahulu sehingga Anda bisa memberikan
            estimasi harga lebih terperinci dan akurat kepada pelanggan. Jika
            kurang yakin, Anda bisa gunakan timbangan dari jasa pengiriman agar
            ukuran lebih tepat. Jasa pengiriman yang salah. Ya, bayangkan jika
            barang yang sudah Anda tunggu-tunggu ternyata sampai dalam keadaan
            rusak atau bahkan hilang? Untuk itu gunakan jasa pengiriman yang
            aman dan terpercaya untuk kirim barang berukuran besar. Tidak semua
            jasa pengiriman, bisa mengirimkan barang berukuran besar. Anda bisa
            pilih jasa pengiriman Sarana Mulya Logistik. Jasa pengiriman terbaik
            yang siap antar barang Anda ke seluruh Indonesia hingga plosok
            daerah. Sarana Mulya Logistik memiliki beberapa layanan dan produk
            yang lengkap, mulai dari express, reguler, container, trucking,
            hingga export dan import.
          </h1>
        </div>
      </div>
    </>
  );
}
