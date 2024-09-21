<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name:'App',
  components: {
    Footer,
    Navigation

  },
  setup() {
    
  },
})
</script>


<template>
  <div class="px-4"> 
    <Navigation />
    <RouterView />
    
    <Footer />
</div> 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
