<script setup>

const DataboardService = inject('DataboardService')

const { route, name, searchField } = defineProps([
    'route',
    'name',
    'to',
    'searchField',
])

const search = ref('')
const actualPage = ref({
    value: 1,
    updater: page => {
        actualPage.value.value = page
    }
})

const data = ref({
    loading: true,
    data: [],
    metadata: {},
    update: async (page) => {
        data.value.loading = true
        data.value.data = []
        const resp = await DataboardService.getAll({
            route: route,
            pageSize: 10,
            filters: search.value != ''?{
                [searchField]: {
                    like: search.value
                }
            }:{},
            page
        })
        data.value.loading = false
        data.value.data = resp.data
        data.value.metadata = resp.metadata
    }
})

await data.value.update(actualPage.value.value)

watch(
    () => actualPage.value.value,
    (newPage) => {
        data.value.update(newPage)
    }
)
watch(
    () => search.value,
    () => {
        data.value.update(actualPage.value.value)
    }
)

</script>

<template>
    <div class="bg-white flex flex-col min-h-[300px] md:h-fit items-stretch rounded-lg w-full md:w-[80%] p-3" style="box-shadow:  8px 8px 23px #a8a8a8,-8px -8px 23px #ffffff;">
        <div class="flex items-center justify-center gap-3 w-full">
            <input v-model="search" type="search" id="search-publication" class="peer input flex-grow" placeholder="Para procurar, digite aqui">
            <Icon name="ic:baseline-search" size="1.5em" class="peer-focus:text-emerald-700" />
        </div>
        <div v-if="data.data.length==0 && !data.loading" class="h-full flex-grow flex items-center justify-center text-center font-bold text-emerald-700">
            <p>NÃO FORAM ENCONTRADOS REGISTROS, VOLTE PARA A PÁGINA ANTERIOR!</p>
        </div>

        <CorePagination v-if="data.data.length>0" :meta="data.metadata" :actualPage="actualPage" :dataRef="data"/>
        <ul v-if="data.data.length > 0" class="w-full h-full flex flex-col items-stretch">
            <li v-for="entry of data.data" class="w-full border-b active:border-emerald-500 active:text-emerald-500 md:hover:border-emerald-400 md:hover:text-emerald-500 odd:bg-slate-">
                <NuxtLink class="w-full h-full p-3 flex items-center justify-between" :to="`${to}/${entry.id}`">
                    {{ entry[name] }}
                    <Icon name="ic:sharp-keyboard-arrow-right" size="1.5em"/>
                </NuxtLink>
            </li>
        </ul>
        <div class="flex-grow h-full w-full flex items-center justify-center" v-if="data.loading">
            <Icon name="mdi:loading" size="2em" class="animate-spin text-emerald-600" />
        </div>
</div>
</template>

<style lang="scss" scoped>
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
    }
</style>
