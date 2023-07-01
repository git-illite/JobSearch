<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/jobs/results">Job Results</router-link> -->
    <main-nav />
  </nav>
  <router-view />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
