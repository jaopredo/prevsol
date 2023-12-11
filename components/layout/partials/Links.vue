<script setup>
import ip from '@/config/api';

const url=ref(ip.url)
const placehold=ref(null);
const links=ref(null);
const isLoading=ref(true)
const data=reactive({
    all:[],
    responsive:{
        indexMax:0,
        maxComponents:5,
        limite:1100,
        width:220
    },
    mouse:{
        index:0,
        distance:0,
        beforeDistance:0,
        down:{
            state:false,
            value:[]
        },
        up:[],
        move:[]
    }
})

data.all=ref(inject('link'))


let coldown_left=false,time_left;
async function left(){
    if(!coldown_left){
        clearTimeout(time_left);

        --data.mouse.index
        coldown_left=true

        time_left=await setTimeout(()=>{
            coldown_left=false
        },1000)
    }
}

let coldown_right=false,time_right;
async function right(){
    if(!coldown_right){
        clearTimeout(time_right)

        ++data.mouse.index
        coldown_right=true

        time_right=await setTimeout(()=>{        
            coldown_right=false
        },1000)
    }
}


function feature_move(index){
    links.value.style.left=-1*(index*data.responsive.maxComponents)*data.responsive.width+'px'
}

function mousemove(e){
    if(data.mouse.down.state){
        var variable=(e.clientX-data.mouse.down.value[0])-data.mouse.beforeDistance    
        feature_move(variable)
        data.mouse.beforeDistance+=variable
    }
}
function responsive(e){
    data.responsive.limite=window.innerWidth

    if(data.responsive.limite<=1100){        
        data.responsive.width= data.responsive.limite*0.2
        data.responsive.maxComponents=5
    }
    if(data.responsive.limite<=880){                
        data.responsive.width= data.responsive.limite*0.25
        data.responsive.maxComponents=4
    }
    if(data.responsive.limite<=660){                
        data.responsive.width= data.responsive.limite*0.333333333333
        data.responsive.maxComponents=3
    }
    if(data.responsive.limite<=440){                
        data.responsive.width= data.responsive.limite*0.5
        data.responsive.maxComponents=2
    }

    maxIndex()
}

function maxIndex(){
    data.responsive.indexMax=Math.ceil(data.all.length/data.responsive.maxComponents)    
}

onMounted(async()=>{
    responsive()

    window.addEventListener('resize',responsive)

    setTimeout(()=>{
        isLoading.value=false
    },2000)
})

watch(
    ()=>data.all.value,
    ()=>{
        maxIndex()
    }
)

watch(
    ()=> data.mouse.index,
    (index)=>{
        if(index<0){
            data.mouse.index=data.responsive.indexMax-1
        }else if(index>=data.responsive.indexMax){
            data.mouse.index=0
        }

        feature_move(index)
    }
)
</script>

<template>
    <section class="usefulLinks">
        <div class="usefulLinks-painel">
            <h1 class="usefulLinks-painel-text">Links Uteis</h1>
            <div class="usefulLinks-painel-placehold" ref="placehold">
                <ul class="usefulLinks-painel-placehold-links" ref="links">
                    <li v-for="(links,index) in data.all" :key="index">
                        <a :href="links.url" target="_blank">
                            <div
                                :style="{                                
                                    backgroundImage:`url(${url}/files/${links.image})`,
                                    backgroundSize:'cover',
                                    backgroundPosition:'center',                                
                                    overflow:'hidden'
                                }" class="usefulLinks-painel-placehold-links-items"
                            >
                            <h1 class="text-white">{{ links.name }}</h1>                        
                            </div>
                        </a>
                    </li>
                </ul>

                <div class="usefulLinks-painel-placehold-left">
                    <Icon class="hover:scale-125 transition-transform duration-300" name="ep:arrow-left-bold" size="20" color="white" @click="left"/>
                </div>
                <div class="usefulLinks-painel-placehold-right">
                    <Icon class="hover:scale-125 transition-transform duration-300" name="ep:arrow-right-bold" size="20" color="white" @click="right"/>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
 @import "@/assets/scss/mixins/compositor";

$painel-width:1100px;
$section-height:230px;


.usefulLinks{
    @include flex(row,center,center);
    width:100%; 
    //min-height:$section-height;


    &-painel{
        position:relative;
        width:$painel-width;
        //min-height:$section-height;                    
        overflow: hidden;        

        &-placehold{
            position:relative;            
            overflow: hidden;
            width: 100%;
            height: 200px;
            &-links{ 
                position:absolute;
                top:0;left:0;
                transition: left 1s;                
                min-width: $painel-width;
                height:200px;
                overflow-x:hidden;
                overflow-y:hidden;                
                @include flex();
                
                &-items{
                    width: 220px;
                    height: 170px;

                    h1{
                        margin-top:10px;
                        margin-left: 10px;
                        text-transform: uppercase;
                        font-weight: 800;
                        font-size:10px;
                        width:120px;
                        height: 25px;
                        word-break: break-all;
                    }

                    user-select: none;
                    -moz-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
            }

            &-left{
                cursor: pointer;
                position: absolute;
                top:35%;left:0;
                width:30px;height: 30px;
                @include flex(row,center,center);
            }
            &-right{
                cursor: pointer;
                position: absolute;
                top:35%;right:0;
                width:30px;height: 30px;                
                @include flex(row,center,center);
            }
        }

        &-text{
            user-select: none;
            margin-top: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
        }
    }
}


@media screen and (max-width:880px){
    $section-height: 210px;
    .usefulLinks{
        min-height:$section-height;
        border:1px solid firebrick;
        &-painel{
            min-height:$section-height;
            &-placehold{
                height: 150px;            
                &-links{                          
                    &-items{
                        width: 25vw;
                        height: 150px;
                    }
                }
            }
            &-text{
                user-select: none;
                margin-top: 4px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 700;
                font-size: 18px;
                text-align: center;
            }
        }
    }
}


@media screen and (max-width:660px){
    $section-height: 190px;
    .usefulLinks{
        min-height:$section-height;
        border:1px solid firebrick;
        &-painel{
            min-height:$section-height;
            &-placehold{
                height: 130px;            
                &-links{                          
                    &-items{
                        width: 33.3333333333vw;
                        height: 130px;
                    }
                }
            }
            &-text{
                user-select: none;
                margin-top: 4px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
            }
        }
    }
}

@media screen and (max-width:440px){
    $section-height: 170px;
    .usefulLinks{
        min-height:$section-height;
        border:1px solid firebrick;
        &-painel{
            min-height:$section-height;
            &-placehold{
                height: 110px;            
                &-links{                          
                    &-items{
                        width: 50vw;
                        height: 110px;
                    }
                }
            }
            &-text{
                user-select: none;
                margin-top: 4px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 700;
                font-size: 14px;
                text-align: center;
            }
        }
    }
}
</style>