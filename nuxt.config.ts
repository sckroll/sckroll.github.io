// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixin.scss" as *;
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
