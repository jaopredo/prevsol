<script setup>

const { headerOptions } = defineProps([
    'headerOptions'
])

</script>

<template>
    <header>
        <!-- Faixa divisória de enfeite -->
        <div class="h-3 w-screen bg-emerald-400"></div>

        <!-- Área da Logo -->
        <div class="header-container">
            <img src="/images/prevsol-1-logo.png" alt="Logo PREVSOL"/>

            <ul class="flex items-center justify-center gap-2 flex-wrap">
                <li v-for="option of headerOptions">
                    <a target="_blank" class="emerald-button !p-2 !rounded-md" :href="option.action">
                        <Icon :name="option.icon" size="1.5em" />
                        <p>{{ option.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
@use "@/assets/scss/queries.scss";

.header-container {
    @include queries.pc {
        @apply flex-row h-32;
    }
    @apply flex flex-col h-44 p-3 gap-4 items-center justify-around;
}

</style>