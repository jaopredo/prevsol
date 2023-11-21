<template>
    <Header/>
    <main>
        <NuxtPage/>
    </main>
    <Footer/>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>