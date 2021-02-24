<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': page === 1}">
        <a class="page-link" href="#" @click="goTPreviousPage">Previous</a>
      </li>
      <li class="page-item" v-for="index in pageItems" :key="index + offset" :class="{'active': index + offset === page}">
        <a class="page-link" href="#" @click="onPageClick(index)">{{index + offset}}</a>
      </li>
      <li class="page-item" :class="{'disabled': page === totalPages}">
        <a class="page-link" href="#" @click="goToNextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "PaginationComponent",
  props: {
    pageItems: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    getMostPopularShows: {
      type: Function,
      required: true
    }
  },
  setup(props: any) {
    const page = ref<number>(1);
    const offset = ref<number>(0);

    function onPageClick(index: number) {
      if (index !== page.value) {
        page.value = index + offset.value;
        props.getMostPopularShows(page.value)
      }
    }

    function goToNextPage() {
      if (page.value <= props.totalPages) {
        page.value = page.value + 1;
        if (page.value > props.pageItems) {
          offset.value = offset.value + 1;
        }
        props.getMostPopularShows(page.value);
      }
    }

    function goTPreviousPage() {
      page.value = page.value - 1;
      if (page.value < props.pageItems) {
        offset.value = offset.value - 1;
      }
      props.getMostPopularShows(page.value);
    }

    return {
      page, offset, onPageClick, goToNextPage, goTPreviousPage
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    margin: 1rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    ul > li {
      cursor: pointer;
    }

    a:focus {
      box-shadow: none;
    }
  }
</style>
