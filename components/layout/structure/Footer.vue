<template>
    <footer
        :style="{
            backgroundImage:'url(prevsol-map-changed.png)',
            backgroundPosition:'center'        
        }"
    >
        <div class="blurs">
            <div  class="blurs-content">
                <img src="/prevsol-2-logo.png">
                <div class="blurs-content-text">
                    <div>
                        <h1>Contatos</h1>
                        <ul>
                            <li>
                                <Icon name="bxs:map" size="18"></Icon> 
                                <p>AV. CACHOEIRA RIACHO DO SANGUE, 150 - CENTRO</p>
                            </li>
                            <li>
                                <Icon name="bxs:envelope" size="18"></Icon>                         
                                <p>prevsol@solonopole.ce.gov.br</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>Horario</h1>
                        <ul>
                            <li>
                                <Icon name="bxs:alarm" size="18"></Icon> 
                                <p>SEGUNDA A QUINTA: 07:30 ÀS 13:30</p>
                            </li>
                            <li>
                                <Icon name="bxs:alarm" size="18"></Icon> 
                                <p>SEXTA: 07:30 ÀS 12:00</p>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <ul class="blurs-content-social">
                    <li title="Facebook">
                        <Icon class="hover:scale-150 transition-transform duration-300" name="fa:facebook-square" size="18.5" color="white"></Icon>
                    </li>
                    <li title="Instagram">
                        <Icon class="hover:scale-150 transition-transform duration-300" name="fa:instagram" size="18.5" color="white"></Icon>
                    </li>
                    <li title="Youtube">
                        <Icon class="hover:scale-150 transition-transform duration-300" name="fa:youtube-play" size="25" color="white"></Icon>
                    </li>
                    <li title="Email">
                        <Icon class="hover:scale-150 transition-transform duration-300" name="bxs:envelope" size="25" color="white"></Icon>
                    </li>
                </ul>
            </div>
            <div class="blurs-copyright">
                <div class="blurs-copyright-blur">
                    <h1>Copyright © 2023 PREVSOL. Todos os direitos reservados.</h1>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import "@/assets/scss/mixins/compositor";

$painel-width:1100px;
$section-height:100px;


footer{
    width:100%; 
    min-height:$section-height;
    overflow: hidden;
    .blurs{
        width: 100%;
        min-height: $section-height;
        backdrop-filter: blur(4px);        
        @include flex(column,space-between);        
        &-content{
            width: 100%;
            min-height: $section-height;
            padding-bottom: 10px;
            @include flex(column,flex-start,center);

            img{
                margin-top:30px;
                block-size: 60px;

                user-select: none;
                -moz-user-select: none;
                -webkit-user-drag: none;
                -webkit-user-select: none;
                -ms-user-select: none;                
            }

            &-text{
                margin-top:300px;
                width: 100%;
                min-height: 50px;            
                @include flex(row,space-around,center,10px);
                flex-wrap: wrap;
                color:white;
                
                h1{
                    font-size: 14.5px;
                    text-transform: uppercase;
                    letter-spacing: 2.2px;
                    text-align: center;
                    font-weight: 500;
                    user-select: none;
                }


                ul{
                    margin-top:5px;
                    @include flex(column,flex-start,center,10px);

                    li{
                        @include flex(row,center,center,5px);                    

                        p{
                            font-size: 12px;
                        }
                    }
                }    
            }
            &-social{
                margin-top:30px;
                @include flex(row,flex-start,flex-start,15px);
            }
        }
        &-copyright{
            width: 100%;
            height:30px;            
            user-select: none;

            &-blur{
                width: 100%;
                height:30px;
                backdrop-filter: blur(1.5px);

                color: white;
                @include flex(row,center,center);
            }
        }
    }
}


@media screen and (max-width:1366px){//----100%
    footer{
        .blurs{
            &-content{
                img{}
                &-text{
                    h1{
                        font-size: 14.5px;
                    }

                    ul{
                        li{
                            p{}
                        }
                    }    
                }
                &-social{}
            }
            &-copyright{
                &-blur{
                    font-size: 16px;
                }
            }
        }
    }
}

@media screen and (max-width:1100px){
    footer{
        .blurs{
            &-content{
                img{}
                &-text{
                    h1{
                        font-size: 14.5px;
                    }

                    ul{
                        li{
                            p{}
                        }
                    }    
                }
                &-social{}
            }
            &-copyright{
                &-blur{
                    font-size: 14px;
                }
            }
        }
    }
}

@media screen and (max-width:683px){//-----50%
    footer{
        .blurs{
            &-content{
                img{}
                &-text{
                    h1{
                        font-size: 14.5px;
                    }

                    ul{
                        li{
                            p{}
                        }
                    }    
                }
                &-social{}
            }
            &-copyright{
                &-blur{
                    font-size: 12px;
                }
            }
        }
    }
}

@media screen and (max-width:460px){//---25%
    footer{
        .blurs{
            &-content{
                img{}
                &-text{
                    h1{
                        font-size: 12px;
                    }

                    ul{
                        li{
                            p{}
                        }
                    }    
                }
                &-social{}
            }
            &-copyright{
                &-blur{
                    font-size: 10px;
                }
            }
        }
    }
}
</style>