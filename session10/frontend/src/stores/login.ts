import axios from 'axios';
import { defineStore } from 'pinia';


export  const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    username: null as string | null,
    errorMessage : String(''),
    token: null as string | null,
  }),

  getters: {
    
    isAuthenticatged: (state) =>  {
        return JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    }

  },

  actions: {
    reset_error() {
           console.log("The reset_error method was called");
           this.errorMessage = String('');

    },
    login(username: string, password: string): Promise<void> {
      return new Promise((resolve, reject) => {
        var api_url = import.meta.env.VITE_LOGIN_URL;
        
        axios
             .post (
                api_url,
                {
                    username:username,
                    password:password
                },
                {
                    headers: {
                      'Content-Type': 'application/json',
                    }
               }
             )
             .then( response => {
                this.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
                this.username = username;
                localStorage.setItem('username', JSON.stringify(username));
                var data = response.data;
                this.token = data.access;
                localStorage.setItem('token', JSON.stringify(data.access));
                console.log(this.token);

                resolve();
             })
             .catch(err => {
                this.errorMessage = 'Invalid Parameters';
                setTimeout( ()=> {this.reset_error();}, 2000);
                console.log(this.errorMessage);
                reject(err);
              })

            })
    },
    logout() {
      this.isAuthenticated = false;
      this.username = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
    initiateAuth() {
        this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
        this.username = JSON.parse(localStorage.getItem('username')) || 'Guest';
        this.token = JSON.parse(localStorage.getItem('token')) || '';
    },
  },
});
