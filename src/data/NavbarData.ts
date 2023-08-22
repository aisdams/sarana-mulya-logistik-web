const NavbarData = [
  {
    title: 'BERANDA',
    type: 'info',
    link: '/',
  },
  {
    title: 'TENTANG',
    type: 'info',
    children: [
      {
        title: 'PROFILE ',
        type: 'info',
        link: '/profile',
      },
      {
        title: 'PELANGGAN ',
        type: 'info',
        link: '/pelanggan',
      },
      {
        title: 'CABANG',
        type: 'info',
        link: '/cabang',
      },
    ],
  },
  {
    title: 'LAYANAN',
    type: 'info',
    link: '/layanan',
  },
  {
    title: 'CEK RESI',
    type: 'info',
    link: '/cek-resi',
  },
  {
    title: 'INFORMASI',
    type: 'info',
    children: [
      {
        title: 'BLOG ',
        type: 'info',
        link: '/blog',
      },
      {
        title: 'BERITA ',
        type: 'info',
        link: '/berita',
      },
      {
        title: 'SYARAT',
        type: 'info',
        link: '/syarat',
      },
    ],
  },
  {
    title: 'KONTAK',
    type: 'info',
    link: '/kontak',
  },
];

export default NavbarData;
