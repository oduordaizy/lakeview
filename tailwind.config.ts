import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0D2752',
          blue: '#0367B4',
        },
        secondary: {
          blue: '#2795D3',
        },
        accent: {
          red: '#D6001C',
        },
        white: '#FDFDFD',
        'pale-blue': '#EAF4FB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
