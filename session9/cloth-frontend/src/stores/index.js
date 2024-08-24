import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      token: 0,
      refresh_token: 0,
      isAuthenticate: false,
      error: false,
    };
  },
  mutations: {
    authenticate(state, data) {
       console.log(data);
       state.token = data.access;
       state.refresh_token = data.refresh;
       state.isAuthenticate = true;
    },
   logout(state) {
     state.token = 0;
     state.refresh_token = 0;
     state.isAuthenticate = false;
   },
  set_error(state) {
   state.error = true; 
   setTimeout( function(){state.error=false;}, 5000);
  },
  },
  actions: {



authenticate ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(
                'http://localhost:8100/api/token/',
                {
                       username: payload.username,
                       password: payload.password
               },
          
              {
                    headers: {
                      'Content-Type': 'application/json',
                    }
               }
        )
        .then(response => {
          commit('authenticate', response.data);
          console.log(response.data);
          resolve(response)
        })
        .catch(err => {
          commit('set_error')
          reject(err)
        })
    })
  },

   logout({commit}) {

           commit('logout');
   },
  
  },
  getters: {
    is_logged(state) {
      return state.isAuthenticate;
    },
    token(state) {
         return state.token;
    },
  },
});

export default store;

