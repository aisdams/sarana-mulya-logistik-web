import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#2BA7C0',
        'secondary-text': '#2b2b2b',
        'gray-text': '#acb4b8',
        'gray-header': '#374b56',
        'brown-gray': '#bc9b91',
        'blue-navy': '#162133',
        'gray-secondary': '#6f6b66',
        'dark-blue': '#051922',
        'sidebar-bg': '#0c1923',
      },
      screens: {
        sm: '576px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '992px',
        // => @media (min-width: 1024px) { ... }

        xl: '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
