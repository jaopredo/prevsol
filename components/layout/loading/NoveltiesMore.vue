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
    width: 360px;
    height: 250px;
    padding:30px;
    background-color: rgb(156, 156, 156);
    border-radius: 12px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: pisque;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    .top-h1{
        width: 80px;
        height: 1rem;
        background-color: rgb(138, 138, 138);
    }
    .bottom{
        .h1{
            width: 230px;
            height: 2rem;
            background-color: rgb(138, 138, 138);
        }

        .p{
            margin-top:10px;
            width: 210px;
            height: 2.4rem;
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