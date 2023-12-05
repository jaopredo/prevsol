<script setup>

import { marked } from 'marked'

function sanitize(value) {  // Função pra mudar o preview
    return marked.parse(value)
}

const histories = inject('history')
const showHistories = ref(histories.value.length>0?true:false)

watch(() => histories.value, () =>{
    showHistories.value = true
})

</script>

<template>
    <section class="flex flex-col items-center justify-center p-5">
        <h1 class="text-emerald-600 font-bold text-4xl">Histórico</h1>
        <ul class="w-[90%]" v-if="showHistories">
            <li class="preview" v-for="history of histories" v-html="sanitize(history.text)"></li>
            <!-- <li class="preview" v-for="history of histories"> {{ sanitize(history.text) }} </li> -->
        </ul>
        <div v-else class="w-12 h-12 border-t-2 border-t-emerald-700 animate-spin rounded-full"></div>
    </section>

</template>

<style lang="scss"> 

.preview {
    @apply w-full h-full p-2;

    * {
        @apply break-words mt-2;
    }

    h1 {
        @apply text-[21px] font-bold text-emerald-700 mt-2;
    }
    h2 {
        @apply text-[20px] font-bold text-emerald-700 mt-2;
    }
    h3 {
        @apply text-[19px] font-bold text-emerald-700 mt-2;
    }
    h4 {
        @apply text-[18px] font-bold text-emerald-700 mt-2;
    }
    h5 {
        @apply text-[17px] font-bold text-emerald-700 mt-2;
    }
    h6 {
        @apply font-bold text-emerald-700 mt-2;
    }

    ol {
        @apply list-decimal list-inside flex flex-col items-start justify-center ml-4;
    }

    ul {
        @apply list-disc list-inside flex flex-col items-start justify-center ml-4;
    }

    a {
        @apply text-emerald-600 hover:text-emerald-700 hover:underline visited:text-violet-800;
    }

    em {
        @apply underline;
    }

    img {
        @apply w-full h-auto;
    }

    blockquote {
        @apply italic border-l-2 pl-5 mt-2;
    }

    code {
        @apply bg-slate-200 rounded-md p-2 text-sm;
    }
    pre {
        @apply flex;
    }

    table {
        th, td {
            @apply text-center border p-2;
        }
    }
    
    p {
        @apply mt-2 indent-10;
    }
}

</style>