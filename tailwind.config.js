/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        /*
         * Couleurs pilotées par variables CSS (définies dans src/index.css).
         * Les valeurs sont redéfinies sur `html.light` pour basculer le thème.
         */
        base: {
          950: 'rgb(var(--rgb-base-950) / <alpha-value>)',
          900: 'rgb(var(--rgb-base-900) / <alpha-value>)',
          850: 'rgb(var(--rgb-base-850) / <alpha-value>)',
          800: 'rgb(var(--rgb-base-800) / <alpha-value>)',
          700: 'rgb(var(--rgb-base-700) / <alpha-value>)',
        },
        accent: {
          indigo: '#6366F1',
          violet: '#4F46E5',
          sky: '#0EA5E9',
        },
        cream: 'rgb(var(--rgb-cream) / <alpha-value>)',
        white: 'rgb(var(--rgb-white) / <alpha-value>)',
        slate: {
          200: 'rgb(var(--rgb-slate-200) / <alpha-value>)',
          300: 'rgb(var(--rgb-slate-300) / <alpha-value>)',
          400: 'rgb(var(--rgb-slate-400) / <alpha-value>)',
          500: 'rgb(var(--rgb-slate-500) / <alpha-value>)',
          600: 'rgb(var(--rgb-slate-600) / <alpha-value>)',
        },
        indigo: {
          200: 'rgb(var(--rgb-indigo-200) / <alpha-value>)',
          300: 'rgb(var(--rgb-indigo-300) / <alpha-value>)',
        },
        sky: {
          200: 'rgb(var(--rgb-sky-200) / <alpha-value>)',
          300: 'rgb(var(--rgb-sky-300) / <alpha-value>)',
        },
        emerald: {
          200: 'rgb(var(--rgb-emerald-200) / <alpha-value>)',
          300: 'rgb(var(--rgb-emerald-300) / <alpha-value>)',
        },
        amber: {
          200: 'rgb(var(--rgb-amber-200) / <alpha-value>)',
          300: 'rgb(var(--rgb-amber-300) / <alpha-value>)',
        },
        blue: {
          300: 'rgb(var(--rgb-blue-300) / <alpha-value>)',
        },
        fuchsia: {
          300: 'rgb(var(--rgb-fuchsia-300) / <alpha-value>)',
        },
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99, 102, 241, 0.5)',
        'glow-sky': '0 0 40px -10px rgba(14, 165, 233, 0.5)',
        card: '0 20px 40px -20px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgb(var(--rgb-white) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--rgb-white) / 0.04) 1px, transparent 1px)',
        'brand-gradient':
          'linear-gradient(120deg, #6366F1 0%, #4F46E5 40%, #0EA5E9 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 2.5s infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
};
