<template>
  <div class="app">
    <TheHeader />
 <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    ProductList,
  }
}
</script>

<style scoped>
</style>
