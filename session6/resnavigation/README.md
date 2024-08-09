# Vuex Introduction 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




# State Management in Vue 3 with Vuex


Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. Vuex integrates deeply with Vue, making it easy to manage shared state across components.


## Install Vuex 

```
npm install vuex@next
```

Notice  ``` vuex`` is added inside ```dependencies``` section in ```package.json``` file. 

```

{
  "name": "resnavigation",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.8.3",
    "vue": "^3.2.13",
    "vuex": "^4.0.2"
  },


```


## Creating the Vuex Store
Create a ```store``` directory inside the ```src``` folder, and within it, create an ```index.js``` file. This is where you'll define your Vuex store:


```
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;

```


## Integrating the Store with the Vue App

Now, you need to integrate the Vuex store into your Vue app. Modify the ```main.js``` file as follows:


```
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

app.use(store);

app.mount('#app');


```


## Accessing the Store in Components


Now that you have a store, you can access it in your components. Here’s an example using a ```Counter```  component:

```
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount']),
  },
  methods: {
    ...mapActions(['increment']),
  },
};
</script>



```

In this example:

* ```mapState:``` Maps state from the Vuex store to computed properties in the component.
* ```mapGetters:``` Maps getters from the Vuex store to computed properties in the component.
* ```mapActions:``` Maps actions from the Vuex store to methods in the component.
* ```mapMutations:``` Maps mutations from the Vuex store to methods in the component.



## Using Modules in Vuex

As your application grows, it’s a good idea to divide your store into modules. Each module can have its own state, mutations, actions, and getters.



Here's how you can create a module:

* Create a ```modules``` folder inside your ```store``` directory.
* Inside ```modules```, create a file called ```counter.js```:

```

export default {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
};


```

* Now, import this module into your ```index.js``` file:


```
import { createStore } from 'vuex';
import counter from './modules/counter';

const store = createStore({
  modules: {
    counter,
  },
});

export default store;


```

* Access this module in your components:


```

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('counter', ['count']),
    ...mapGetters('counter', ['doubleCount']),
  },
  methods: {
    ...mapActions('counter', ['increment']),
  },
};
</script>


```

Vuex provides a powerful tool for managing state in Vue applications, especially as they grow in complexity. Whether you're using the Options API or the Composition API, Vuex integrates seamlessly with Vue 3, providing a flexible and predictable way to manage your application's state.




