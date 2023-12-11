<template>
    <div class="loading-last animate-pulse">
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
</style>