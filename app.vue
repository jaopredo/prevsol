<script setup>
import applicationCoreInit from "@/api/bootstrap"
// Inicializando fornecimento da API
applicationCoreInit(provide)

// Pegando as constantes
import { headerOptions, menuConfig } from "@/constants/header.json"

const constants = ref({
    headerOptions,
    menuConfig
})

</script>

<template>
    <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no">
    </Head>

    <div class="interface">
        <LayoutHeader :header-options="constants.headerOptions"/>
        <LayoutNavbar :menu-config="constants.menuConfig" :header-options="constants.headerOptions"/>
        <main style="height: 200vh;">
            <NuxtPage/>
        </main>
        <LayoutFooter/>
    </div>
</template>