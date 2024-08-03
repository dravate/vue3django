# sampleapp

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


Let's dive into creating and registering components in Vue 3 and handling parent-child communication with props and events.


## Creating and Registering Components

In Vue 3, components are reusable pieces of your UI. You can create and register components globally or locally.



###  Creating a Component

First, let's create a simple component called ```ChildComponent```.

Create a file at ```src/components/ChildComponent.vue```,

copy the following code


```
<template>
  <div>
    <p>This is a child component!</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent'
};
</script>

<style scoped>
/* Component-specific styles here */
</style>


```

### Registering Components 

**Global Registration:**

In the main application file (```main.js```), you can globally register your component.

copy the code at ```src/main.js```

```
import { createApp } from 'vue';
import App from './App.vue';
import ChildComponent from './components/ChildComponent.vue';

const app = createApp(App);
app.component('ChildComponent', ChildComponent);
app.mount('#app');

```

**Local Registration:**

You can also register components locally within another component.

Create a file ```src/components/ParentComponent.vue```:

```
<template>
  <div>
    <h1>This is a parent component!</h1>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>

```


## Parent-Child Communication

Communication between parent and child components is typically done using props and custom events.

### Passing Data with Props
Props allow you to pass data from a parent component to a child component.

copy the code to ```src/components/ChildComponent.vue:```

```
<template>
  <div>
    <p>Message from parent: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

```


and 

```src/components/ParentComponent.vue:```

as


```
<template>
  <div>
    <h1>This is a parent component!</h1>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent!'
    };
  }
};
</script>

```


### Emitting Events to Parent

You can pass data from child to parent side too

To send data or notify the parent component of an event, the child component can emit custom events.

Copy code into ```src/components/ChildComponent.vue```


```

<template>
  <div>
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    sendMessage() {
      this.$emit('message-from-child', 'Hello from child!');
    }
  }
};
</script>

```
and 

```src/compnents/ParentComponent.vue```

code from below:

```

<template>
  <div>
    <h1>This is a parent component!</h1>
    <ChildComponent @message-from-child="handleMessage" />
    <p>Message from child: {{ childMessage }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      childMessage: ''
    };
  },
  methods: {
    handleMessage(message) {
      this.childMessage = message;
    }
  }
};
</script>


```


* **Creating Components:**  Define your components in separate ```.vue``` files.
* **Registering Components:** Register components globally in ```main.js``` or locally in the parent component.
* **Props:** Pass data from parent to child using props.
* **Events:** Emit custom events from child to parent to send data or notify the parent.


This setup allows for a clean and structured way to build complex and interactive user interfaces in Vue 3.




