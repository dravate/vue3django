<template>

    <div :class="['navbar',  responsive ? 'responsive' : '']">
        <a href="#">


<svg width="24px" height="24px" viewBox="0 0 32 32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"/>
<path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"/>
</svg>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <button class="icon"
           @click ="toggleMenu()"> &#9776;
        </button>
    </div>



<div class=""> 

<h1> Welcome to Vuex </h1> 

<TheCounter /> 

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
        background-color: whitesmoke;
    }

    .navbar a {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 20px;
        text-shadow: 0.5px 0.5px gray;
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
            width:50px;
            height: 50px; 
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
