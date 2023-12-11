<template>
    <section class="flex items-center justify-center mt-4 pb-5">
        <ul class="w-[1100px] flex">
            <li class="loading" v-for="mock of [1, 2, 3, 4]">
                <div class="name"></div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.loading{
    @apply w-[300px] h-[170px] bg-gray-200 animate-pulse p-3; 
    .name{
        @apply h-5 w-[100px] bg-gray-400 rounded-sm;
    }
}
</style>