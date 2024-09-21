import axios from 'axios';
import { defineStore } from 'pinia';
import { useAuthStore } from './login';

interface Product {
    id: number;
    name: string;
    description: string;
    product_image: string;
    price: number;
    created_at: string;
  }


export const useProductStore = defineStore('productstore', {


    state: () => ({
        products: [] as Product[],
        loading: false,
        error: null as String | null,
    }),
    getters: {


    },
    actions: {

        async allProducts() {
            const authStore = useAuthStore();
            var api_url = import.meta.env.VITE_PRODUCT_URL;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: api_url,
                headers: {
                    'Authorization': 'Bearer ' + authStore.token,
                }
            };
            this.loading = true;
            this.error = null;
        

           await axios.request(config)
                .then((response) => {
                    this.products = response.data;
                    this.loading = false;
                    console.log(this.products);
                    // console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                });

        }

    }
})

