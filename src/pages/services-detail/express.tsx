import React from 'react';

const products = [
  {
    children: [
      {
        title: 'Sameday',
        desc: 'Layanan ini merupakan pengiriman yang diantar dalam hari yang sama atau kurang dari 24 jam sudah sampai ke alamat tujuan.',
      },
      {
        title: 'One Night Service (ONS)',
        desc: 'Layanan ini merupakan pengiriman besok sampai tujuan. Dengan jumlah destinasi ke 34 provinsi dan 8 kota besar. (Di Luar ke 42 destinasi yang sudah PT. Sarana Mulya Logistik tentukan, maka dapat melakukan request untuk dilakukan penanganan ONS).',
      },
      {
        title: 'Express Standard',
        desc: 'Layanan ini adalah pengiriman express yang lead timenya 2-3 hari untuk main destination setelah pick-up (leadtime sangat tergantung destinasi tujuan) sedangkan untuk destinasi remote area, layanan express standard disesuaikan dengan lead time remote area yang berlaku. Destinasi untuk layanan ini menjangkau ke seluruh kabupaten dan kota di indonesia (514 destinasi).',
      },
      {
        title: 'Port to Port',
        desc: 'Layanan ini merupakan pengiriman paket/barang dari bandara asal ke bandara tujuan. Destinasi untuk layanan ini menjangkau ke seluruh bandara di Indonesia',
      },
    ],

    childrenTwo: [
      {
        title:
          'Layanan Express baik One Night Service (ONS) maupun Express Standard include bukti serah terima barang atau POD (Proof of delivery) kembali dengan waktu standar pengembalian bukti serah terima barang atau POD (Proof of delivery) antar 7 s/d 14 hari (kecuali ada request khusus untuk percepatan).',
      },
      {
        title:
          'Dalam layanan ini PT. Sarana Mulya Logistik juga menyediakan layanan pengurusan dokumen DO/SJ (Surat Jalan) pelanggan dan FTZ (Free Trade Zone).',
      },
      {
        title:
          'Khusus Shipment DG (Dangerous Goods) maka dikenakan 300% surcharge dari biaya kirim dan untuk barang yang beratnya diatas 70 kg dikenakan surcharge 100% dari biaya kirim (sesuai dengan peraturan airline).',
      },
      {
        title:
          'PT. Sarana Mulya Logistik juga melayani pengiriman vaksin atau media lain yang suhunya 2 s/d 8 derajat.',
      },
      {
        title:
          'Untuk pengiriman melalui udara, ukuran pintu pesawat diambil secara umum adalah 300 cm x 90 cm x 85 cm (P x L x T).',
      },
    ],
  },
];

export default function Express() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">DETAIL LAYANAN</h3>
          <h1 className="font-bold text-5xl">Express</h1>
        </div>
      </div>

      <div className="mx-28 text-[#666666]">
        <h3 className="mb-5">
          <span className="font-bold">Produk</span> dari layanan Express, antara
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
              layanan Express PT. Sarana Mulya Logistik yang meliputi :
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
