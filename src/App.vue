<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/jobs/results">Job Results</router-link> -->
    <main-nav />
  </nav>
  <router-view />
</template>

<script lang="ts">
import MainNav from "@/components/Navigation/MainNav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    MainNav,
  },
});
</script>
