import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixin.scss";
          `
        }
      }
    },
    plugins: [svgLoader()]
  },
  components: [
    { path: '~/components/common', pathPrefix: false },
    { path: '~/components/about', pathPrefix: false },
    { path: '~/components/posts', pathPrefix: false },
    { path: '~/components/projects', pathPrefix: false },
  ]
})
