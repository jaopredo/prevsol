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
import APICONFIG from '~/config/api'

async function makeApiCall(route, service, updater) {
    const { data } = await service.getAll({route, page: 1, pageSize: APICONFIG.entries[route]})
    updater(data)
}

const pub_types = ref([])
const calendars = ref([])
const slides = ref([])
const servers = ref([])
const histories = ref([])

const loading = ref(true)
const whatLoading = ref('')

provide('slide', slides)
provide('calendar', calendars)
provide('publication_type', pub_types)
provide('server', servers)
provide('history', histories)

async function loadAllData() {
    whatLoading.value = "Slides"
    await Promise.all([
        makeApiCall('slide', DataboardService, data => {
            slides.value = data
            whatLoading.value = "Calendário"
        }),
        makeApiCall('calendar', DataboardService, data => {
            calendars.value = data
            whatLoading.value = "Categorias de Publicação"
        }),
        makeApiCall('publication_type', DataboardService, data => {
            pub_types.value = data
            whatLoading.value = "Serviços"
        }),
        makeApiCall('server', DataboardService, data => {
            servers.value = data
            whatLoading.value = "Históricos"
        }),
        makeApiCall('history', DataboardService, data => {
            histories.value = data
            whatLoading.value = ""
        })
    ]).then(resp => loading.value = false)
}
loadAllData()


</script>

<template>
    <div v-if="!loading">
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
    </div>
    <div v-else class="flex flex-col gap-6 items-center justify-center w-screen h-screen">
        <LayoutPartialsLoading :what-loading="whatLoading"/>
    </div>
</template>