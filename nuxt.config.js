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
      {
        hid: 'description',
        name: 'description',
        content: 'Welcome to Sckroll`s website',
      },
      { name: 'theme-color', content: 'white' },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://sckroll.github.io/sckroll-og.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/mask-icon.svg', color: 'white' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['~assets/scss/main.scss', '~assets/scss/content.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/about',
    '~/components/common',
    '~/components/posts',
    '~/components/projects',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-content-git', '@nuxt/content'],

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
    subFolders: false,
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

  styleResources: {
    scss: ['~assets/scss/_variables.scss', '~assets/scss/_mixin.scss'],
  },

  loading: {
    color: '#0a33b9',
    height: '4px',
  },
}
