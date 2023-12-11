<template>
    <div class="loading-last">
        <div class="top-h1"></div>
        <div class="bottom">
            <div class="h1"></div>
            <div class="p"></div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
.loading-last{
    width: 1100px;
    height: 550px;
    padding:40px;
    background-color: rgb(156, 156, 156);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: pisque;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    .top-h1{
        width: 180px;
        height: 1.5rem;
        background-color: rgb(138, 138, 138);
    }
    .bottom{
        .h1{
            width: 500px;
            height: 4rem;
            background-color: rgb(138, 138, 138);
        }

        .p{
            margin-top:30px;
            width: 470px;
            height: 5rem;
            background-color: rgb(138, 138, 138);
        }
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