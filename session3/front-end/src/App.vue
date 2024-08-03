
<template>
  <div>
    <input v-model="message" placeholder="Type a message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  watch: {
    message(newValue, oldValue) {
      console.log(`Message changed from ${oldValue} to ${newValue}`);
    }
  }
};
</script>

