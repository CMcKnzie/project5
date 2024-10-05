<script setup>

import { ref } from 'vue'

const Pages = ref(10)
const ActivePage = ref(5)

const prev = () => {
    if (ActivePage.value > 1) {
        ActivePage.value--
        console.log(ActivePage.value)
    }
}

const next = () => {
    if (ActivePage.value < Pages.value) {
        ActivePage.value++
        console.log(ActivePage.value)
    }
}


</script>

<template>
    <div class="flex justify-center gap-4 p-8">
        <button @click="prev" :disabled="ActivePage === 1" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">PREV</button>

        <button v-for="page in Pages" :key="page" class= "rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md" :class="page ===ActivePage ? 'bg-blue-300' : 'bg-pink-200'">{{ page }}</button>

        <button @click ="next" :disable="ActivePage ===Pages" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">NEXT</button>
    </div>
</template>