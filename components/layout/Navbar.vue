<script setup>

const DataboardService = inject('databoardService')

const { menuConfig } = defineProps([
    'menuConfig',
    'headerOptions'
])


async function getPublicationTypes() {
    const { data: publication_types } = await DataboardService.setRoute('publication_type').getAll(1, 10)

    menuConfig.items.push({
        icon: 'ph:paperclip-duotone',
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
    <nav class="sticky top-0 page-menu">
        <CoreMenu :config="menuConfig"/>
    </nav>
</template>


<style lang="scss">
@use "@/assets/scss/queries.scss";

.page-menu {
    @apply bg-emerald-500 h-12 flex items-center justify-center w-full;
}
</style>