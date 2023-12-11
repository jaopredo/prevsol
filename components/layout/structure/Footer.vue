<template>
    <footer class="bg-[url('/prevsol-map-changed.png')] bg-no-repeat bg-cover bg-center relative text-white">
        <div class="h-5 w-full absolute top-0 left-0 bg-emerald-900"></div>
        <div class="flex items-center justify-around flex-col md:flex-row gap-5 md:gap-0 pr-4 pl-4 pb-32 pt-10 z-10">
            <img class="w-auto h-44" src="/prevsol-2-logo.png">
            <div class="bg-gray-100 text-emerald-900 p-3 rounded-md flex flex-col items-center justify-center gap-5">
                <div class="flex justify-center flex-col w-full">
                    <h1 class="text-lg font-bold">Contatos</h1>
                    <ul>
                        <li class="flex items-center gap-3">
                            <Icon name="bxs:map" size="18"></Icon> 
                            <p>AV. CACHOEIRA RIACHO DO SANGUE, 150 - CENTRO</p>
                        </li>
                        <li class="flex items-center gap-3">
                            <Icon name="bxs:envelope" size="18"></Icon>                         
                            <p>prevsol@solonopole.ce.gov.br</p>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-center flex-col w-full">
                    <h1 class="text-lg font-bold">Horario</h1>
                    <ul>
                        <li class="flex items-center gap-3">
                            <Icon name="bxs:alarm" size="18"></Icon> 
                            <p>SEGUNDA A QUINTA: 07:30 ÀS 13:30</p>
                        </li>
                        <li class="flex items-center gap-3">
                            <Icon name="bxs:alarm" size="18"></Icon> 
                            <p>SEXTA: 07:30 ÀS 12:00</p>
                        </li>
                    </ul>
                </div>                    
            </div>
        </div>
        <div class="bg-emerald-900 border-t border-t-white flex items-center justify-between p-4 z-10 flex-col md:flex-row">
            <h1>Copyright © 2023 PREVSOL. Todos os direitos reservados.</h1>
            <ul class="flex items-center justify-center gap-4">
                <li title="Instagram"><a href="https://www.instagram.com/prevsol" target="_blank">
                    <Icon class="hover:scale-110 transition-transform duration-300" name="fa:instagram" size="18.5" color="white"></Icon>
                </a></li>
                <li title="Email"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=prevsol@solonopole.ce.gov.br" target="_blank">
                    <Icon class="hover:scale-110 transition-transform duration-300" name="bxs:envelope" size="18.5" color="white"></Icon>
                </a></li>
            </ul>
        </div>
    </footer>
</template>