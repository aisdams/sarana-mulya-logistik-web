import React, { useState } from 'react';
import FAQ from '@/components/app/home/faq';
import dangerousIm from '../../../public/img/terms/dangerous/001-explosion.png';
import dangerousIm2 from '../../../public/img/terms/dangerous/001-gas-tank.png';
import dangerousIm3 from '../../../public/img/terms/dangerous/002-toxic-1.png';
import dangerousIm4 from '../../../public/img/terms/dangerous/003-gas-cylinder.png';
import dangerousIm5 from '../../../public/img/terms/dangerous/003-flask.png';
import dangerousIm6 from '../../../public/img/terms/dangerous/001-toxic.png';
import dangerousIm7 from '../../../public/img/terms/dangerous/003-radiation.png';
import dangerousIm8 from '../../../public/img/terms/dangerous/001-corrosive.png';
import dangerousIm9 from '../../../public/img/terms/dangerous/002-warning.png';
import banImage from '../../../public/img/terms/ban/003-lungs.png';
import banImage2 from '../../../public/img/terms/ban/supplies.png';
import banImage3 from '../../../public/img/terms/ban/animal.png';
import banImage4 from '../../../public/img/terms/ban/002-drugs.png';
import banImage5 from '../../../public/img/terms/ban/age-limit.png';
import banImage6 from '../../../public/img/terms/ban/skull-and-bones.png';
import Image, { StaticImageData } from 'next/image';

interface ChildWithPages {
  title: string;
  pages: React.ReactNode; // Ganti dengan jenis yang sesuai
}

interface ChildWithChildren {
  title: string;
  children: {
    image: StaticImageData;
    title: string;
    desc: string;
  }[];
}

interface ChildWithSubchil {
  title: string;
  subchil: {
    image: StaticImageData;
    title: string;
    desc: string;
  }[];
}

interface Child {
  title: string;
  [key: string]: any; // Properti dinamis, bisa berupa children, subchil, atau pages
}

const sideBars: Child[] = [
  {
    title: 'FAQ',
    children: [
      {
        title: 'FAQ',
        pages: <FAQ />,
      },
    ],
  },
  {
    title: 'Informasi Pengiriman',
    children: [
      {
        title: 'Barang Berbahaya',
        children: [
          {
            image: dangerousIm,
            title: 'Barang berbahaya kelas 1 : Barang yang mudah meledak',
            desc: 'Kembang Api, Amunisi/Kartrid, Inflator Airbag, Komposisi TNT, Suar, Bom.',
          },
          {
            image: dangerousIm2,
            title:
              'Barang berbahaya kelas 2 : Gas bertekanan, mudah terbakar jika ditekan/mudah menguap',
            desc: 'Aerosol, Tabung Gas (berisi), Silikon, Fire Stop, Kutek, Gas CO2, Butane, Hydrogen.',
          },
          {
            image: dangerousIm3,
            title: 'Barang berbahaya kelas 3 : Cairan yang mudah terbakar',
            desc: 'Lem, Parfum, Cat kaleng, Oli, Sanpoly, Toner, Pelampung bensin.',
          },
          {
            image: dangerousIm4,
            title: 'Barang berbahaya kelas 4 : Zat padat yang mudah terbakar',
            desc: 'Alkali metal, Alumunium fosfit, Karbon, Kamper, Kain berminyak, Sulfur, Korek Api.',
          },
          {
            image: dangerousIm5,
            title:
              'Barang berbahaya kelas 5 : Barang yang mudah menghasilkan O2',
            desc: 'Peroksida organik, Zat oksidator',
          },
          {
            image: dangerousIm6,
            title: 'Barang berbahaya kelas 6 : Gas beracun, Zat menular',
            desc: 'Obat Tanaman, Serbuk Toner, Insektisida',
          },
          {
            image: dangerousIm7,
            title: 'Barang berbahaya kelas 7 : Bahan radioaktif',
            desc: 'Material Radioaktif',
          },
          {
            image: dangerousIm8,
            title: 'Barang berbahaya kelas 8 : Korosif',
            desc: 'Cairan Korosif, Cairan pembersih kerak',
          },
          {
            image: dangerousIm8,
            title:
              'Barang berbahaya kelas 9 : Zat dan benda barang berbahaya lain',
            desc: 'Baterai, Tangki kosong,Baterai Emergency,Baterai Laptop,Power Bank, Aki Kering,Laptop,Cairan racun serangga,Zippo,Timbangan digital,Mic,Dinamo,Cylinder head,Magnet,Baterai Lithium',
          },
        ],
      },
      {
        title: 'Larangan',
        children: [
          {
            image: banImage,
            title: 'Organ Manusia',
          },
          {
            image: banImage2,
            title: 'Bahan Makanan Kering',
          },
          {
            image: banImage,
            title: 'Hewan Hidup',
          },
          {
            image: banImage,
            title:
              'Barang - barang yang termasuk kategori narkotika dan obat-obatan terlarang seperti ganja, morfin, opium, sabu-sabu, putau, ekstasi, dan sejenisnya',
          },
          {
            image: banImage,
            title:
              'Barang - barang dengan unsur pornografi baik berupa cetakan, foto, rekaman, film, dan sejenisnya termasuk publikasi lainnya yang dilarang oleh Pemerintah',
          },
          {
            image: banImage,
            title:
              'Barang-barang lainnya yang dapat membahayakan keamanan dan keselamatan selama pengangkutan',
          },
        ],
      },
    ],
  },
];

export default function Terms() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">INFORMASI</h3>
          <h1 className="font-extrabold text-5xl">Syarat</h1>
        </div>
      </div>

      <div className="mx-28 mt-20">
        {sideBars.map((sidebar, idx) => (
          <div className="flex" key={idx}>
            <div className="sideLeft w-1/3 bg-red-500 p-4">
              <h1 className="font-bold">{sidebar.title}</h1>
              <div className="ml-4">
                {sidebar.children.map((category: any, categoryIdx: number) => (
                  <div
                    key={categoryIdx}
                    onClick={() => handleCategoryClick(category.title)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h2>{category.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="sideRight w-2/3 bg-blue-500 p-4">
              {sidebar.children.map((category: any) => {
                if (category.title === activeCategory) {
                  return (
                    <div key={category.title}>
                      <h2>{category.title}</h2>
                      {category.pages
                        ? category.pages
                        : category.children.map(
                            (child: any, childIdx: number) => (
                              <div key={childIdx}>
                                {child.image && (
                                  <Image
                                    src={child.image}
                                    alt={child.title}
                                    width={200}
                                    height={200}
                                  />
                                )}
                                <h4>{child.title}</h4>
                                <p>{child.desc}</p>
                              </div>
                            )
                          )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
