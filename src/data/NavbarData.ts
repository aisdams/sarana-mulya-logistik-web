import { BsCaretDownFill } from 'react-icons/bs';

const NavbarData = [
  {
    title: 'BERANDA',
    type: 'info',
    link: '/',
  },
  {
    title: 'TENTANG',
    icons: BsCaretDownFill,
    type: 'info',
    children: [
      {
        title: 'PROFILE ',
        type: 'info',
        link: '/about/profile',
      },
      {
        title: 'PELANGGAN ',
        type: 'info',
        link: '/about/client',
      },
      {
        title: 'CABANG',
        type: 'info',
        link: '/about/branch',
      },
    ],
  },
  {
    title: 'LAYANAN',
    type: 'info',
    link: '/services',
  },
  {
    title: 'CEK RESI',
    type: 'info',
    link: '/tracking',
  },
  {
    title: 'INFORMASI',
    icons: BsCaretDownFill,
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
        link: '/information/terms',
      },
    ],
  },
  {
    title: 'KONTAK',
    type: 'info',
    link: '/contact',
  },
];

export default NavbarData;
