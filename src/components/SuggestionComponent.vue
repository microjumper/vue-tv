<template>
  <router-link class="list-group-item list-group-item-action" :to="{name: 'Show', params: { id: show.id }}">
    <div class="suggestion">
      <img :src="show.image_thumbnail_path">
      <small>{{show.name}}</small>
    </div>
  </router-link>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Show } from "@/models/show.model";

export default {
  name: "SuggestionComponent",
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
  .suggestion {
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
</style>
