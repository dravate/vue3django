# resnavigation

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


# Toggle the Navigation at Mobile!

```

 :class="['navbar',  responsive ? 'responsive' : '']"

```

Here CSS binding concept is used.  Check the ternary conditional operation. 


```

  toggleMenu() {
            this.responsive = !this.responsive;
        }

```

Method toggles the value of variable ```responsive```. 


