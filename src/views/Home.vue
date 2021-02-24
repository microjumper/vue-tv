<template>
  <searchbox-component></searchbox-component>
  <div v-if="shows" class="home">
    <h2>Most Popular</h2>
    <div class="shows-container">
      <ShowComponent v-for="show in shows" :key="show.id" :show="show"></ShowComponent>
    </div>
  </div>
</template>

<script lang="ts">
import ShowComponent from "@/components/ShowComponent.vue";
import SearchboxComponent from "@/components/SearchboxComponent.vue";
import { Show } from "@/models/show.model";
import { ref, onMounted } from 'vue'
import axios from "axios";

export default {
  components: {SearchboxComponent, ShowComponent},
  setup() {
    const shows = ref<Show[]>([]);

    function getMostPopularShows(page = 1): void {
      axios
          .get(`https://www.episodate.com/api/most-popular?page=${page}`)
          .then(response => shows.value = response.data.tv_shows)
          .catch(error => console.log(error));
    }

    onMounted(() => getMostPopularShows(1));

    return {
      shows
    }
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin: 1rem 1rem 0 1rem;

    font-size: 1.5rem;
    color: #fafafa;
  }

  .shows-container {
    margin: 0.5rem;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
  }
}
</style>
