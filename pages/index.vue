<script setup>
    
    const databoardService = inject('databoardService')

    databoardService.setRoute('document')

    const docs = databoardService.getAll(1, 10)

    console.log(docs)
</script>

<template>
    <div>
        <h1>Apenas um Teste</h1>
        <NuxtLink to="/teste">Ir para Teste</NuxtLink>
    </div>
</template>