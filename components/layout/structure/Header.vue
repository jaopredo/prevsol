<script setup>

const { headerOptions } = defineProps([
    'headerOptions'
])

</script>

<template>
    <header>
        <!-- Faixa divisória de enfeite -->
        <div class="h-3 w-screen bg-emerald-700"></div>

        <!-- Área da Logo -->
        <div class="header-container">
            <div class="filter">
                <img src="/images/prevsol-1-logo.png" alt="Logo PREVSOL" class="w-auto h-[38%]"/>
                <ul class="flex items-center justify-center gap-2 flex-wrap">
                    <li v-for="option of headerOptions">
                        <a target="_blank" class="emerald-button !p-2 !rounded-md" :href="option.action">
                            <Icon :name="option.icon" size="1.5em" />
                            <p>{{ option.name }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries.scss";

.filter {
    @include queries.pc {
        @apply flex-row;
    }

    @apply flex flex-col gap-4 items-center justify-around w-full h-full
        backdrop-grayscale
        bg-white/60
    ;
}

.header-container {
    @include queries.pc {
        @apply flex-row h-56;
    }
    @apply
        h-52
        bg-[url(/images/solenopole.jpg)]
        bg-no-repeat
        bg-center
        bg-cover
        p-0
    ;
}

</style>