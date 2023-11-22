<script setup>
import applicationCoreInit from "@/api/bootstrap"

applicationCoreInit(provide)
</script>

<template>
    <div class="interface">
        <LayoutHeader/>
        <main>
            <NuxtPage/>
        </main>
        <LayoutFooter/>
    </div>
</template>