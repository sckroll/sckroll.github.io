export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sckroll',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['~/assets/style/main.css'],
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    routeNameSplitter: '/',
  },
  generate: {
    fallback: true,
  },
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      regular: ['faSun', 'faMoon', 'faEnvelope'],
      solid: ['faSearch', 'faChevronUp', 'faChevronDown'],
      brands: ['faGithub'],
    },
  },

  styleResources: {
    less: '~assets/scss/*.scss',
  },
}
