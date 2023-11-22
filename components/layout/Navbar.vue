<script setup>

const DataboardService = inject('databoardService')

const menuConfig = ref({
    level: 1,
    items: [
        {
            icon: 'ph:house-light',
            name: 'Início',
            path: '/'
        },
        {
            icon: 'ic:outline-watch-later',
            name: 'Histório',
            path: '/history'
        },
        {
            icon: 'ph:bell-simple-ringing-light',
            name: 'Serviços Online',
            path: '/services'
        },
        {
            icon: 'ph:phone-disconnect',
            name: 'Ouvidoria',
            path: '/feedback'
        },
    ]
})


async function getPublicationTypes() {
    const { data: publication_types } = await DataboardService.setRoute('publication_type').getAll(1, 10)

    menuConfig.value.items.push({
        icon: 'ph:paperclip-light',
        name: 'Publicações Oficiais',
        submenu: {
            level: 2,
            items: publication_types.map(pb_types => ({
                name: pb_types.name,
                path: `/publications/${pb_types.id}`
            }))
        }
    })
}


/* CHAMADAS DA API */
Promise.all([
    getPublicationTypes()
])

</script>

<template>
    <nav class="sticky top-0">
        <CoreMenu :config="menuConfig"/>
    </nav>
</template>