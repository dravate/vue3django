# Handling Events and Methods


Let's dive deeper into event handling, methods, computed properties, and watchers in Vue 3.

## Event Handling

In Vue 3, you can listen to DOM events using the ```v-on``` directive or its shorthand ```@```. This is essential for making your application interactive.

Copy the code at ``` src/App.vue```

```
<template>
  <div>
    <button v-on:click="handleClick">Click Me</button>
    <!-- Shorthand syntax -->
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
};
</script>


```

You can also pass the object or other data to the event. 
### Passing Event Object:

Copy the following code at ```src/App.vue```


```

<template>
  <div>
    <input @keyup="handleKeyUp">
  </div>
</template>

<script>
export default {
  methods: {
    handleKeyUp(event) {
      console.log(event.key);
    }
  }
};
</script>

```

### Event Modifiers:


Vue provides event modifiers to handle common event behaviors like preventing default actions or stopping event propagation.

copy the following code:

```
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      alert('Form submitted!');
    }
  }
};
</script>

```

In Vue3, ```@submit.prevent``` is an event modifier that prevents the default behavior of a form submission. Without ```@submit.prevent,``` clicking the submit button would reload the entire page, which isn't ideal for single-page applications. By adding ```@submit.prevent```, Vue intercepts the form submission and allows you to handle it programmatically. This can be useful for tasks like form validation before submitting data.


## Methods


Methods are functions defined inside the ```methods``` option of the Vue instance. They can be called from the template and are useful for handling events or performing actions.

copy the following code

```

<template>
  <div>
    <input v-model="message" placeholder="Type a message">
    <button @click="reverseMessage">Reverse Message</button>
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
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
};
</script>

```



## Computed Properties

Computed properties are used for declarative logic and are cached based on their dependencies. They are defined inside the ```computed``` option.

copy the following code:

```
<template>
  <div>
    <p>Original Message: {{ message }}</p>
    <p>Reversed Message: {{ reversedMessage }}</p>
    <input v-model="message" placeholder="Type a message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
};
</script>

```



## Watchers


Watchers are used to perform actions in response to changes in data properties. They are defined inside the ```watch``` option.

Copy the following code:

```
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

```

### Deep Watchers:
If you need to watch an object or array for changes in its nested properties, you can use the deep option.

copy the code:

```
<template>
  <div>
    <input v-model="user.name" placeholder="Type a name">
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John'
      }
    };
  },
  watch: {
    user: {
      handler(newValue, oldValue) {
        console.log('User object changed:', newValue);
      },
      deep: true
    }
  }
};
</script>

```

* **Event Handling:** Use ```v-on``` or ```@``` to listen to events and call methods.
* **Methods:** Define reusable functions in the ```methods``` option to handle events and perform actions.
* **Computed Properties:**  Define properties that depend on other properties and are cached based on dependencies for declarative logic.
* **Watchers:** Perform actions in response to data changes, with the ability to deeply watch objects and arrays.


These features are essential for making your Vue applications dynamic, interactive, and responsive to user interactions and data changes.


