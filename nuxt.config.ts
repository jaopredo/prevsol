// import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],

    devServer: {
        host: 'localhost'
    },

    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss'
    },

    alias: {
        "@/*": "/*"
    }
})
// cssPath: '~/assets/css/tailwind.scss',
