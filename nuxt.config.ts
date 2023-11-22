// import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss'
    }
})
// cssPath: '~/assets/css/tailwind.scss',
