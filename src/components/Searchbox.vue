<template>
  <div class="searchbar-container">
    <div class="form-floating mb-3">
      <input type="text" v-model="query" @input="searchShow"
             class="form-control" id="floatingInput" placeholder="Search a Tv show">
      <label for="floatingInput">Search a Tv show</label>

      <div class="list-group">
        <router-link class="list-group-item list-group-item-action"
                     v-for="show in shows" :key="show.id" :to="{name: 'Show', params: { id: show.id }}">
          <div class="searchable-show">
            <img :src="show.image_thumbnail_path">
            <small>{{show.name}}</small>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import {Show} from "@/models/show.model";
import axios from "axios";

export default {
  name: "Searchbox",
  setup() {
    const query = ref<string>();
    const shows = ref<Show[]>([]);

    function searchShow(): void {
      if (query.value?.length === 0) {
        shows.value = [];
        return;
      }

      const page = 1;

      axios
          .get(`https://www.episodate.com/api/search?q=${query.value}&page=${page}`)
          .then(response => shows.value = response.data.tv_shows)
          .catch(error => console.log(error));
    }

    return { query, shows, searchShow }
  }
}
</script>

<style scoped lang="scss">
  .searchbar-container {
    margin: 1rem;
  }

  .searchable-show {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 56px;
      width: 56px;
      object-fit: cover;
    }

    small {
      margin-left: 2rem;
    }
  }

  @media (min-width: 768px) {
    .searchbar-container {
      margin: 12rem;
    }
  }
</style>
