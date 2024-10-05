<script setup>

import { useRoute } from 'vue-router'
import { faker } from '@faker-js/faker'

const Route = useRoute()

const Group = faker.food.ethnicCategory()
const In1 = faker.food.ingredient()
const In2 = faker.food.ingredient()
const In3 = faker.food.ingredient()
</script>

<template>
<div class="border border-gray-400 rounded-lg shadow bg-gray200 h-full">
 <img :src="faker.image.urlLoremFlickr({width: 640, height: 480, category: 'cake'})" class="rounded-t-xl"/>

    <div class="p-4">
        <p class="mb-2 text-2xl font-bold">{{Route.params.id}}</p>
        <p class="mb-2 text 2-1 font-bold">{{ Group }}</p>
        <br/>
        <p class="mb-2 text-2-1 font-semibold">You will need</p>
    
        <ol class="ml-4 list-decimal">
            <li class="mb-2 text 2-1 font-bold">{{ In1 }}</li>
            <li class="mb-2 text 2-1 font-bold">{{ In2 }}</li>
            <li class="mb-2 text 2-1 font-bold">{{ In3 }}</li>
        </ol>
        
    </div>
</div>
</template>