import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },


    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        ...colors,
                        leaf: {
                            DEFAULT: '#4290f5'
                        }
                    }
                }
            }
        }
    }
})
