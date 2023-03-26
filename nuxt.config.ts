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
    }
  },
  components: [
    { path: '~/components/common' },
    { path: '~/components/about' },
    { path: '~/components/posts' },
    { path: '~/components/projects' },
  ]
})
