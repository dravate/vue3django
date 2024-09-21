<template>
    <div class="flex justify-center items-center h-24 bg-yellow-50">

        <h1 class="text-5xl text-center"> Product List</h1>
    </div>


    <div class=" bg-gray-200">
        <!-- Loading Spinner -->
        <div v-if="loading">Loading...</div>


        <!-- Error Message -->
        <p v-if="error" class="error">{{ error }}</p>

        <div class="h-screen w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">

        <div v-if="products" v-for="product in products" :key="product.id" class="bg-white w-72 h-100 shadow-md rounded mx-10">

                <div class="h-3/4 w-full">
                    <img class="w-full h-full object-cover rounded-t" :src="product.product_image" :alt="product.name">
                </div>
                <div class="w-full h-1/4 p-3">
                    <a href="#" class=" hover:text-yellow-600 text-gray-700">
                        <span class="text-lg font-semibold uppercase tracking-wide "> {{ product.name }}</span>
                    </a>
                    <p class="text-gray-600 text-sm leading-5 mt-1">{{ product.description }}</p>

                     <span class="text-gray-600 text-sm font-bold leading-5 mt-1 flex inline border-t"> 
                    
                        <strong> Price: </strong> <svg fill="#000000" width="16px" height="16px" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"/></svg>

                        <span> {{ product.price }} /-</span>
                    </span> 
</div>
                </div>
            </div>


        </div>

    


</template>

<script lang="ts">


import { defineComponent, onMounted } from 'vue';
import { useProductStore } from '../stores/products'

export default defineComponent({
    name: 'Products',
    setup() {
        const productStore = useProductStore();

        onMounted(() => {
           productStore.allProducts();
           setTimeout('', 5000);
 
        });

        return {

            products: productStore.products,
            loading: productStore.loading,
            error: productStore.error,
        };
    },
});

</script>
