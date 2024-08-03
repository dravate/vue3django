<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <input v-model="message" placeholder="Edit me">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!'
    }
  }
}
</script>

