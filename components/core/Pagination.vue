<script setup>

const { meta, dataRef, actualPage } = defineProps([
    'meta',
    'dataRef',
    'actualPage'
])

function onPageClick(page) {
    actualPage.updater(page)
}

</script>

<template>
    <ul class="border-b flex items-center justify-center w-full">
        <li class="paginate-item" @click="() => {
            if (actualPage.value > 1) actualPage.updater(actualPage.value-1)
        }">
            <Icon name="ic:baseline-keyboard-arrow-left" size="1.3em"/>
        </li>
        <li @click="() => onPageClick(Number(link.label))" v-for="link of meta.links?.filter(l => Number(l.label))" :class="(link.active?'selected ':0) + ' paginate-item'" v-html="link.label">
        </li>
        <li class="paginate-item" @click="() => {
            if (actualPage.value < meta.links?.length-2) actualPage.updater(actualPage.value+1)
        }">
            <Icon name="ic:baseline-keyboard-arrow-right" size="1.3em"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .paginate-item {
        @apply p-2 transition-all hover:cursor-pointer opacity-80 md:text-sm hover:border-b-2 hover:border-emerald-700 hover:text-emerald-700 hover:font-bold;
    }

    .selected {
        @apply border-b-2 border-emerald-700 text-emerald-700 font-bold;
    }
</style>
