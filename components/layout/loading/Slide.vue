<template>
    <section class="animate-pulse">
        <div class="md:h-[60vh] h-[50vw] w-full relative bg-gray-400">
            <div class="text-container">
                <h1></h1>
                <p></p>
            </div>
            <button type="button" class="change-button md:left-4 left-0 bottom-1/2 translate-y-1/2">
                <Icon name="iconamoon:arrow-left-2-bold" size="2em" />
            </button>
            <button type="button" class="change-button md:right-4 right-0 top-1/2 -translate-y-1/2">
                <Icon name="iconamoon:arrow-right-2-bold" size="2em" />
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries";

.text-container-container {
    @apply block bg-black/60 w-full h-full text-white relative;
}
.text-container {
    @apply absolute left-8 bottom-7;

    & h1 {
        @apply md:text-5xl text-[5vw] font-bold tracking-wider block bg-gray-500 md:w-96 w-44 md:h-16 h-10 rounded-md;
    }
    & p {
        @apply md:text-lg text-[3.4vw] block bg-gray-500 md:w-80 w-32 md:h-12 h-8 rounded-md md:mt-3 mt-1;
    }
}


.change-button {
    @include queries.pc {
        @apply hover:bg-black/20 active:bg-black/40;
    }

    @apply text-white flex items-center justify-center absolute rounded-full
}

.slides-container {
    @apply flex items-center w-fit h-full transition-all;
}

.slide {
    @apply h-full w-screen bg-no-repeat bg-cover;
}

</style>