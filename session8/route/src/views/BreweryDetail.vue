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


<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
      // create object that brewery information from API will be stored in
    let breweryDetails = ref({});
    const apiUrl = "https://api.openbrewerydb.org/breweries/";
    // here we instantiate the useRoute method in our component
    const route = useRoute();
    onMounted(() => {
        // invoke the function when our component is mounted on DOM
      fetchAllBreweryDetail();
    });
    // function to fetch all brewery information
    const fetchAllBreweryDetail = () => {
     // append the route params to the url to get information on the specific brewery clicked by user
      fetch(apiUrl + route.params.id)
        .then((response) => response.json())
        .then((data) => {
          //set data gotten from API call to our breweryDetails Object
          breweryDetails.value = data;
        });
    };
    return {
      fetchAllBreweryDetail,
      breweryDetails,
    };
  },
};
</script>


