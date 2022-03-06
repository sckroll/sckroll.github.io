export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ko',
    },
    titleTemplate: '%s - Sckroll',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: 'white' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/mask-icon.svg', color: 'white' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['~/assets/style/main.css'],
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/about',
    '~/components/common',
    '~/components/posts',
    '~/components/projects',
    '~/components/til',
    '~/components/future/common',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
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
    fullTextSearchFields: ['title', 'tags', 'text'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    routeNameSplitter: '/',
    middleware: 'routeCheck',
  },

  generate: {
    fallback: true,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('posts', { deep: true })
        .only(['slug', 'createdAt'])
        .fetch()
      return files.map(file => {
        return {
          route: '/posts/' + file.slug,
        }
      })
    },
  },

  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      regular: ['faSun', 'faMoon', 'faEnvelope'],
      solid: [
        'faSearch',
        'faChevronUp',
        'faChevronDown',
        'faBars',
        'faEllipsisV',
        'faAngleLeft',
        'faAngleRight',
        'faAngleDoubleLeft',
        'faAngleDoubleRight',
        'faUndoAlt',
      ],
      brands: ['faGithub'],
    },
  },

  styleResources: {
    scss: '~assets/scss/*.scss',
  },

  googleFonts: {
    families: {
      'Noto+Sans+KR': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
  },
}
