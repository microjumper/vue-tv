<template>
  <nav class="navbar navbar-light bg-light">
    <div class="nav-container">
      <router-link class="navbar-brand" to="/">VueTV</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";

body {
  background-color: #212121;
}

.nav-container {
  margin: 0 1rem;
}
</style>
