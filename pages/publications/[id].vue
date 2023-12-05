<script setup>
import APICONFIG from '~/config/api'

const route = useRoute()
const DataboardService = inject('DataboardService')

const [ pub ] = await Promise.all([
    DataboardService.get('publication', route.params.id),
])

</script>

<template>
    <section class="p-5 flex flex-col items-center gap-5">
        <h1 class="text-emerald-600 font-bold text-4xl text-center">{{ pub.category }}</h1>

        <div class="flex flex-col min-h-[300px] md:w-[80%] md:h-fit items-stretch rounded-lg w-full p-3" style="box-shadow:  8px 8px 23px #a8a8a8,-8px -8px 23px #ffffff;">
            <div v-if="pub.documents.length==0" class="w-full h-full flex-grow flex items-center justify-center text-center font-bold text-emerald-700">
                <p>NÃO FORAM ENCONTRADOS REGISTROS, VOLTE PARA A PÁGINA ANTERIOR!</p>
            </div>

            <ul v-if="pub.documents.length > 0" class="w-full h-full flex flex-col items-stretch">
                <li v-for="document of pub.documents" class="w-full border-b active:border-emerald-500 active:text-emerald-500 md:hover:border-emerald-400 md:hover:text-emerald-500">
                    <NuxtLink class="w-full h-full p-3 flex items-center justify-between" :to="`${APICONFIG.url}/files/${document.archive}`" target="_blank">

                    <span class="">
                        <p class="text-lg font-medium">{{ document.name }}</p>
                        <p class="text-sm">{{ document.description }}</p>
                    </span>
                    <Icon name="mingcute:file-fill" size="1.5em"/>

                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>