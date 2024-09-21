<template>
    Thats Logout
</template>
<script lang="ts">

import { defineComponent, onMounted } from 'vue'
import { useAuthStore } from '../stores/login'

export default defineComponent({
    setup() {
    
        const authStore = useAuthStore();

        onMounted( ()=> {
           authStore.logout();

        }
    )
        return { authStore };
    },
    
})
</script>
