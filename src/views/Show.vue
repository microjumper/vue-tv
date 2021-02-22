<template>
  <div class="show-contaienr">
    <ShowDetailComponent></ShowDetailComponent>
  </div>
</template>

<script>
import ShowDetailComponent from "@/components/ShowDetailComponent";

export default {
  components: { ShowDetailComponent }
}
</script>

<style lang="scss">
  .show-contaienr {
    margin: 1rem;
  }
</style>
