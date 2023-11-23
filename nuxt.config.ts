// import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],

    devServer: {
        host: '192.168.1.111'
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
