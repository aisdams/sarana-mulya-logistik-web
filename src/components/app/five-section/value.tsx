import React from 'react';

const values = [
  {
    title: 'Nilai',
    children: [
      {
        title: 'Berkomitmen Tinggi',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.',
      },
      {
        title: 'Ramah',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.',
      },
      {
        title: 'Berkelas',
        desc: 'Seluruh insan SML memberikan komitmen yang tinggi terhadap seluruh aktivitas untuk mencapai hasil yang optimal dan memberikan solusi yang terbaik di setiap tanggung jawab yang diberikan.',
      },
    ],
  },
];

export default function Value() {
  let number = 1;
  return (
    <div>
      {values.map((value, idx) => (
        <div className="flex gap-5 text-center mx-44" key={idx}>
          {value.children.map((child, childIdx) => (
            <div
              key={childIdx}
              className="hover:bg-[#2ba7c0] hover:rounded-lg pt-10 py-14 h-[32rem] hover:text-white"
            >
              <div className="bg-blue-50/60 rounded-full w-32 h-32 mx-auto grid text-center items-center">
                <div className="bg-blue-400/25 rounded-full w-16 h-16 mx-auto grid text-center items-center">
                  <div className="text-5xl font-light">{number++}</div>
                </div>
              </div>
              <h2 className="font-semibold text-2xl my-8">{child.title}</h2>
              <p className="px-5">{child.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
