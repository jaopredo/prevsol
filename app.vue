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
const papernew=ref([])
const link=ref([])

const loading = ref(true)

provide('slide', slides)
provide('calendar', calendars)
provide('publication_type', pub_types)
provide('server', servers)
provide('history', histories)
provide('papernew',papernew)
provide('link',link)

async function loadAllData() {
    await Promise.all([
        makeApiCall('publication_type', DataboardService, data => {
            pub_types.value = data
        }),
        makeApiCall('server', DataboardService, data => {
            servers.value = data
        }),
        
        makeApiCall('slide', DataboardService, data => {
            slides.value = data
        }),
        makeApiCall('calendar', DataboardService, data => {
            calendars.value = data
        }),
        
        makeApiCall('history', DataboardService, data => {
            histories.value = data
        }),
        makeApiCall('papernew',DataboardService,data=> {            
            papernew.value= data
        }),
        makeApiCall('link',DataboardService,data=> {
            link.value= data
        }),
    ]).then(resp => loading.value = false)
}
loadAllData()


</script>

<template>
    <Head>
        <title>PREVSOL</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no">
    </Head>

    <LayoutStructureHeader :header-options="constants.headerOptions"/>

    <LayoutStructureNavbar v-if="pub_types.length>0 && servers.length>0"/>
    <LayoutLoadingNavbar v-else />

    <main class="bg-gray-100">
        <NuxtPage/>
    </main>
    <LayoutStructureFooter/>
</template>