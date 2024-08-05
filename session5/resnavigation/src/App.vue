<template>

    <div :class="['navbar',  responsive ? 'responsive' : '']">
        <a href="#">GFG</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <button class="icon"
           @click ="toggleMenu()"> &#9776;
        </button>
    </div>


</template>

<script>

export default {
  name: 'App',

   data() {

         return {
               responsive: false
        }
  },

 methods: {

  toggleMenu() {
            this.responsive = !this.responsive;
        }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4px;
}

    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .navbar {
        overflow: hidden;
        background-color: green;
    }

    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
    }

    .navbar a:hover {
        background-color: #4CAF50;
        color: black;
    }

    .navbar button.icon {
        display: none;
    }

    @media screen and (max-width: 600px) {
        .navbar a:not(:first-child) {
            display: none;
        }

        .navbar button.icon {
            float: right;
            display: block;
        }

        .navbar.responsive {
            position: relative;
        }

        .navbar.responsive button.icon {
            position: absolute;
            right: 0;
            top: 0;
        }

        .navbar.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
    }
</style>
