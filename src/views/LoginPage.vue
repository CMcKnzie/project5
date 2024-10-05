<script setup>

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuth } from '../composables/useAuth';

const { login, logout } = useAuth()

const Router = useRouter()
const Route = useRoute()

const UserName = ref('')
const Password = ref('')

const LogUserIn = async () => {

    if (await login(UserName.value, Password.value)) {
        if (Route.query.redirect) {
        Router.push(Route.query.redirect)
        } else {
            Router.push({name: 'SettingsPage'})
    } 
} else {
        logout()
    }
}

</script>

<template>
    <form class="m-10" @submit.prevent>

        <div class="pb-1">
            <label for="UserName" class="block mb-2 font-bold">Username</label>
            <input id="UserName" v-model="UserName" type="text" placeholder ="Username">
        </div>

        
        <div>
            <label for="Password" class="block mb-2 font-bold">Password</label>
            <input id="Password" v-model="Password" type="password" placeholder="Password">
        </div>

        <button @click="LogUserIn" class="bg-green-500 mt-4 px-4 py-2 hover:bg-green-800 hover:text-white">Sign In</button>

    </form>
</template>