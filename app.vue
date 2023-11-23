<script setup>
import applicationCoreInit from "@/api/bootstrap"
// Inicializando fornecimento da API
applicationCoreInit(provide)

// Pegando as constantes
import { headerOptions } from "@/constants/header"

const constants = ref({
    headerOptions,
})

</script>

<template>
    <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no">
    </Head>

    <div class="interface">
        <LayoutHeader :header-options="constants.headerOptions"/>
        <LayoutNavbar/>
        <main style="height: 200vh;">
            <NuxtPage/>
        </main>
        <LayoutFooter/>
    </div>
</template>