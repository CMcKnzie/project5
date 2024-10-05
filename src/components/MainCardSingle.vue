<script setup>

import { faker } from '@faker-js/faker'
import { RouterLink } from 'vue-router'


const Dish = faker.food.dish()
const Descript = faker.food.description()
const Time = faker.number.int(120)

const DishName = Dish.toLowerCase()

</script>

<template>
     <RouterLink :to="{name: 'CardDetails', params: {id:DishName}}">
    <div class="border border-gray-400 rounded-lg shadow bg-gray200 h-full">
        <img :src="faker.image.urlLoremFlickr({width: 640, height: 480, category: 'cake'})" class="rounded-t-xl"/>

    <div class="p-4">
        <p class="mb-2 text-2xl font-bold">{{ Dish }}</p>
        <p class="mb-3 text-gray-700 font-normal">{{Descript}}</p>
        <p class="mb-3 text-gray-700 font-normal"> Time for recipe: {{ Time }} minutes</p>
    </div>
</div>
     </RouterLink>
</template>