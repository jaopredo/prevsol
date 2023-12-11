<template>
    <div class="loading">
        <div class="name"></div>
    </div>
</template>

<style lang="scss" scoped>
.loading{
    width:220px;
    height:170px;
    background-color: rgb(156, 156, 156);
    animation-name: pisque;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    padding:10px;
    display:flex;

    .name{
        width:100px;
        height:1rem;
        background-color: rgb(116, 116, 116);
    }
}

@keyframes pisque{
    0%{
        opacity: 1;
    }
    50%{
        opacity: .4125;
    }
    100%{
        opacity: 1;
    }
}
</style>