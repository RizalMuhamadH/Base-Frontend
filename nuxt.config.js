export default {
  loading: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: true,
    viewer: true
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // STORAGE_URL: 'https://www.ayosurabaya.com/images-surabaya/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ayo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: ''},
      { name: 'author', content: 'Ayo Media Network'},
      { name: 'copyright', content: 'Ayo Media Network'},
      { name: 'robots', content: 'index, follow, noodp, noydir'},
      { hid: 'og:title', name: 'og:title', content: ''},
      { hid: 'og:url', name: 'og:url', content: ''},
      { hid: 'og:image', name: 'og:image', content: ''},
      { hid: 'og:site_name', name: 'og:site_name', content: ''},
      { hid: 'og:description', name: 'og:description', content: ''},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel : 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      { rel: 'canonical', href: ''},
      { rel: 'apple-touch-icon',  href: ''},
      { rel: 'shortcut icon', href: ''}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scroll',
    '~/plugins/flicking',
    // '~/plugins/vue-marquee-text-component'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    '@nuxtjs/amp'
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://127.0.0.1:8000'
    }
  },
  privateRuntimeConfig: {
    apiUrl: process.env.API_URL
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://127.0.0.1:8000'
  },

  moment: {
    locales: ['id'],
    defaultTimezone: 'Asia/Jakarta',
    plugin: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ['@headlessui/vue'],
  }
}
