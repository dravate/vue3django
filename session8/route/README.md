# route

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

# Route 

In web development, routing refers to the process of routing HTTP requests to the code that handles them. Simply said, a router allows you to control what happens when a visitor views a specific page on your website.


Vue's routing is handled by the Vue Router package. If your web application or website is developed with Vue and has numerous pages that users must switch between, you will need Vue Router.


'''


% vue create route


Vue CLI v5.0.8
? Please pick a preset: Default ([Vue 3] babel, eslint)


Vue CLI v5.0.8
✨  Creating project in /Users/sopanshewale/learning/vue3django/session8/route.
⚙️  Installing CLI plugins. This might take a while...


added 872 packages, and audited 873 packages in 20s

100 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
🚀  Invoking generators...
📦  Installing additional dependencies...


added 89 packages, and audited 962 packages in 2s

112 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project route.
👉  Get started with the following commands:

 $ cd route
 $ npm run serve


```


Before we get into the core of our project, we need to focus on our viewpoints. Views refer to the pages that users will see when they visit our website or application.



Install Router 

```
%npm install vue-router@next

added 2 packages, and audited 964 packages in 3s

113 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.


```


Now create router file


```

%vi  src/router/index.js 
import { createRouter, createWebHistory } from 'vue-router';
import AllBreweries from "@/views/AllBreweries.vue"
const routes = [
    {
        path: "/",
        name: "AllBreweries",
        component: AllBreweries,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

```

Here


Let's get into what our code means.

First, we need to import the Vue Router functions createRouter and createWebHistory. These functions, in turn, produce a history that a user may access and a Vue router object.




Consider how we construct our routes in an array, with each route being an object with the following properties:

* Path is the URL path where this route can be found.
* Name is an optional name to use when linking to this route.
* Component - which component  should be loaded when this route is called. 
We then build the router object to call the createRouter function, pass in the history key values and the routes array as parameters, and finally export it.


Register Router with the app

```

 % more src/main.js 
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

createApp(App)
.use(router)
.mount('#app')


```


After registering router in main.js



Next, open up the App.vue file in the src directory and delete all its content, leaving only the following:


```

% more src/App.vue 
<template>

<router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


```


Lazy Loadig  Routes 

Let's go back a little to learn about an interesting routing technique known as lazy loading.

Because our apps become more complex as they mature, their bundle size grows, slowing down the loading time. Fortunately, Vue Router includes the lazy loading capability, which allows us to delay loading specific routes until they are visited by the user.

```

         component: () => import(
    /* webpackChunkName: "AllBreweries" */ '../views/AllBrewries.vue')

```


We've deleted our old import statement from the top and replaced the route's component property with a dynamic import statement. This statement retrieves the required file when the route is visited. That's all there is to it; we've added slow loading functionality.

```

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {   
        path: "/",
        name: "AllBreweries",
        component: AllBreweries,
      
      component: () => import(
    /* webpackChunkName: "AllBreweries" */ '../views/AllBrewries.vue')

    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```



# Dynamic routing


When a user clicks on a specific brewery in our app, they are directed to a page with more extensive information on that brewery. We can no longer establish routes manually for each brewery provided in the API. How can we solve this?

Fortunately, Vue Router includes a feature called dynamic routing, which allows us to load dynamic data via our routes. Let's see how we can make use of this.

First, we must alter our router/index.js file to create the route for the BreweryDetail.vue page:


```

  {
        path: "/brewery/:id",
        name: "BreweryDetail",
        component: () => import(
            /* webpackChunkName: "BreweryDetail" */ '../views/BreweryDetail.vue')
    },

```




The route’s path has a dynamic :id segment called a “param.” The param is used to manipulate the state of the route’s component using whatever value is passed via :id, and can be accessed using $route.params in our template, thus making the route dynamic.

Next, let’s work on the logic behind the routing for our BreweryDetail.vue page:

```
<template>
  <div class="brewery-detail">
      <!-- Button users can click to back to the previous route  -->
    <button class="back-btn" @click="$router.back()">Go back</button>
      <ul>
          <!-- Up here in the template, we access the data gotten from the API -->
        <li><strong>Name: </strong>
          {{ breweryDetails.name }}
        </li>
        <li><strong>Type: </strong>
          {{ breweryDetails.type || `Not available` }}
        </li>
        <li><strong>Country: </strong>
          {{ breweryDetails.country }}
        </li>
        <li><strong>State: </strong>
          {{ breweryDetails.state }}
        </li>
        <li><strong>Street: </strong>
          {{ breweryDetails.street || `Not available` }}
        </li>
        <li>
          <strong>Website: </strong>
            <a :href="breweryDetails.website_url">
            {{ breweryDetails.website_url || `Not Available` }}
            </a>
        </li>
      </ul>
    </div>
</template>

```



#Navigating between routes


To allow users to navigate to a brewery's specific website, we will edit the code in AllBreweries.vue's template section.

Instead of traditional HTML anchor tags, Vue Router has its own router-link component that we can send to the to prop, which accepts an object containing a collection of key or value pairs.

The router-link component allows you to travel between routes in two ways: using the path property or named routes.


# Path property


In using the path property method, we only need to pass in the URL path we want users to access when they click the link. Then, append the ID retrieved from the API and set it as the param value.

```

 <router-link :to="'/brewery/' + brewery.id">

```



# Named routes


The named routes method accepts the name key, which has access to the name property, as a value for each of the routes we build.

We also provide the params key, which accepts an object. Inside the object is the id key, which is used to set the value of the param to the ID obtained from the API.



```

<router-link 
            :to="{name: 'BreweryDetail', params: {id: brewery.id}}">
            <h3>{{ brewery.name }}</h3>
          </router-link>

```




Both methods work, but in a scenario where we have to change the name of the URL path we want users to visit, we have to manually change it at each instance.

Now, this isn’t much of a problem here because it’s used in just one place, but think of all the stress we’d have to go through if we had used that URL path at a thousand instances.

However, if we go with the named routes method, we will only need to change the URL path at one instance: our router file configuration. Sounds easy right?

Now that we’ve covered the benefits of the named route method, we’ll be proceeding with that in this tutorial.



# Handling 404 errors

Assume a user hits a route that we did not define in our router configuration file. Our app will load, but without any components. We need a means to instruct our router what to do when this circumstance occurs.

To deploy this feature, we'll need to alter the router configuration file. 



Vue Router accomplishes this by using a custom regular expression.catchAll is the dynamic segment, and (.*) is a regular expression that Vue Router uses to determine whether the route being visited is declared in our router's configuration file. If it does not exist, the NotFound.vue component is displayed on the screen instead.




--- END ---



