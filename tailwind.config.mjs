/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        emergency: {
          DEFAULT: '#F58220',
          dark: '#E06A10',
          light: '#FFB81C',
        },
        navy: {
          DEFAULT: '#0F2C59',
          light: '#1A365D',
        },
        ice: {
          DEFAULT: '#E0F2FE',
          accent: '#A5F3FC',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      boxShadow: {
        cta: '0 4px 14px rgba(245, 130, 32, 0.4)',
        card: '0 4px 24px rgba(15, 44, 89, 0.08)',
      },
    },
  },
  plugins: [],
};
