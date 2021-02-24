<template>
  <div class="searchbar-container">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Search a Tv show"
             v-model="query" @input="searchShow">
      <label for="floatingInput">Search a Tv show</label>
      <AutocompleteComponent :shows="shows"></AutocompleteComponent>
    </div>
  </div>
</template>

<script lang="ts">
import AutocompleteComponent from "@/components/AutocompleteComponent.vue";
import { ref } from "vue";
import { Show } from "@/models/show.model";
import axios from "axios";

export default {
  name: "SearchboxComponent",
  components: { AutocompleteComponent },
  setup() {
    const query = ref<string>('');
    const shows = ref<Show[]>([]);

    function searchShow(): void {
      if (query.value?.length > 0) {
        axios
            .get(`https://www.episodate.com/api/search?q=${query.value}&page=1`)
            .then(response => shows.value = response.data.tv_shows)
            .catch(error => console.log(error));
      } else {
        shows.value = [];
      }
    }
    return { query, shows, searchShow }
  }
}
</script>

<style lang="scss">
  .searchbar-container {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    .searchbar-container {
      margin: 12rem;
    }
  }
</style>
