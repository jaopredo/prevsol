<script setup>
import applicationCoreInit from "@/api/bootstrap"

applicationCoreInit(provide)
</script>

<template>
    <div class="interface">
        <LayoutHeader/>
        <LayoutNavbar/>
        <main style="height: 2200px;">
            <NuxtPage/>
        </main>
        <LayoutFooter/>
    </div>
</template>