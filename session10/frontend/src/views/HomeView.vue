<template>


<app-login v-if="!authStore.isAuthenticated"></app-login>

<div v-else class="flex justify-center items-center text-3xl h-64 bg-gray-200">
    
    Welcome, {{ authStore.user }}! You are logged in.

</div>

</template>
<script lang="ts">

import { defineComponent, onMounted, computed  } from 'vue'
import { useAuthStore } from '../stores/login'
import AppLogin from './AppLogin.vue';

export default defineComponent({
    name: 'Home',
    components: {
        AppLogin,
    },
    setup() {
        const authStore = useAuthStore();
        const isAuthenticated = computed( () => authStore.isAuthenticated);

    return { authStore };

    },
})
</script>
