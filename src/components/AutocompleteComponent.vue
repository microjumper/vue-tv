<template>
  <div class="list-group">
    <suggestion-component v-for="show in shows" :key="show.id" :show="show"></suggestion-component>
  </div>
</template>

<script lang="ts">
import SuggestionComponent from "@/components/SuggestionComponent.vue";
import { PropType } from "vue";
import { Show } from "@/models/show.model";

export default {
  name: "AutocompleteComponent",
  components: { SuggestionComponent },
  props: {
    shows: {
      type: Array as PropType<Show[]>,
      required: true
    }
  },
}
</script>

<style>
  .list-group {
    position: absolute;
    z-index: 10;
  }
</style>
