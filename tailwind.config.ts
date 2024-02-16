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
        'brown-gray': '#b3a5a7',
        'blue-navy': '#162133',
        'gray-secondary': '#6f6b66',
        'dark-blue': '#051922',
        'sidebar-bg': '#0c1923',
        'gray-paragraph': '#66666b',
      },
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
