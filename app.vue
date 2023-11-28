<script setup>
import applicationCoreInit from "~/api/bootstrap"
// Inicializando fornecimento da API
const DataboardService = applicationCoreInit()
provide('DataboardService', DataboardService)

// Pegando as constantes
import { headerOptions } from "~/config/header"
const constants = ref({
    headerOptions,
})

// Fazendo chamadas da API  e fornecendo aos componentes
import { makeApiCall } from '~/utils/api'

const pub_types = ref([])
const calendars = ref([])
const slides = ref([])
const servers = ref([])
const histories = ref([])

provide('slide', slides)
provide('calendar', calendars)
provide('publication_type', pub_types)
provide('server', servers)
provide('history', histories)

await Promise.all([
    makeApiCall('slide', DataboardService, data => { slides.value = data }),
    makeApiCall('calendar', DataboardService, data => { calendars.value = data }),
    makeApiCall('publication_type', DataboardService, data => { pub_types.value = data }),
    makeApiCall('server', DataboardService, data => { servers.value = data }),
    makeApiCall('history', DataboardService, data => { histories.value = data }),
])

</script>

<template>
    <Head>
        <title>PREVSOL</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no">
    </Head>

    <LayoutStructureHeader :header-options="constants.headerOptions"/>
    <LayoutStructureNavbar/>
    <main>
        <NuxtPage/>
    </main>
    <LayoutStructureFooter/>
</template>~/config/header