// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxtjs/sanity'],
    sanity: {
        projectId: process.env.NUXT_SANITY_PROJECT_ID,
        dataset: process.env.NUXT_SANITY_DATASET,
        useCdn: true,
        globalHelper: true,
        apiVersion: '2021-03-25',
        additionalClients: {
            another: {},
        },
        visualEditing: {
            token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
            studioUrl: 'http://localhost:3333',
        },
    },
    vite: {
        optimizeDeps: {
            include: [
                '@sanity/visual-editing',
                'react',
                'react/jsx-runtime',
                'react-dom',
                'react-dom/client'
            ],
        },
    },
})