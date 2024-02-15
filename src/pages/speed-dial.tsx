import React, { useState } from 'react';
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsWhatsapp,
  BsTiktok,
} from 'react-icons/bs';

export default function SpeedDial() {
  const [hoveredLabel, setHoveredLabel] = useState<string>('');

  const socialMediaLinks = [
    {
      href: 'https://www.facebook.com',
      icon: BsFacebook,
      label: 'Facebook',
    },
    {
      href: 'https://www.youtube.com',
      icon: BsYoutube,
      label: 'Youtube',
    },
    {
      href: 'https://www.instagram.com',
      icon: BsInstagram,
      label: 'Instagram',
    },
    {
      href: 'https://api.whatsapp.com',
      icon: BsWhatsapp,
      label: 'WhatsApp',
    },
    {
      href: 'https://www.tiktok.com',
      icon: BsTiktok,
      label: 'TikTok',
    },
  ];

  return (
    <div className="flex lg:flex-col gap-5">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onMouseEnter={() => setHoveredLabel(link.label)}
          onMouseLeave={() => setHoveredLabel('')}
          className="flex items-center relative"
        >
          <link.icon className="w-9 h-9 border-2 border-white text-white rounded-full p-2 transition" />
          <span
            className={`absolute top-1/2 right-full transform -translate-x-full -translate-y-1/2 text-lg text-white px-3 py-1 rounded ${
              hoveredLabel === link.label
                ? 'opacity-100 -translate-x-0 transition-opacity duration-[1s]'
                : 'opacity-0 translate-x-0 transition-opacity duration-[.5s]'
            }`}
          >
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
