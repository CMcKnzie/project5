<script setup>
import MainCardSingle from './MainCardSingle.vue';

</script>

<template>     
    <div class ="grid grid-cols-5 gap-10 p-10">         
        <MainCardSingle v-for="card in 20" :key="card"></MainCardSingle>     
    </div>
    
</template>
