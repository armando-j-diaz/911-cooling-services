/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        emergency: {
          DEFAULT: '#E31E24',
          dark: '#B91C1C',
          light: '#FF6B6B',
        },
        navy: {
          DEFAULT: '#0A0F18',
          light: '#141C2E',
        },
        ice: {
          DEFAULT: '#DBEAFE',
          accent: '#38BDF8',
        },
        silver: {
          DEFAULT: '#C8CDD3',
          light: '#E8EAED',
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
        cta: '0 4px 20px rgba(227, 30, 36, 0.45)',
        card: '0 4px 24px rgba(0, 0, 0, 0.35)',
        glow: '0 0 24px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
};
