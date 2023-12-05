<script setup>

const DataboardService = inject('DataboardService')
const router = useRoute()

const pub_type = ref(await DataboardService.get('publication_type', router.params.id))

</script>

<template>
    <section class="p-5 flex flex-col items-center gap-5">
        <h1 class="text-emerald-600 font-bold text-4xl text-center">{{ pub_type?.name }}</h1>
        
        <CoreContainer :route="`publication?filters[publication_type_id][eq]=${router.params.id}`" name="category" to="/publications" search-field="category"/>
    </section>
</template>