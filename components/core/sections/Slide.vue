<script setup>
import APICONFIG from '~/config/api';

const DataboardService = inject('databoardService')

/* REFS QUE VOU UTILIZAR */
const carrouselConfig = ref({
    loaded: false,
    current: {
        index: 0,
        slide: null
    },
    length: null,
    slides: []
})
const carrouselRef = ref(null)


/* CHAMADA DA API PARA OS SLIDES */
async function getSlides() {
    const { data } = await DataboardService.setRoute('slide').getAll(1, 10)

    carrouselConfig.value = {
        loaded: true,
        current: {
            index: 0,
            slide: data[0]
        },
        length: data.length,
        slides: data
    }
}
Promise.all([ getSlides() ])


/* FUNÇAO QUE AUMENTA O VALOR DO INDEX SEMPRE */
setInterval(()=>{
    const { current: { index }, length } = carrouselConfig.value

    if (length) {
        carrouselConfig.value.current.index = index==length-1?0:index+1
    }
}, 5000)

watch(() => carrouselConfig.value.current.index, () => {
    const actualWidth = window.innerWidth
    const { current: { index } } = carrouselConfig.value
    
    if (carrouselRef.value) {
        carrouselRef.value.style.transform = `translateX(-${(index) * actualWidth}px)`
    }
})

/* SE EU CLICAR NO BOTÃO DIREITO E ESQUERDO */
function onRightClick() {
    const { current: { index }, length } = carrouselConfig.value
    if (index < length-1) {
        carrouselConfig.value.current.index += 1
    }
}
function onLeftClick() {
    const { current: { index } } = carrouselConfig.value
    if (index > 0) {
        carrouselConfig.value.current.index -= 1
    }
}


</script>

<template>
    <section>
        <div class="md:h-[60vh] h-[50vw] w-full">
            <ul v-if="carrouselConfig.loaded" ref="carrouselRef" class="slides-container">
                <li v-for="slide of carrouselConfig.slides" class="slide" :style="{
                    backgroundImage: `url(${APICONFIG.url}/files/${slide.image})`,
                }"></li>
            </ul>
            <button @click="onLeftClick" type="button" class="change-button left-0 bottom-1/2 translate-y-1/2">
                <Icon name="iconamoon:arrow-left-2-bold" size="3em" />
            </button>
            <button @click="onRightClick" type="button" class="change-button right-0 top-1/2 -translate-y-1/2">
                <Icon name="iconamoon:arrow-right-2-bold" size="3em" />
            </button>
        </div>
        <ul class="flex items-center justify-center gap-3 mt-3">
            <li v-for="[ index ] of carrouselConfig.slides.entries()" :class="
                'rounded-full w-2 h-2 bg-emerald-600 transition-all ' +
                (carrouselConfig.current.index == index ? 'scale-125' : '')
            ">
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries";

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