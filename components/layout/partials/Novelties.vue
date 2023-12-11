<script setup>
import ip from '@/config/api';


const url=ref(ip.url)
var carrosselLastCurrenteIndex=ref(0)
const carrosselLast=ref(null)
const carrosselMore=ref(null)
const more=ref(null);


const data=reactive({
    novelties:[],
    last:[],
    more:[],
    responsive:{
        width:220
    },
    mouse:{
        state:true,
        distance:0,
        counter:0,
        down:{
            state:false,
            value:[]
        },
        up:[],
        move:[]
    }
})

data.novelties=ref(inject('papernew'))


function responsive(e){
    data.responsive.limite=window.innerWidth

    if(data.responsive.limite<=1366){        
        data.responsive.width= 360        
    }
    if(data.responsive.limite<=1100){                
        data.responsive.width= 360
    }
    if(data.responsive.limite<=683){                
        data.responsive.width= 270    
    }
    if(data.responsive.limite<=341.5){                
        data.responsive.width= 216        
    }
}

watch(
    ()=> data.novelties,
    ()=>{
        data.last=data.novelties
        data.more=data.novelties

        if(data.novelties.length>=10){
            data.last=data.novelties.slice(0,10);
            data.more=data.novelties.slice(10,data.novelties.length);            
        }
        else if(data.novelties.length>3){            
            data.last=data.novelties.slice(0,3);
            data.more=data.novelties.slice(3,data.novelties.length);
        }else{            
            data.last=data.novelties.slice(0,data.novelties.length)
            data.more=[]
        }
    }
)

watch(
    () => carrosselLastCurrenteIndex.value,
    (value)=>{
        if(value<=0){
            carrosselLastCurrenteIndex.value=data.last.length
        }
        if(value>data.last.length){
            carrosselLastCurrenteIndex.value=1
        }

        if(window.innerWidth>=1100){carrosselLast.value.style.left=-1100*(value-1)+'px'
        }else{
            carrosselLast.value.style.left=-window.innerWidth*(value-1)+'px'
        }
    }
)

var calculo=0;
watch(
    ()=> data.mouse.counter,
    (after)=>{
        var calculo= 180*(data.more.length*2-4)+10*(data.more.length-2)

        if(after<=-calculo){
            data.mouse.counter=-calculo
        }
        if(after>=370){
            data.mouse.counter=370
        }
    }
)


onMounted(async()=>{
    more.value.addEventListener('mousedown',(e)=>{
        data.mouse.down.value=[e.clientX,e.clientX]
        data.mouse.down.state=true        
    });

    let variable=0,counter=0,state=true;
    more.value.addEventListener('mousemove',(e)=>{    

        if(data.mouse.down.state && state && data.more.length>=3){
            variable=(e.clientX-data.mouse.down.value[0])-data.mouse.distance

            if(variable>=0){
                data.mouse.counter+=variable
                carrosselMore.value.style.left=data.mouse.counter+'px'                
            }else{                
                data.mouse.counter+=variable
                carrosselMore.value.style.left=data.mouse.counter+'px'             
            }

            data.mouse.distance+=variable
        }

    })
    more.value.addEventListener('mouseup',()=>{
        data.mouse.down.state=false
        data.mouse.distance=0
        data.mouse.down.value=[0,0]
        data.mouse.move=[0,0]  
    })

    more.value.addEventListener('mouseleave',()=>{
        data.mouse.down.state=false
        data.mouse.distance=0
        data.mouse.down.value=[0,0]
        data.mouse.move=[0,0]
    })

    window.addEventListener('resize',responsive)

    setInterval(()=>{
        carrosselLastCurrenteIndex.value+=1
    },5000)
})
</script>

<template>
    <section 
        class="novelties"
        name="novelties"
    >
        <div
            class="novelties-painel"
        >

            <div v-if="data.last.length>0" class="novelties-painel-last">
                <ul class="novelties-painel-last-carrossel" ref="carrosselLast">
                    <li v-for="(noveltie,index) in data.last" :key="index">
                        <div
                            :style="{                                
                                backgroundImage:`url(${url}/files/${noveltie.image})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',                                
                                overflow:'hidden'
                            }" class="novelties-painel-last-carrossel-items"
                        >
                            <div class="w-full h-full" style="background-color: rgba(0,0,0,.4125);">
                                <div :style="{
                                    backdropFilter:'blur(4px)',
                                    width:'100%',
                                    height:'100%'
                                }" class="novelties-painel-last-carrossel-items-container">
                                    <p>{{ noveltie.type }} </p>
                                    <div>
                                        <h1>{{ noveltie.name }} </h1>
                                        <p> {{ noveltie.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="novelties-painel-last-push">                
                    <ul v-for="(value) in data.last.length" :key="value">                
                        <div class="novelties-painel-last-push-boll" @click="()=>{
                            carrosselLastCurrenteIndex=value
                        }"></div>
                    </ul>                    
                </div>

                <div class="novelties-painel-last-left">
                    <Icon name="ep:arrow-left-bold" color="white" @click="()=>{
                            carrosselLastCurrenteIndex-=1
                            console.log('data',data.last)
                        }"></Icon>
                </div>                
                <div class="novelties-painel-last-right">
                    <Icon name="ep:arrow-right-bold" color="white" @click="()=>{
                            carrosselLastCurrenteIndex+=1
                        }"></Icon>
                </div>
            </div>
            <div v-else>
                <LayoutLoadingNoveltiesLast/>
            </div>


            <div
                class="novelties-painel-more"
                ref="more"
            >
                <ul ref="carrosselMore" class="novelties-painel-more-carrossel">
                    <li v-if="data.more.length>0" v-for="(noveltie,index) in data.more" :key="index">
                        <div
                            :style="{                                    
                                backgroundImage:`url(${url}/files/${noveltie.image})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                borderRadius:'10px',
                                overflow:'hidden'
                            }" class="novelties-painel-more-carrossel-items"
                        >
                            <div class="w-full h-full" style="background-color: rgba(0,0,0,.4125);">
                                <div :style="{
                                    backdropFilter:'blur(4px)',
                                    width:'100%',
                                    height:'100%'
                                }" class="novelties-painel-more-carrossel-items-container">
                                    <p>{{ noveltie.type }} </p>
                                    <div>
                                        <h1>{{ noveltie.name }} </h1>
                                        <p> {{ noveltie.description }}</p>
                                    </div>
                                </div>    
                            </div>                            
                        </div>
                    </li>
                    <li v-else v-for="mocker of [1,2,3]">
                        <LayoutLoadingNoveltiesMore/>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
    @import "@/assets/scss/mixins/compositor";

    $painel-width:1100px;
    $section-height:200px;


    .novelties{
        @include flex(row,center,center);
        width:100%; 
        min-height:$section-height;


        &-painel{
            position:relative;
            //@warnborder:2px solid black;
            width:$painel-width;
            min-height:$section-height;            
            @include flex(column,flex-start,center,10px);

            &-last{
                position:relative;
                overflow:hidden;

                width:100%;
                //min-height:550px;
                //background-color: red;

                &-carrossel{
                    @include flex();
                    position: absolute;
                    top: 0;left: 0;
                    min-width:100px;
                    height:100%;
                    transition: left 1s;
                    //background-color: purple;
                    overflow:hidden;
                    &-items{
                        //width:1100px;// mudar de acordo com media query
                        //height:550px;
                        transition: height 2s;

                        &-container{                            
                            @include flex(column,space-between,flex-start);
                            padding: 40px;
                            color:white;
                            user-select: none;

                            p{
                                font-weight: 100;
                                //font-size: 13px;
                                opacity: .8125;
                            }

                            div{

                                p{
                                    //margin-top:30px;
                                    //max-width:600px;
                                    //max-height:50px;
                                    overflow: hidden;
                                    font-weight: 400;
                                    //font-size: 15px;
                                }
                                h1{
                                    overflow: hidden;
                                    //max-width:600px;
                                    //max-height:70px;
                                    word-wrap: break-word;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                    //font-size: 25px;
                                    font-weight: 900;
                                }
                            }
                        }
                    }
                }                

                &-push{
                    cursor:pointer;
                    position:absolute;
                    bottom:0;
                    left:0;
                    width:100%;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap:10px;
                    //background-color:red;

                    &-boll{
                        width:  7px;
                        height: 7px;
                        border-radius: 50%;
                        background-color:white;
                    }
                }

                &-left{
                    cursor:pointer;
                    position: absolute;
                    left:1%;
                    top:45%;
                }

                &-right{
                    cursor:pointer;
                    position: absolute;
                    right:1%;
                    top:45%;
                }
            }

            &-more{
                position:relative;
                overflow-x:hidden;
                overflow-y:hidden;
                width:100%;
                height:250px;

                &-carrossel{
                    @include flex(row,flex-start,flex-start,10px);
                    position: absolute;
                    top: 0;left: 0;

                    &-items{
                        //width:360px;
                        //height: 250px;
                        transition: width 1s ,height 1s;
                        

                        &-container{                            
                            @include flex(column,space-between,flex-start);
                            //padding: 22px;
                            color:white;
                            user-select: none;

                            p{
                                font-weight: 100;
                                //font-size: 13px;
                                opacity: .8125;
                            }

                            div{

                                p{
                                    //margin-top:10px;
                                    //max-width:330px;
                                    //max-height:50px;
                                    overflow: hidden;
                                    font-weight: 400;
                                    //font-size: 15px;
                                }
                                h1{
                                    overflow: hidden;
                                    //max-width:330px;
                                    //max-height:70px;
                                    word-wrap: break-word;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                    //font-size: 25px;
                                    font-weight: 900;
                                }
                            }
                        }
                    }
                }

            }

            &-push{
                position: absolute;
                bottom:0;
                left:0;
                width:100%;
                height:30px;
                background-color: red;
            }
        }
    }

    
















    @media screen and (max-width:1366px){//----100%
        .novelties {
            &-painel{
                &-last{
                    height:550px;
                    &-carrossel{
                        &-items{
                            width:1100px;
                            height:550px;

                            &-container{
                                p{
                                    font-size: 13px;
                                }
                                div{
                                    p{
                                        font-size: 15px;
                                        margin-top:30px;
                                        max-width:600px;
                                        max-height:50px;
                                    }
                                    h1{
                                        font-size: 25px;
                                        max-width:600px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }

                    &-left{
                        size:30px;
                    }

                    &-right{
                        size:30px;
                    }
                }
                &-more{
                    &-carrossel{
                        &-items{
                            width:360px;
                            height: 250px;

                            &-container{
                                padding: 22px;
                                p{
                                    font-size: 13px;
                                }
                                div{
                                    p{
                                        font-size: 15px;
                                        margin-top:10px;
                                        max-width:330px;
                                        max-height:50px;
                                    }
                                    h1{
                                        font-size: 25px;
                                        max-width:330px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:1100px){
        .novelties {
            &-painel{
                &-last{
                    height:450px;
                    &-carrossel{                        
                        &-items{
                            width:100vw;
                            height:450px;       

                            &-container{
                                p{
                                    font-size: 13px;
                                }
                                div{
                                    p{
                                        font-size: 15px;
                                        margin-top:30px;
                                        max-width:600px;
                                        max-height:50px;
                                    }
                                    h1{
                                        font-size: 25px;
                                        max-width:600px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }
                }
                &-more{
                    &-carrossel{
                        &-items{
                            width:360px;
                            height: 250px;

                            &-container{
                                padding: 22px;
                                p{
                                    font-size: 13px;
                                }
                                div{
                                    p{
                                        font-size: 15px;
                                        margin-top:10px;
                                        max-width:330px;
                                        max-height:50px;
                                    }
                                    h1{
                                        font-size: 25px;
                                        max-width:330px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:683px){//-----50%
        .novelties {
            &-painel{
                &-last{
                    height:350px;
                    &-carrossel{
                        &-items{
                            width:100vw;
                            height:350px;
                        }
                    }
                }
                &-more{                    
                    &-carrossel{
                        &-items{
                            width:270px;
                            height: 187.5px;

                            &-container{
                                padding: 22px;
                                p{
                                    font-size: 13px;
                                }
                                div{
                                    p{
                                        font-size: 15px;
                                        margin-top:10px;
                                        max-width:330px;
                                        max-height:50px;
                                    }
                                    h1{
                                        font-size: 25px;
                                        max-width:330px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:341.5px){//---25%
        .novelties {
            &-painel{
                &-last{
                    height:250px;
                    &-carrossel{
                        &-items{
                            width:100vw;
                            height:250px;

                            &-container{
                                p{
                                    font-size: 7px;
                                }
                                div{
                                    p{
                                        font-size: 10px;
                                        margin-top:10px;
                                        max-width:330px;
                                        max-height:45px;
                                    }
                                    h1{
                                        font-size: 15px;
                                        max-width:280px;
                                        max-height:70px;
                                    }
                                }
                            }
                        }
                    }

                    &-left{
                        size:15px;
                    }

                    &-right{
                        size:15px;
                    }
                }
                &-more{
                    height:175px;
                    &-carrossel{
                        &-items{
                            width:216px;
                            height: 150px;

                            &-container{
                                padding:22px;
                                p{
                                    font-size: 7px;
                                }
                                div{
                                    p{
                                        font-size: 10px;
                                        margin-top:10px;
                                        max-width:175px;
                                        max-height:30px;
                                    }
                                    h1{
                                        font-size: 14px;
                                        max-width:175px;
                                        max-height:40px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>