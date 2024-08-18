<template>
  <div class="container">
    <div class="breweries-grid">
      <div
        class="brewery"
        v-for="brewery in allBreweriesList"
        :key="brewery.id"
      >
        <div class="brewery-info">
          <router-link 
          :to="{name: 'BreweryDetail', params: {id: brewery.id}}">
          <h3>{{ brewery.name }}</h3>
          </router-link>
          <p>{{ brewery.country }}</p>
          <a :href="brewery.website_url">
            {{ brewery.website_url || `Not available`}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const apiUrl = "https://api.openbrewerydb.org/breweries/";
    // We declare our list and make it reactive
    let allBreweriesList = ref([]);
    onMounted(() => {
      // We call our function here when the component is first instantiated
      fetchAllBreweries();
    });
    const fetchAllBreweries = () => {
      // Function to retrieve  a list of all breweries from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // here we set the data gotten from the API to equal our array
          allBreweriesList.value = data;
        });
    };
    return {
      allBreweriesList,
      fetchAllBreweries,
    };
  },
};
</script>
<style>
html {
  padding: 0;
  margin: 0;
}
.container {
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin: 0 auto;
}
.brewery {
  height: 200px;
  min-width: 280px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 11px hsla(208.4, 23.5%, 31.8%, 0.39),
    -1.5px -1.5px 11px rgba(0, 0, 0, 0);
  background-color: rgba(50, 155, 29, 0.568);
  cursor: pointer;
}
.breweries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 3rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 50px 0;
  margin: 0 auto;
}
.brewery-info {
  padding-left: 20px;
}
</style>
