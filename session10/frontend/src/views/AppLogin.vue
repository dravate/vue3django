<template>

    {{  errorMessage }}
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div v-if="!authStore.isAuthenticated"
                class="border border-blue-800 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to your Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="login">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" v-model="username" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" v-model="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <button type="submit"
                            class="w-full text-gray-100 bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        <button v-if="errorMessage!==''"
                            class="w-full text-gray-100 bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Error:
                           Either Username or Password is Wrong!</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
            <div v-else
                class="border border-blue-800 shadow shadow-3xl w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-4xl font-bold text-gray-900 border-b-2 pb-2">Welcome to Vue3!</h1>
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">

import { defineComponent, ref, onMounted, computed} from 'vue';
import { useAuthStore } from '../stores/login';

export default defineComponent({
    name: 'AppLogin',

    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const password = ref('');
        const isLoading = ref(false);
        const errorMessage = computed( () => authStore.errorMessage);


        const login = async () => {
            isLoading.value = true;
            errorMessage.value = '';
            try {
                await authStore.login(username.value, password.value);
                alert('Login successful!');
            } catch (error) {
                errorMessage.value = error as string;
            } finally {
                isLoading.value = false;
            }
        };

        onMounted( ()=> {
           authStore.initiateAuth();
    })

    return {
            username,
            password,
            isLoading,
            errorMessage,
            login,
            authStore,
        };
    },
});
</script>
