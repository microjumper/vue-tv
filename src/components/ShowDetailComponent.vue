<template>
  <div v-if="show" class="detail-container">
    <div class="card mb-3">
      <div class="row">
        <div class="col-md-3">
          <img :src="show.image_thumbnail_path" alt="">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">{{ show.name }}</h5>
            <p class="card-text" v-html="show.description"></p>
            <p class="card-text">
              <small class="text-muted" v-for="genre in show.genres" :key="genre">{{ genre }}&nbsp;</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pictures-container">
      <img v-for="(picture, index) in show.pictures" :src="picture" :key="index" class="picture">
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {ShowDetail} from "@/models/showdetail.model";
import axios from "axios";

export default {
  name: "ShowDetailComponent",
  setup() {
    const route = useRoute()
    const show = ref<ShowDetail>()

    function getShowDetail(id: number): void {
      axios
          .get(`https://www.episodate.com/api/show-details?q=${id}`)
          .then(response => show.value = response.data.tvShow)
          .catch(error => console.log(error));
    }

    onMounted(() => getShowDetail(+route.params.id));

    return {
      show
    }
  }
}
</script>

<style lang="scss">
  .detail-container {
    margin: auto;

    max-width: 1080px;

    .card {
      border-radius: 0;

      background-color: #fafafa;
      color: #212121;

      img {
        height: 100%;
        object-fit: cover;
      }

      .card-title {
        margin-bottom: 1rem;

        font-size: 2rem;
      }

      .card-text {
        text-align: justify;

        .text-muted {
          font-size: 1rem;
        }
      }
    }

    .card, .picture {
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
    }

    .pictures-container {
      display: flex;
      flex-flow: row nowrap;

      overflow-x: auto;
      overflow-scrolling: touch;

      .picture {
        padding-right: 1rem;

        width: 305px;
        height: 180px;
        object-fit: cover;
      }
    }
  }
</style>
