/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Outfit', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', '"Libre Baskerville"', 'Georgia', 'serif'],
        fraunces: ['"Fraunces"', 'serif'],
        fredoka: ['"Fredoka"', 'Outfit', 'sans-serif'],
        heading: ['"Fraunces"', 'Outfit', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Kalam"', 'cursive', 'sans-serif'],
      },
      colors: {
        circle: {
          bg: '#FDFBF7',
          linen: '#FAF7F2',
          cream: '#F7F3EB',
          paper: '#FBF9F5',
          cork: '#F3EDE2',
          peach: '#FEE2D5',
          rose: '#FCE7F3',
          sage: '#E6F4EA',
          butter: '#FEF9C3',
          sky: '#E0F2FE',
          lavender: '#F3E8FF',
        },
        organic: {
          plum: '#5A2D4C',
          'plum-dark': '#46213B',
          'plum-light': '#7A3E67',
          indigo: '#2A2846',
          'indigo-dark': '#1E1B2E',
          'indigo-deep': '#161324',
          sand: '#E9BFA4',
          'sand-light': '#F5D9C8',
          'sand-dark': '#D69F80',
          cream: '#FAF5EE',
          ivory: '#FFFDF9',
          mint: '#D4EBE7',
          'mint-light': '#EBF7F5',
          rose: '#FCE3EE',
          'rose-light': '#FDF2F7',
          butter: '#FFF5C6',
          'butter-light': '#FFFBEB',
          sky: '#E0F0FE',
        },
        aura: {
          bg: '#FFFDFD',
          ink: '#0F172A',
          subtle: '#475569',
          border: 'rgba(255, 255, 255, 0.65)',
          'pink-glow': '#F43F5E',
          'coral-glow': '#FB7185',
          'peach-glow': '#FDA4AF',
        },
        // Deep obsidian purple backgrounds
        obsidian: {
          950: '#07030F', // deep black-violet
          900: '#0D061A', // velvet obsidian
          850: '#140926', // rich deep plum
          800: '#1C0D35', // dark amethyst container
          750: '#241244',
          700: '#2E1754',
          600: '#43217A',
        },
        // Royal Amethyst & Luminous Violet (Main Gradient System)
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#2E1065',
        },
        violet: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        // Deep clinical slate & calm backgrounds
        slate: {
          850: '#130924', // shifted into deep violet slate
          900: '#0D061A',
          950: '#07030F',
        },
        // Restrained clinical accents (muted, dignified, non-neon)
        teal: {
          400: '#5EEAD4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        amber: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        rose: {
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 3, 15, 0.45)',
        'glass-hover': '0 16px 44px -4px rgba(126, 34, 206, 0.25)',
        'glow-purple': '0 0 35px rgba(168, 85, 247, 0.35)',
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.35)',
        'glow-subtle': '0 0 20px rgba(192, 132, 252, 0.2)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      minHeight: {
        'touch': '64px',
        'touch-lg': '76px',
      },
      minWidth: {
        'touch': '64px',
      },
    },
  },
  plugins: [],
}
