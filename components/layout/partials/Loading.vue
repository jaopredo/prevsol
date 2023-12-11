<script setup>
	const { whatLoading } = defineProps(['whatLoading'])
</script>

<template>
	<div class="w-24 h-24 border-t-4 border-emerald-500 rounded-full animate-spin">
		
	</div>
	<p class="font-bold text-emerald-500">Carregando {{ whatLoading }}...</p>
</template>