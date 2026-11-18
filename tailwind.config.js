/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        /* Couleurs sémantiques pilotées par les variables CSS de src/index.css. */
        base: {
          950: 'rgb(var(--rgb-base-950) / <alpha-value>)',
          900: 'rgb(var(--rgb-base-900) / <alpha-value>)',
          850: 'rgb(var(--rgb-base-850) / <alpha-value>)',
          800: 'rgb(var(--rgb-base-800) / <alpha-value>)',
          700: 'rgb(var(--rgb-base-700) / <alpha-value>)',
        },
        accent: {
          /* Accent unique, volontairement discret : terre brûlée. */
          indigo: '#9B5A3B',
          violet: '#6F6255',
          sky: '#3F5A6B',
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
        container: '1160px',
      },
      boxShadow: {
        /* Ombres à peine perceptibles : la hiérarchie passe par l'espace et les filets. */
        glow: '0 1px 2px rgba(18, 20, 22, 0.06)',
        'glow-sky': '0 1px 2px rgba(18, 20, 22, 0.06)',
        card: '0 14px 40px -32px rgba(18, 20, 22, 0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #9B5A3B 0%, #9B5A3B 100%)',
      },
      keyframes: {
        'nav-in': {
          '0%': { opacity: '0', transform: 'translate3d(0, -8px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'icon-in': {
          '0%': { opacity: '0', transform: 'rotate(-45deg) scale(0.7)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
      },
      animation: {
        'nav-in': 'nav-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'icon-in': 'icon-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
