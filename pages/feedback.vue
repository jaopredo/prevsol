<script setup>

const model = ref({
    name: '',
    email: '',
    phone: '',
    sugestion: ''
})

const maskPhone = phone => {
    const regex = /^(\d{2})(\d{4,5})(\d{4})$/
    return phone.replace(/\D/g, '').replace(regex, phone.length == 1?'($1) $2-$3' : '($1) $2-$3')
}

function onMaskInput(e) {
    e.target.value = maskPhone(e.target.value)
}
function onMaskKeyUp(e) {
    if (Number(e.key) + 1) {
        e.target.value = maskPhone(e.target.value)
    } else if (e.key.length == 1) {
        e.target.value = e.target.value.slice(0, -1)
    }
}

function onSubmit(e) {
    e.preventDefault()
}

</script>

<template>
    <section class="w-full flex flex-col items-center justify-center gap-2 p-5">
        <h1 class="text-emerald-600 font-bold text-4xl">Ára de Manifestação</h1>
        <h2 class="text-lg italic break-words text-center">
            Envie suas insatisfações pelo formulário abaixo ou entre em contato com esse telefone: <strong>(88)9.3300-1579</strong>
        </h2>

        <form @submit="onSubmit" class="md:w-[73%] w-[90%] flex flex-col items-stretch justify-center gap-2">
            <div class="input-container">
                <label for="name">Nome:</label>
                <input class="input" type="text" v-model="model.name" id="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input class="input" type="text" v-model="model.email" id="email" placeholder="Digite seu email">
            </div>
            <div class="input-container">
                <label for="phone">Telefone:</label>
                <input @keyup="onMaskKeyUp" @input="onMaskInput" maxlength="15" class="input" type="text" v-model="model.phone" id="phone" placeholder="Digite seu telefone (Ex: (00)0.0000.0000">
            </div>
            <div class="input-container">
                <label for="sugestion">Reclamação:</label>
                <textarea class="input h-fit" v-model="model.sugestion" id="sugestion" cols="30" rows="10" placeholder="Deixe aqui sua reclamação ou sua sugestão..."></textarea>
            </div>

            <button type="submit" class="emerald-button !rounded-md !w-2/3 self-center text-lg font-bold">ENVIAR</button>
        </form>
    </section>
</template>


<style lang="scss" scoped>

.input-container {
    @apply flex flex-col items-stretch justify-center;
    
    label {
        @apply font-medium;
    }
}

.input {
    @apply p-2 border focus:ring-emerald-500 focus:ring-2 ring-offset-1 border-gray-400 rounded-md focus:border-emerald-500 transition-all;
}

</style>