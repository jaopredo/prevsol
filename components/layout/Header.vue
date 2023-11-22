<script setup>

const headerOptions = [
    {
        icon: 'material-symbols:featured-play-list-outline',
        name: 'Transparência',
        action: 'https://www.solonopole.ce.gov.br/acessoainformacao.php',
    },
    {
        icon: 'bi:person-fill',
        name: 'GPREV',
        action: 'https://www.solonopole.ce.gov.br/acessoainformacao.php',
    },
    {
        icon: 'ic:baseline-insert-drive-file',
        name: 'Contra-cheque',
        action: 'https://www.solonopole.ce.gov.br/acessoainformacao.php',
    }
]

</script>

<template>
    <header>
        <!-- Faixa divisória de enfeite -->
        <div class="h-3 w-full bg-emerald-400"></div>

        <!-- Área da Logo -->
        <div class="flex items-center justify-around h-32">
            <img src="/images/prevsol-1-logo.png" alt="Logo PREVSOL"/>

            <ul class="flex items-center justify-center gap-2">
                <li v-for="option of headerOptions">
                    <a target="_blank" class="emerald-button !p-2 !rounded-md" :href="option.action">
                        <Icon :name="option.icon" size="1.5em" />
                        <p>{{ option.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>