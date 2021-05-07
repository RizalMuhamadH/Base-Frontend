module.exports = {
  corePlugins: {
   animation: true,
  },
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      // 'plugins/**/*.ts',
      // 'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem'
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '2000': 2000,
     '3000': 3000,
     '4000': 4000,
      'auto': 'auto',
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'motion-reduce']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
