<template>
  <div class="image-container" @click="onClick(show)">
    <img :src="show.image_thumbnail_path" alt="">
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Show } from "@/models/show.model";
import router from "@/router";


export default {
  name: "ShowComponent",
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true
    }
  },
  methods: {
    onClick(show: Show): void {
      router.push({path: `/show/${show.id}`});
    }
  }
}
</script>

<style lang="scss">
.image-container {
  margin: 8px;

  height: 26rem;
  width: 18rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  transition: transform 0.320s;
}

.image-container:hover {
  transform: scale(1.075);
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);
}
</style>
